
$(document).ready(function(){

    var test = $.test();

    var tab = $("#role").DataTable({
        dom: '<"top">t<"bottom"ilp>',
        ajax:{
        url: `${test}/rolemaster/roles`,
        dataSrc : "data",
        },

        columns : [
            {data : "roleid"},
            {data : "rolecode"},
            {data : "role_description"},
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

            } 
        ],

        columnDefs: [
            {
                "defaultContent": "-",
                "targets": "_all"
              },
            { responsivePriority: 1, targets: 0 },
            { responsivePriority: -1, targets: 3 }
            ]
    })


    $('input.global_filter').on('keyup click', function () {
        filterGlobal();
    });

    tab.column(0).visible(false);

 
    $("#search").click(()=>{
        $('#role').DataTable().column(1).search(
            $('#col' + 1 + '_filter').val(),
            $('#col' + 1 + '_smart').prop('checked')
        ).draw();
    })




    $("#role").on("click", ".delete", function () {

        var test = $.test()

        var raw = $(this).closest("tr").children();
        var row = tab.row(raw).data().roleid;
        
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-sm btn-success mx-1',
                cancelButton: 'btn btn-sm btn-danger mx-1'
            },
            buttonsStyling: false,
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
                    url: `${test}/rolemaster/deleterole/${row}`,
                    type: "delete",
                    dataSrc: "data",
                    success: function (data) {
                        window.location.reload();
                    },
                    error : function(xhr){

                        swalWithBootstrapButtons.fire({
                            text: `${xhr.responseJSON.message}`,
                            icon: 'warning',
                            confirmButtonText: 'OK',
                        })
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




    $("#role").on("click", ".edit", function () {

        var test = $.test()
        var raw = $(this).closest("tr").children();
        var row = tab.row(raw).data().roleid;
        $.ajax({
            url: `${test}/rolemaster/roles/${row}`,
            dataSrc: "data",
            success: function (data) {
                console.log(data)
                sessionStorage.setItem('roles', JSON.stringify(data.data))
                window.location.href = `../template/updateRole.jsp`;
            }
        })

    })
    
    $("#role").on("click", ".view", function () {

        var test = $.test()
        var raw = $(this).closest("tr").children();
        var row = tab.row(raw).data().roleid;
        $('#myModal5').modal('show');

        $.ajax({
            url: `${test}/rolemaster/roles/${row}`,
            dataSrc: "data",
            success: function (data) {
               $("#form6Example1").val(data.data.rolecode).css("font-weight" , "bold");
               $("#form6Example5").val(data.data.role_description).css("font-weight" , "bold");
            }
        })

    })
    $("#add_user").click(()=>{
        window.open("adduser.jsp","_self");
    })

})