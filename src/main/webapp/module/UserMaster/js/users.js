$(document).ready(() => {

    var test = $.test()

    var tab = $("#Dtable").DataTable({

        dom: '<"top">t<"bottom"ilp>',
        ordering: true,
        processing : true,
        ajax: {
            // url : "https://mocki.io/v1/fa17aa98-6058-4bf1-bd6b-a1b00cf23cbd",
            url: `${test}/usermaster/users`,
            dataSrc: "data",
            BeforeSend:{

            }
        },

        columns: [
            { data: "userid" },
            { data: "username" },
            { data: "address_number" },
            { data: "email" },
            { data: "company_code" },
            {
                data: "id", render: function (data, type, row, meta) {

                    return `
                        <div class="btn-group">
                        <button class='btn btn-outline-danger btn-sm delete'>Delete</button>&nbsp;&nbsp;  
                        <button class='btn btn-outline-success btn-sm edit'>Edit</button>&nbsp;&nbsp;
                        <button class='btn btn-outline-primary btn-sm view'>View</button>
                        </div>
                        `
                }
            },
        ],

        columnDefs: [
            {
                "defaultContent": "-",
                "targets": "_all" 
            },
            { responsivePriority: 1, targets: 0 },
            { responsivePriority: -2, targets: 5 }
        ],

    });

    tab.column(0).visible(false);


    $('input.global_filter').on('keyup click', function () {
        filterGlobal();
    });


    $("#search").click(() => {
        $('#Dtable').DataTable().column(1).search(
            $('#col' + 1 + '_filter').val(),
            $('#col' + 1 + '_smart').prop('checked')
        ).draw();
    })


    $("#Dtable").on("click", ".delete", function () {

        var test = $.test()

        var raw = $(this).closest("tr").children();
        var row = tab.row(raw).data().userid;

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-sm btn-success mx-1',
                cancelButton: 'btn btn-sm btn-danger mx-1'
            },
            buttonsStyling: false
        })
        

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: `${test}/usermaster/deleteuser/${row}`,
                    type: "delete",
                    dataSrc: "data",
                    success: function (data) {
                        window.location.reload();
                    }
                })
            } 
            else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your Data is safe :)',
                )
            }
        })
    })




    $("#Dtable").on("click", ".edit", function () {
        var test = $.test()
        var raw = $(this).closest("tr").children();

        var row = tab.row(raw).data().userid;
        $.ajax({
            url: `${test}/usermaster/users/${row}`,
            dataSrc: "data",
            success: function (data) {
                sessionStorage.setItem('object', JSON.stringify(data.data))
              window.location.href = `../template/updateUser.jsp`;
            }
        })
    })


    $("#Dtable").on("click", ".view", function () {

        var test = $.test()
        var raw = $(this).closest("tr").children();
        var row = tab.row(raw).data().userid;
        $('#myModal5').modal('show');


        $.ajax({
            url: `${test}/usermaster/users/${row}`,
            dataSrc: "data",
            success: function (data) {
                console.log(data);
                $("#input-text11")[0].innerText = data.data.first_name + " " +data.data.last_name ;
                $("#input-text12")[0].innerText = data.data.username;
                $("#form6Example3").val(data.data.first_name).css("font-weight" , "bold");
                $("#form6Example4").val(data.data.last_name).css("font-weight" , "bold");
                $("#form6Example10").val(data.data.role_ids).css("font-weight" , "bold");
                $("#form6Example5").val(data.data.address_number).css("font-weight" , "bold");
                $("#form6Example6").val(data.data.display_name).css("font-weight" , "bold");
                $("#supplier_number").val(data.data.supplier_number).css("font-weight" , "bold");
                $("#input-text13")[0].innerText = data.data.email;
                $("#form6Example8").val(data.data.business_unit).css("font-weight" , "bold");
                $("#form6Example9").val(data.data.company_code).css("font-weight" , "bold");

                if(data.data.assignroles.length==0)
                {
                    $("#countries").append(`<p class="border p-2 bg-primary">NO ROLE ASSIGNED</p>`)
                }
                else{

                    data.data.assignroles.map((value)=>{
    
                        $("#countries").append(`<button class="btn btn-success my-1 mx-1">${value.rolecode}</button>`)
                    })
                }

            }
        })
       
    })
    

    $("#myModal5").on('hide.bs.modal' , function(){
        $("#countries").children().remove();
    })

    


    $("#add_user").click(()=>{
        window.open("adduser.jsp","_self");
    })
});