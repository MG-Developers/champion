<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Add Invoice</title>

    <link href="../../../../static/css/bootstrap.min.css" rel="stylesheet">
    <link href="../../../../static/font-awesome/css/font-awesome.css" rel="stylesheet">

    <link href="../../../../static/css/animate.css" rel="stylesheet">
    <link href="../../../../static/css/style.css" rel="stylesheet">



    <link href="../css/invoice.css" rel="stylesheet">


    <script src="../../../../static/js/jquery-2.1.1.js"></script>

    <link rel="stylesheet" href="../../../../custom/adjustable-invoice/css/index.css">

    <script src="../../../../static/js/bootstrap.js"></script>

    <link rel="stylesheet" href="../../../../cdn/css/jquery.dataTables.css">
    <link rel="stylesheet" href="../../../../cdn/css/responsive.dataTables.min.css">




    <style>
        .form-control {
            padding: 2px 2px !important;
            height: 22px;
        }

        .form-group {
            margin-bottom: 0.6rem;
        }

        label {
            display: inline-block;
            margin-bottom: .5rem;
        }

        .container-fluid {
            padding: 0px !important;
        }

        .btn-outline-success {
            border-color: #18A689 !important;
        }

        .btn-outline-success:hover {
            background-color: #18A689 !important;
        }

        .col-form-label {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }

        .size {

            min-width: 800px;
        }

        .btn-success {
            border: 1px solid #18A689 !important;
            background-color: #18A689 !important;
        }

        .resize {
            margin-bottom: 0.8rem !important;
        }


        .purchase_container {
            display: flex;
            /* flex-direction: row; */
            align-items: center;
            /* justify-content: space-between; */
            margin-bottom: 5px;
        }

        .purchase_box {
            display: flex;
            /* flex-direction: row; */
            flex-wrap: wrap;
            align-items: center;
            padding: 10px;
        }

        .textbox {
            background-color: #FFFFFFFF;
            background-image: none;
            border: 1px solid #e5e6e7;
            color: inherit;
            display: block;
            padding: 6px 12px;
            transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
            width: 75%;
            font-size: 14px;
        }

        .textbox:focus {
            border-color: #18A689;
            outline: 0;
        }

        .one {
            width: 2.7vw;
        }


        #fetch_btn {
            margin-top: 10px;
        }
    </style>

</head>

<body>


    <div id="wrapper">

        <!--% including header %-->
        <jsp:include page="../../../Basic/template/header.jsp" />

        <!--% including breadcrumb %-->
        <jsp:include page="../../../Basic/template/breadcrumb.jsp" />

        <div class="modal inmodal fade" id="myModal5" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span
                                aria-hidden="true">&times;</span><span class="sr-only">Close</span></button> <br><br>
                        <div class="row">
                            <div class="col-12 px-5">
                                <div class="panel panel-primary">
                                    <div class="panel-heading">
                                        QA Result
                                    </div>
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-6" id="form1">
                                                <!-- <h4 class=" w-100 font-weight-bold">Billed To</h4> -->
                                                <!-- <hr> -->

                                                <div class="form-group"><label>Item Number
                                                    </label> <input type="text" id="F43121_LITM" readonly=""
                                                        class="form-control" style="font-weight: bold;">
                                                </div>

                                                <div class="form-group"><label>Branch Number
                                                    </label> <input type="text" id="F43121_MCU" readonly=""
                                                        class="form-control" style="font-weight: bold;">
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="col-6" id="form2">
                                                <!-- <h4 class="w-100 font-weight-bold">Shipped To</h4> -->
                                                <!-- <hr> -->

                                                <div class="form-group"><label>Item Decscription
                                                    </label> <input type="text" id="form6Example8" readonly=""
                                                        class="form-control" style="font-weight: bold;">
                                                </div>

                                                <div class="form-group"><label>Purchase Order
                                                    </label> <input type="text" id="F43121_DOC" readonly=""
                                                        class="form-control" style="font-weight: bold;">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="form-group"><label>Accept
                                                    </label> <input type="text" id="form6Example8" 
                                                        class="form-control" style="font-weight: bold;">
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="form-group"><label>Reject
                                                    </label> <input type="text" id="form6Example8" 
                                                        class="form-control" style="font-weight: bold;">
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="form-group"><label>In Review
                                                    </label> <input type="text" id="form6Example8" 
                                                        class="form-control" style="font-weight: bold;">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <input type="button" class="btn btn-primary" value="Submit"
                                                    id="btnsubmit" data-dismiss="modal">
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="modal-footer">
                        <button type="button" class="btn btn-white" data-dismiss="modal">Close</button>
                        <!-- <button id="select" type="button" data-dismiss="modal" class="btn btn-primary">Select</button> -->
                    </div><br>
                </div>
            </div>
        </div>

        <div class="wrapper wrapper-content  ">
            <form action="" id="invoice_form">
                <div class="row">
                    <div class="col-sm-8">
                        <div class="ibox ">
                            <div class="ibox-content py-3">
                                <input class="my-0 btn btn-primary " type="file" id="inputimg" accept="*"
                                    onchange="previewFile()" crossorigin />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="ibox">
                            <div class="ibox-content py-2">
                                <div class="text-center  my-2 resize d-flex justify-content-center">
                                    <input type="submit" class="btn btn-success mx-2" id="invoice"
                                        value="Submit Invoice">
                                    <input type="button" id="btn_panel"
                                        class="image-minimalize btn btn-primary px-4 mx-2" style="z-index: 1;"
                                        value="Hide Panel" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="container-fluid  d-flex my-1 bg-white "> -->
                    <!-- <div class="upload-image box p-0 d-fix p-2 border rounded  " style="z-index: 1;"> -->
                        <div class="container p-0">
                            <div class="row">
                                <div class="col-12">
                                    <div class="panel panel-primary">
                                        <div class="panel-heading">
                                            Organization Details
                                        </div>
                                        <div class="panel-body">
                                            <div class="row">
                                                <div class="col-6" id="form1">
                                                    <!-- <h4 class=" w-100 font-weight-bold">Billed To</h4> -->
                                                    <!-- <hr> -->

                                                    <div class="form-group"><label>Company
                                                        </label> <input type="text" id="form6Example8" readonly=""
                                                            class="form-control" style="font-weight: bold;">
                                                    </div>


                                                    <div class="form-group"><label>Document Number
                                                        </label> <input type="text" id="form6Example8" readonly=""
                                                            class="form-control" style="font-weight: bold;">
                                                    </div>
                                                </div>

                                                <div class="col-6" id="form2">
                                                    <!-- <h4 class="w-100 font-weight-bold">Shipped To</h4> -->
                                                    <!-- <hr> -->
                                                    <div class="form-group"><label>Business
                                                            Unit</label> <input type="text" id="form6Example8"
                                                            readonly="" class="form-control" style="font-weight: bold;">
                                                    </div>
                                                    <div class="form-group"><label>State
                                                        </label> <input type="text" id="form6Example8" readonly=""
                                                            class="form-control" style="font-weight: bold;">
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <div class="panel panel-primary">
                                        <div class="panel-heading">
                                            Invoice Detail
                                        </div>
                                        <div class="panel-body">
                                            <div class="row">

                                                <div class="col-6" id="form3">
                                                    <!-- <h4 class="w-100 font-weight-bold">Supplier</h4> -->
                                                    <!-- <hr> -->

                                                    <div class="form-group"><label>Invoice No
                                                        </label> <input type="text" id="form6Example8" readonly=""
                                                            class="form-control" style="font-weight: bold;">
                                                    </div>

                                                    <div class="form-group"><label>Invoice Type
                                                        </label> <input type="text" id="form6Example8" readonly=""
                                                            class="form-control" style="font-weight: bold;">
                                                    </div>


                                                </div>

                                                <div class="col-6" id="form4">
                                                    <!-- <h4 class="w-100 font-weight-bold invisible">Info</h4> -->
                                                    <!-- <hr> -->
                                                    <div class="form-group"><label>Vendor Code
                                                        </label> <input type="text" id="form6Example8" readonly=""
                                                            class="form-control" style="font-weight: bold;">
                                                    </div>
                                                    <div class="form-group"><label>Type
                                                        </label> <input type="text" id="form6Example8" readonly=""
                                                            class="form-control" style="font-weight: bold;">
                                                    </div>




                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div class="row">
                                <div class="col-12">
                                    <div class="panel panel-primary">
                                        <div class="panel-heading">
                                            QA
                                        </div>
                                        <div class="panel-body">
                                            <div class="row">

                                                <div class="col-12" id="form3">
                                                    <!-- <h4 class="w-100 font-weight-bold">Supplier</h4> -->
                                                    <!-- <hr> -->

                                                    <table id="Dtable" class="display responsive nowrap text-left"
                                                        style="width: 100%">

                                                        <thead>
                                                            <th class="text-left" data-toggle="true">Doc No</th>
                                                            <th class="text-left" data-hide="phone">Item Number</th>
                                                            <th class="text-left" data-hide="phone">Business Unit</th>
                                                            <th class="text-left" data-hide="phone,tablet">Order Number
                                                            </th>
                                                            <th class="text-left" data-hide="phone,tablet">Quantity
                                                            </th>
                                                            <th class="text-left" data-hide="phone,tablet">Amount
                                                            </th>
                                                            <th class="text-left" data-hide="phone,tablet">Action</th>
                                                        </thead>
                                                        <tbody id="tbodyy">
                                                        </tbody>
                                                    </table>

                                                </div>



                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    <!-- </div> -->
                <!-- </div> -->
        </div>
        </form>
        <br>
        <!--% including footer %-->
        <jsp:include page="../../../Basic/template/footer.jsp" />

    </div>




    <script src="../../../../custom/adjustable-invoice/js/index.js"></script>
    <!-- adduser JS -->


    <!-- Mainly scripts -->
    <!-- <script src="static/js/jquery-2.1.1.js"></script> -->
    <script src="../../../../static/js/popper.min.js"></script>
    <script src="../../../../static/js/bootstrap.js"></script>
    <script src="../../../../static/js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="../../../../static/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

    <!-- Custom and plugin javascript -->
    <script src="../../../../static/js/inspinia.js"></script>
    <script src="../../../../static/js/plugins/pace/pace.min.js"></script>
    <script src="../../../../static/js/plugins/jquery-ui/jquery-ui.min.js"></script>


    <script src="../../../Configration/js/globalConfig.js"></script>
    <script src="../js/addInvoice.js"></script>
    <!-- <script src="../js/view.js"></script> -->

    <!-- jQuery UI -->

    <!-- breadcrumb JS -->
    <script src="../../../../custom/js/breadcrumb.js"></script>

    <script src="../../../../cdn/js/sweetalert.min.js"></script>
    <script src="../../../../cdn/js/sweetalert2.js"></script>

    <!-- dataTable JS -->
    <script src="../../../../cdn/js/jquery.dataTables.min.js"></script>
    <script src="../../../../cdn/js/dataTables.responsive.min.js"></script>


    <script>
        $(document).ready(function () {


            var tab;
            var Business;
            
            $.ajax({

                type: 'GET',

                url: 'http://103.65.20.159:8081/jderest/v2/dataservice/table/F43121?$field=F43121.DOC&$field=F43121.DCT&$field=F43121.DOCO&$field=F43121.MCU&$field=F43121.LITM&$field=F43121.UREC&$field=F43121.AOPN&$filter=F43121.MATC%20EQ%201&$filter=F43121.DOCO%20EQ%206&$filter=F43121.DCTO%20EQ%20*&$filter=F43121.MCU%20EQ%20*&$filter=F43121.AN8%20EQ%2060177&$filter=F43121.KCOO%20EQ%20*',

                // dataSrc : "fs_DATABROWSE_F0006",

                headers: {

                    "Authorization": "Basic " + btoa("GAURAV" + ":" + "Pernod@123")

                },

                success: function (data) {

                    // console.log(data.fs_DATABROWSE_F43121.data.gridData.rowset[0].F43121_DOC);

                    //Success block  


                    Business = data.fs_DATABROWSE_F43121.data.gridData.rowset;


                    for ( i = 0; i < Business.length; i++) {

console.log(Business[i]);
                        $("#tbodyy").append(`<tr>
                            <td>${Business[i].F43121_DOC}</td>
                            <td>${Business[i].F43121_LITM}</td>
                            <td>${Business[i].F43121_MCU}</td>
                            <td>${Business[i].F43121_DOCO}</td>
                            <td>${Business[i].F43121_UREC}</td>
                            <td>${Business[i].F43121_AOPN}</td>
                            <td><div class="btn-group">
                         <input type="button" class='btn btn-outline-danger btn-sm action' value="Action" />
                         </div></td></tr>`)

                    }

                },

                error: function (xhr, ajaxOptions, throwError) {

                    //Error block

                },

                complete: () => {

                    tab = $("#Dtable").DataTable({

                        language: {

                            'paginate': {

                                'previous': '<span class="prev-icon"><i class="fa fa-angle-left"></i></span>',

                                'next': '<span class="next-icon"><i class="fa fa-angle-right"></i></span>'

                            }

                        },

                        dom: '<"top">t<"bottom"ip>',

                        ordering: true,

                        lengthMenu: [5, 10, 20, 25, 50],

                        pagingType: "simple_numbers",

                        select: true,
                    });
                    tab.column(1).visible(false);
                    tab.column(2).visible(false);
                    tab.column(3).visible(false);
                }

            })




            $("#Dtable").on("click", ".action", function () {
                var raw = $(this).closest("tr").children();
                var row = tab.row(raw).data();
                // console.log(row);
                $('#myModal5').modal('show');
                $("#F43121_LITM").val(row[1]).css("font-weight" , "bold");
                $("#F43121_MCU").val(row[2]).css("font-weight" , "bold");
                $("#F43121_DOC").val(row[0]).css("font-weight" , "bold");
            })


            
                // ("#Dtable tbody").on("click", ".delete", function (){

                //     console.log("helo");
                //     var raw = $(this).closest("tr").children();
                // console.log(raw);
                // var row = tab.row(raw).data()[0];
                // console.log(row);
                // })
                // var data = tab.row(this).data();
                // console.log(data);

            })
        

    </script>













    <script>


        var sessionString = sessionStorage.getItem('Token');
        var Token = JSON.parse(sessionString);

        // console.log(Token);

        var match = 0;
        var supply_data;
        var arr = []

        $("#fetch_btn").click(() => {

            var login = $.login()

            $.ajax({
                url: `${login}/jderest/tokenrequest`,
                type: "POST",
                data: JSON.stringify({
                    username: "GAURAV",
                    password: "Pernod@123"
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                success: function (data) {
                    $.ajax({
                        url: `${login}/jderest/v3/orchestrator/ORCH_PurchaseOrder`,
                        type: "POST",
                        data: JSON.stringify({
                            token: `${data.userInfo.token}`,
                            order_number: $("#purchase_order").val(),
                            order_type: $("#purchase_type").val(),
                        }),
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },

                        success: function (data) {

                            // console.log(data);
                            let count = $("#tab_logic tr").length - 3
                            // console.log(count);

                            var Purchase_order = $("#purchase_order").val();

                            var supplier_number = $("#supplier_number").val()

                            // console.log(supply_data);
                            if (arr.includes(Purchase_order) == false && (supply_data == data.supplier || supply_data == undefined)) {
                                for (let i = 0; i < (count == 0 ? data.po_details.length - 1 : data.po_details.length); i++)
                                // for(let i = 0 ; i <     ; i++)
                                {
                                    $("#add_row").trigger("click");
                                }

                                for (var i = (count == 0 ? count : count + 1), j = 0; i < (count == 0 ? count + data.po_details.length : (count + 1) + data.po_details.length); i++, j++)
                                // for(var i = 0 ; i < data.po_details.length ;  i++)
                                {

                                    let status = $(".details_status")[i];
                                    let gate_id = $(".details_gate_id")[i];
                                    let item_code = $(".item_code")[i];
                                    let description = $(".description")[i];
                                    let hsn_code = $(".hsn_code")[i];
                                    let quantity = $(".quantity")[i];
                                    let uom = $(".uom")[i];
                                    let rate = $(".rate")[i];
                                    let amount = $(".amount")[i];


                                    // $(status).val(" ");
                                    // $(gate_id).val(" ");
                                    $(item_code).val(data.po_details[j].item_number);
                                    $(description).val(data.po_details[j].description);
                                    // $(hsn_code).val(" ");
                                    $(quantity).val(data.po_details[j].quantity_ordered);
                                    $(uom).val(data.po_details[j].uom);
                                    $(rate).val(data.po_details[j].unit_cost);
                                    $(amount).val(data.po_details[j].ectended_price);

                                }


                                match = Purchase_order;
                                supply_data = data.supplier;
                                arr.push(Purchase_order)
                                // console.log(supply_data);
                                // console.log(arr);
                            }





                        },

                        error: function (xhr) {
                            console.log(xhr);
                        }
                    })


                }
            })





        })




        function deleteRow(button) {
            var row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
            // updateSerialNumber();
        }
        function previewFile() {
            const file = document.querySelector('input[type=file]').files[0];
            console.log(file.name);
            let extension = file.name.split('.');
            extension = extension.reverse();

            console.log(extension[0]);
            if (extension[0] == "jpg") {
                $(".ravi").children().remove();
                $(".ravi").append(`<img class="w-100 h-100" src="" id="iframe-pdf"></img>`)
                const preview = document.querySelector('img');
                const reader = new FileReader();
                var filename = file.name;


                reader.addEventListener("load", function () {
                    preview.src = reader.result;
                }, false);

                if (file) {
                    reader.readAsDataURL(file);
                }
            } else if (extension[0] == "pdf") {
                $(".ravi").children().remove();
                $(".ravi").append(`<object data="" type="application/pdf" class="w-100 h-100"></object>`)
                const preview = document.querySelector('object');
                const reader = new FileReader();
                var filename = file.name;


                reader.addEventListener("load", function () {
                    preview.data = reader.result;
                }, false);

                if (file) {
                    reader.readAsDataURL(file);
                }
            }
        }

    </script>




    <script>
        let hide = document.querySelector("#hide")
        let btn_panel = document.querySelector("#btn_panel")
        $(document).ready(() => {
            $(".image-minimalize").click(function () {
                $("#hide").toggle("hide");

                if (hide.classList.toggle("hide")) {
                    $(".upload-image").css("width", "auto")
                    btn_panel.value = "Show Panel"
                }
                else {
                    $(".upload-image").css("width", "595px")
                    btn_panel.value = "Hide Panel"
                }
            });
        })

        var oTable = document.querySelector('#tab_logic');
        var details = [];

        $("#trig").click(() => {
            $("#inputimg").trigger("click")
        })


        $("#invoice_form").submit((e) => {

            var test = $.test();
            e.preventDefault();

            var data = [...oTable.rows].map(t => [...t.children].map(u => [...u.children].map(c => c.value)));

            data.shift();
            data.pop()

            for (let i = 0; i < data.length; i++) {
                let tab_val = data[i].flat(2).flat(2)
                if (tab_val[2] || tab_val[2] == '') {
                    details.push({
                        line_nummber: tab_val[1],
                        status: tab_val[2],
                        gate_id: tab_val[3],
                        item_code: tab_val[4],
                        hsn_code: tab_val[6],
                        quantity: tab_val[7],
                        uom: tab_val[8],
                        rate: tab_val[9],
                        amount: tab_val[10],
                    })
                }
            }

            var fd = new FormData();
            var files = $('#inputimg')[0].files[0];
            fd.append('file', files);
            fd.append('json', JSON.stringify({
                billto_name: $("#billto_name").val(),
                billto_address1: $("#billto_address1").val(),
                billto_address2: $("#billto_address2").val(),
                billto_address3: $("#billto_address3").val(),
                billto_gstin: $("#billto_gstin").val(),
                billto_city: $("#billto_city").val(),
                billto_state: $("#billto_state").val(),
                billto_zipcode: $("#billto_zipcode").val(),

                shipto_name: $("#shipto_name").val(),
                shipto_address1: $("#shipto_address1").val(),
                shipto_address2: $("#shipto_address2").val(),
                shipto_address3: $("#shipto_address3").val(),
                shipto_gstin: $("#shipto_gstin").val(),
                shipto_city: $("#shipto_city").val(),
                shipto_state: $("#shipto_state").val(),
                shipto_zipcode: $("#shipto_zipcode").val(),

                supplier_invoice_nbr: $("#supplier_invoice_nbr").val(),
                supplier_date: $("#supplier_date").val(),
                supplier_order_nbr: $("#supplier_order_nbr").val(),
                supplier_vehicle_nbr: $("#supplier_vehicle_nbr").val(),
                supplier_order_date: $("#supplier_order_date").val(),
                supplier_supply_place: $("#supplier_supply_place").val(),
                supplier_supply_date: $("#supplier_supply_date").val(),
                supplier_supply_time: $("#supplier_supply_time").val(),
                supplier_despatch_mode: $("#supplier_despatch_mode").val(),

                gate_id: $("#gate_id").val(),
                status: $("#status").val(),
                vehicle_nbr: $("#vehicle_nbr").val(),
                material_type: $("#material_type").val(),
                weight: $("#weight").val(),
                in_time: $("#in_time").val(),
                out_time: $("#out_time").val(),
                devision: $("#devision").val(),
                remark: $("#remark").val(),
                queue_id: $("#queue_id").val(),
                details: details,
            }))

            $.ajax({
                url: `${test}/gate/entry`,
                type: 'post',
                data: fd,
                contentType: false,
                processData: false,
                success: function (response) {
                    console.log(response);
                    if (response.status == 200) {

                        window.open("invoice.jsp", "_self");
                    }
                    else {
                        const swalWithBootstrapButtons = Swal.mixin({
                            customClass: {
                                confirmButton: 'btn btn-success',
                            },
                            buttonsStyling: false
                        })
                        swalWithBootstrapButtons.fire({
                            title: `${response.message}`,
                            icon: 'warning',
                            confirmButtonText: 'OK',
                            reverseButtons: true
                        })

                    }
                },
                error: function (xhr) {
                    console.log(xhr);
                }
            });

        })

    </script>


</body>

</html>