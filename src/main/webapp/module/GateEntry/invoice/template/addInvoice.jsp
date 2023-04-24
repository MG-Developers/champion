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

    <script src="../../../../static/js/jquery-2.1.1.js"></script>

    <link rel="stylesheet" href="../../../../custom/adjustable-invoice/css/index.css">

    <script src="../../../../static/js/bootstrap.js"></script>


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

                <div class="row">
                    <div class="col-lg-12 ">
                        <div class="card  mx-auto p-3 white-bg">
                            <div class="row ">
                                <!-- <div class="purchase_box col-sm-10"> -->
                                <!-- <div class="col-1"></div> -->
                                <div class="form-group col-sm-3">
                                    <label class="control-label">Purchase Order *</label>
                                    <input type="text" class="textbox" id="purchase_order" placeholder="Purchase Order">
                                </div>

                                <div class="form-group col-sm-3">
                                    <label class="control-label">Purchase Order Type *</label>
                                    <input type="text" class="textbox" id="purchase_type"
                                        placeholder="Purchase OrderType">
                                </div>

                                <div class="form-group col-sm-3">
                                    <label class="control-label">Supplier Number *</label>
                                    <input type="text" class="textbox" id="supplier_number"
                                        placeholder="Supplier Number">
                                </div>
                                <!-- </div> -->
                                <div class="form-group col-sm-2 d-flex align-items-center">
                                    <input type="button" class="btn btn-success " id="fetch_btn" value="Fetch Data">
                                </div>
                                <div class="col-1"></div>
                            </div>
                        </div>
                    </div>
                </div><br>

                <!-- <div class="row">
                <div class="purchase_container white-bg">
                <div class="purchase_box col-sm-10">
                    <div class="form-group col-sm-6">
                        <label class="control-label">Purchase Order *</label>
                        <input type="text" class="textbox" placeholder="Purchase Order">
                    </div>

                    <div class="form-group col-sm-6">
                        <label class="control-label">Purchase Order Type *</label>
                        <input type="text" class="textbox" placeholder="Purchase OrderType">
                    </div>
                </div>
                <div class="form-group col-sm-3">
                    <input type="button" class="btn btn-success mx-3" id="fetch_btn" value="Fetch Data">
                </div>
            </div>
            </div> -->
                <div class="container-fluid  d-flex my-1 bg-white ">
                    <div class="upload-image box p-0 d-fix p-2 border rounded  " style="z-index: 1;">
                        <div class="container p-0">
                            <div class="row">
                                <div class="col-12">
                                    <div class="panel panel-primary">
                                        <div class="panel-heading">
                                            Default Panel
                                        </div>
                                        <div class="panel-body">
                                            <div class="row">
                                                <div class="col-6 b-r" id="form1">
                                                    <h4 class=" w-100 font-weight-bold">Billed To</h4>
                                                    <hr>

                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label ">Name</label>
                                                        <div class=" col-9"><input type="text" class="form-control"
                                                                required="" id="billto_name">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">Address</label>
                                                        <div class="col-9"><input type="text" class="form-control"
                                                                required="" id="billto_address1">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label invisible">:</label>
                                                        <div class="col-9"><input type="text" class="form-control"
                                                                required="" id="billto_address2">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row "><label
                                                            class="col-3 col-form-label invisible ">:</label>
                                                        <div class="col-9"><input type="text" class="form-control "
                                                                required="" id="billto_address3"></div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">GSTIN</label>
                                                        <div class="col-9"><input type="text" class="form-control  "
                                                                required="" id="billto_gstin">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">City</label>
                                                        <div class="col-9"><input type="text" class="form-control  "
                                                                required="" id="billto_city">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">State</label>
                                                        <div class="col-9"><input type="text" class="form-control  "
                                                                required="" id="billto_state">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">State Code</label>
                                                        <div class="col-9"><input type="number" class="form-control"
                                                                required="" id="billto_zipcode">
                                                        </div>
                                                    </div><br>
                                                </div>

                                                <div class="col-6" id="form2">
                                                    <h4 class="w-100 font-weight-bold">Shipped To</h4>
                                                    <hr>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">Name</label>
                                                        <div class="col-9"><input type="text" class="form-control"
                                                                required="" id="shipto_name">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">Address</label>
                                                        <div class="col-9"><input type="text" class="form-control"
                                                                required="" id="shipto_address1">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label invisible">:</label>
                                                        <div class="col-9"><input type="text" class="form-control"
                                                                required="" id="shipto_address2">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label invisible">:</label>
                                                        <div class="col-9"><input type="text" class="form-control"
                                                                required="" id="shipto_address3">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">GSTIN</label>
                                                        <div class="col-9"><input type="text" class="form-control"
                                                                required="" id="shipto_gstin">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">City</label>
                                                        <div class="col-9"><input type="text" class="form-control"
                                                                required="" id="shipto_city">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">State</label>
                                                        <div class="col-9"><input type="text" class="form-control "
                                                                required="" id="shipto_state">
                                                        </div>

                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">State Code</label>
                                                        <div class="col-9"><input type="number" class="form-control "
                                                                required="" id="shipto_zipcode">
                                                        </div>
                                                    </div><br>
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
                                            Default Panel
                                        </div>
                                        <div class="panel-body">
                                            <div class="row">

                                                <div class="col-6 b-r" id="form3">
                                                    <h4 class="w-100 font-weight-bold">Supplier</h4>
                                                    <hr>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">Invoice No.</label>
                                                        <div class="col-9"><input type="number" class="form-control"
                                                                required="" id="supplier_invoice_nbr">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-3 col-form-label">Date </label>
                                                        <div class="col-9"><input type="date" class="form-control "
                                                                required="" id="supplier_date">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">Order No.</label>
                                                        <div class="col-9"><input type="text" class="form-control"
                                                                required="" id="supplier_order_nbr">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">Vehicle No.</label>
                                                        <div class="col-9"><input type="text" class="form-control"
                                                                required="" id="supplier_vehicle_nbr">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">Order Date</label>
                                                        <div class="col-9"><input type="date" class="form-control"
                                                                required="" id="supplier_order_date">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">Place of
                                                            Supply</label>
                                                        <div class="col-9"><input type="text" class="form-control"
                                                                required="" id="supplier_supply_place">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label class="col-4 col-form-label">Date
                                                            &amp; Time of
                                                            Supply</label>
                                                        <div class="col-4"><input type="date" class="form-control"
                                                                required="" id="supplier_supply_date">
                                                        </div>
                                                        <div class="col-4"><input type="time" step="1"
                                                                class="form-control" required=""
                                                                id="supplier_supply_time">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label class="col-4 col-form-label">Mode
                                                            of
                                                            Dispatch</label>
                                                        <div class="col-8"><input type="text" class="form-control"
                                                                required="" id="supplier_despatch_mode">
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="col-6" id="form4">
                                                    <h4 class="w-100 font-weight-bold invisible">Info</h4>
                                                    <hr>
                                                    <div class="form-group row"><label class="col-3 col-form-label">Gate
                                                            Id</label>
                                                        <div class="col-3"><input type="number" class="form-control"
                                                                required="" id="gate_id"></div>
                                                        <label class="col-3 col-form-label">Status</label>
                                                        <div class="col-3"><input type="number" class="form-control "
                                                                required="" id="status"></div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">Vehicle Nbr</label>
                                                        <div class="col-9"><input type="text" class="form-control"
                                                                required="" id="vehicle_nbr">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">Material
                                                            Type</label>
                                                        <div class="col-9"><input type="text" class="form-control"
                                                                required="" id="material_type">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">Weight</label>
                                                        <div class="col-9"><input type="number" class="form-control"
                                                                required="" id="weight"></div>
                                                    </div>
                                                    <div class="form-group row"><label class="col-3 col-form-label">In
                                                            &amp; Out
                                                            Time</label>
                                                        <div class="col-4"><input type="time" step="1"
                                                                class="form-control" required="" id="in_time"></div>
                                                        <div class="col-5"><input type="time" step="1"
                                                                class="form-control" required="" id="out_time"></div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">Devision</label>
                                                        <div class="col-9"><input type="text" class="form-control"
                                                                required="" id="devision"></div>
                                                    </div>
                                                    <div class="form-group row"><label
                                                            class="col-3 col-form-label">Remark</label>
                                                        <div class="col-9"><input type="text" class="form-control"
                                                                required="" id="remark"></div>

                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-3 col-form-label">Queue Id</label>
                                                        <div class="col-9"><input type="number" class="form-control "
                                                                required="" id="queue_id"></div>
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
                                            Default Panel
                                        </div>
                                        <div class="panel-body">
                                            <div class="row d-flex justify-content-end">
                                                <div class="container overflow-auto">
                                                    <div class="row clearfix">
                                                        <div class="size">
                                                            <table class="table table-bordered table-hover"
                                                                id="tab_logic">
                                                                <thead>
                                                                    <tr>
                                                                        <th class="text-center"> Sr. No </th>
                                                                        <th class="text-center"> line Number</th>
                                                                        <th class="text-center"> Status </th>
                                                                        <th class="text-center"> Gate Id </th>
                                                                        <th class="text-center">Item Code</th>
                                                                        <th class="text-center">Description</th>
                                                                        <th class="text-center"> HSN Code </th>
                                                                        <th class="text-center"> Quantity </th>
                                                                        <th class="text-center"> UOM </th>
                                                                        <th class="text-center"> Rate </th>
                                                                        <th class="text-center"> Amount </th>
                                                                        <th class="text-center"> Action </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr id="addr0">
                                                                        <td><input type="number"
                                                                                class="form-control one" required=""
                                                                                readonly="" value="1"></td>
                                                                        <td><input type="number"
                                                                                class="form-control line_num"
                                                                                required="" id="line_num" value="1">
                                                                        </td>
                                                                        <td><input type="number"
                                                                                class="form-control details_status"
                                                                                required="" id="details_status">
                                                                        </td>
                                                                        <td><input type="number" id="details_gate_id"
                                                                                required=""
                                                                                class="form-control details_gate_id">
                                                                        </td>
                                                                        <td><input type="text" id="item_code"
                                                                                required=""
                                                                                class="form-control item_code">
                                                                        </td>
                                                                        <td><input type="text" id="description"
                                                                                required="" maxlength="25"
                                                                                class="form-control description">
                                                                        </td>
                                                                        <td><input type="number" id="hsn_code"
                                                                                required=""
                                                                                class="form-control hsn_code">
                                                                        </td>
                                                                        <td><input type="number" id="quantity"
                                                                                required=""
                                                                                class="form-control quantity">
                                                                        </td>
                                                                        <td><input type="text" id="uom" required=""
                                                                                class="form-control uom"></td>
                                                                        <td><input type="number" id="rate" required=""
                                                                                class="form-control rate"></td>
                                                                        <td><input type="number" id="amount" required=""
                                                                                class="form-control amount"></td>
                                                                        <td><button type="button"
                                                                                onclick="deleteRow(this)"
                                                                                class="btn btn-sm btn-danger border p-0 w-100">
                                                                                X </button></td>
                                                                    </tr>
                                                                    <tr id="addr1"></tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="row d-flex justify-content-start ml-0">
                                                        <input type="button" id="add_row" class="btn btn-default border"
                                                            value="Add row">&nbsp;
                                                        <input type="button" id="delete_row"
                                                            class="btn btn-default border" value="Delete row">
                                                    </div><br><br>
                                                </div>
                                                <!-- <input type="submit" class="btn btn-outline-success mt-4 mr-5"
                                                id="invoice" value="Submit invoice"> -->
                                            </div><br><br>


                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="handler  bg-white "></div>
                    <div class="upload-image box border bg-body rounded d-f" id="hide" style="z-index: 1;">
                        <div class="container-fluid h-100 p-0 ravi">
                            <!-- <input class="my-1" type="file" id="inputimg" accept="*" onchange="previewFile()" crossorigin /> -->
                        </div>
                    </div>
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
        
        <!-- jQuery UI -->
        
        <!-- breadcrumb JS -->
        <script src="../../../../custom/js/breadcrumb.js"></script>

        <script src="../../../../cdn/js/sweetalert.min.js"></script>
        <script src="../../../../cdn/js/sweetalert2.js"></script>


     
        
        <script>
            
            
            var sessionString = sessionStorage.getItem('Token');
            var Token = JSON.parse(sessionString);

            // console.log(Token);

            var match = 0;
            var supply_data;
            var arr = []


            $("#fetch_btn").click(() => {

                var login  = $.login()

                $.ajax({
                    url : `${login}/jderest/tokenrequest`,
                    type : "POST",
                    data : JSON.stringify({
                        username : "GAURAV",
                        password : "Pernod@123"
                    }),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
                    },

                    success : function(data){
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
                        'Content-Type':'application/json'
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