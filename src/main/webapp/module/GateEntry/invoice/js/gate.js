$(document).ready(() => {

    var test = $.test()

    var tab = $("#Dtable").DataTable({

        dom: '<"top">t<"bottom"ilp>',
        ordering: true,
        processing : true,
        ajax: {
            url: `http://192.168.0.177:8050/gate/numbers`,
            dataSrc: "data",    
        },
        
        
        columns: [
            { data: "id" },
            { data: "company" },
            { data: "mcu" },
            { data: "process" },
            { data: "year" },
            { data: "currentIndex" },
            { data: "lastNumber" },
            { data: "length" },

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
            { responsivePriority: -2, targets: 6 }
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


    // $("#Dtable").on("click", ".delete", function () {

    //     var test = $.test()

    //     var raw = $(this).closest("tr").children();
    //     var row = tab.row(raw).data().id;

    //     console.log(row);



    //     const swalWithBootstrapButtons = Swal.mixin({
    //         customClass: {
    //             confirmButton: 'btn btn-sm btn-success mx-1',
    //             cancelButton: 'btn btn-sm btn-danger mx-1'
    //         },
    //         buttonsStyling: false
    //     })
        

    //     swalWithBootstrapButtons.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonText: 'Delete',
    //         cancelButtonText: 'cancel!',
    //         reverseButtons: true
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             $.ajax({
    //                 url: `${test}/gate/delete/${row}`,
    //                 type: "delete",
    //                 dataSrc: "data",
    //                 success: function (data) {
    //                     {
    //                         swalWithBootstrapButtons.fire(
    //                             'Entry Deleted!',
    //                             ).then(()=>{
    //                                 window.location.reload();
    //                             })
    //                     }
    //                 }
    //             })
    //         } 
    //         else if (
    //             result.dismiss === Swal.DismissReason.cancel
    //         ) {
    //             swalWithBootstrapButtons.fire(
    //                 'Cancelled',
    //                 'Your Data is safe :)',
    //             )
    //         }
    //     })
    // })




    $("#Dtable").on("click", ".edit", function () {

        var test = $.test()
        var raw = $(this).closest("tr").children();
        var row = tab.row(raw).data().id;
        $.ajax({
            url: `${test}/gate/number/${id}`,
            dataSrc: "data",
            success: function (data) {
                sessionStorage.setItem('object', JSON.stringify(data.data))
                window.location.href = `../template/updateGate.jsp`;    
        },
        })

    })


    $("#Dtable").on("click", ".view", function () {
        var test = $.test()
        var raw = $(this).closest("tr").children();
        var row = tab.row(raw).data().id;
        $('#myModal5').modal('show');

        $.ajax({
            url: `${test}/gate/get/${row}`,
            dataSrc: "data",
            success: function (data) {

                console.log(data.data.details.length);
                $("#billto_name").val(data.data.billto_name).css("font-weight" , "bold");
                $("#billto_address1").val(data.data.billto_address1).css("font-weight" , "bold");
                $("#billto_address2").val(data.data.billto_address2).css("font-weight" , "bold");
                $("#billto_address3").val(data.data.billto_address3).css("font-weight" , "bold");
                $("#billto_gstin").val(data.data.billto_gstin).css("font-weight" , "bold");
                $("#billto_city").val(data.data.billto_city).css("font-weight" , "bold");
                $("#billto_state").val(data.data.billto_state).css("font-weight" , "bold");
                $("#billto_zipcode").val(data.data.billto_zipcode).css("font-weight" , "bold");
                
                $("#shipto_name").val(data.data.shipto_name).css("font-weight" , "bold");
                $("#shipto_address1").val(data.data.shipto_address1).css("font-weight" , "bold");
                $("#shipto_address2").val(data.data.shipto_address2).css("font-weight" , "bold");
                $("#shipto_address3").val(data.data.shipto_address3).css("font-weight" , "bold");
                $("#shipto_gstin").val(data.data.shipto_gstin).css("font-weight" , "bold");
                $("#shipto_city").val(data.data.shipto_city).css("font-weight" , "bold");
                $("#shipto_state").val(data.data.shipto_state).css("font-weight" , "bold");
                $("#shipto_zipcode").val(data.data.shipto_zipcode).css("font-weight" , "bold");
                
                $("#supplier_invoice_nbr").val(data.data.supplier_invoice_nbr).css("font-weight" , "bold");
                $("#supplier_date").val(data.data.supplier_date).css("font-weight" , "bold");
                $("#supplier_order_nbr").val(data.data.supplier_order_nbr).css("font-weight" , "bold");
                $("#supplier_vehicle_nbr").val(data.data.supplier_vehicle_nbr).css("font-weight" , "bold");
                $("#supplier_order_date").val(data.data.supplier_order_date).css("font-weight" , "bold");
                $("#supplier_supply_place").val(data.data.supplier_supply_place).css("font-weight" , "bold");
                $("#supplier_supply_date").val(data.data.supplier_supply_date).css("font-weight" , "bold");
                $("#supplier_supply_time").val(data.data.supplier_supply_time).css("font-weight" , "bold");
                $("#supplier_despatch_mode").val(data.data.supplier_despatch_mode).css("font-weight" , "bold");
               
                $("#gate_id").val(data.data.gate_id).css("font-weight" , "bold");
                $("#status").val(data.data.status).css("font-weight" , "bold");
                $("#vehicle_nbr").val(data.data.vehicle_nbr).css("font-weight" , "bold");
                $("#material_type").val(data.data.material_type).css("font-weight" , "bold");
                $("#weight").val(data.data.weight).css("font-weight" , "bold");
                $("#in_time").val(data.data.in_time).css("font-weight" , "bold");
                $("#out_time").val(data.data.out_time).css("font-weight" , "bold");
                $("#devision").val(data.data.devision).css("font-weight" , "bold");
                $("#remark").val(data.data.remark).css("font-weight" , "bold");
                $("#queue_id").val(data.data.queue_id).css("font-weight" , "bold");

                // console.log(data.data.details.length);
                
                    for(let i = 0 ; i < data.data.details.length-1 ; i++)
                    {
                        $("#add_row").trigger("click");
                    }
                    
                        for(let i = 0 ; i < data.data.details.length ; i++)
                        {
                            let line_number =$(".line_num")[i];
                            let status =$(".details_status")[i];
                            let gate_id =$(".details_gate_id")[i];
                            let item_code =$(".item_code")[i];
                            let hsn_code =$(".hsn_code")[i];
                            let quantity =$(".quantity")[i];
                            let uom =$(".uom")[i];
                            let rate =$(".rate")[i];
                            let amount =$(".amount")[i];
                            
                            
                            $(line_number).val(data.data.details[i].line_number);
                            $(status).val(data.data.details[i].status);
                            $(gate_id).val(data.data.details[i].gate_id);
                            $(item_code).val(data.data.details[i].item_code);
                            $(hsn_code).val(data.data.details[i].hsn_code);
                            $(quantity).val(data.data.details[i].quantity);
                            $(uom).val(data.data.details[i].uom);
                            $(rate).val(data.data.details[i].rate);
                            $(amount).val(data.data.details[i].amount);
                
                            
                        }
                        
                        $("#myModal5").on('hide.bs.modal' , function(){
                            for(let i = 0 ; i < data.data.details.length-1 ; i++)
                            {
                                $("#delete_row").trigger("click");
                            }
                })
            }
        })
       
    })
    
    
    
    // $("#add_user").click(()=>{
    //     window.open("adduser.jsp","_self");
    // })


})