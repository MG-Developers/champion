<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="" />
    <title>Document</title>
    <link href="../../../../static/css/bootstrap.min.css" rel="stylesheet" />
    <link href="../../../../static/font-awesome/css/font-awesome.css" rel="stylesheet" />

    <link href="../../../../static/css/animate.css" rel="stylesheet" />
    <link href="../../../../static/css/style.css" rel="stylesheet" />

    <link rel="stylesheet" href="../css/Inbound.css" />

    <script src="../../../../static/js/bootstrap.js"></script>

    <link rel="stylesheet" href="../../../../cdn/css/jquery.dataTables.css" />
    <link rel="stylesheet" href="../../../../cdn/css/responsive.dataTables.min.css" />
    <link rel="stylesheet" href="../../../../cdn/css/select.dataTables.min.css" />

    <script src="../../../../cdn/js/sweetalert2.js"></script>
    <script src="../../../../cdn/js/sweetalert.min.js"></script>


    <script src="../../../../static/js/jquery-2.1.1.js"></script>
</head>

<body>

    <div id="wrapper">
        <!--% including header %-->
        <jsp:include page="../../Basic/template/header.jsp" />
        <!--% including breadcrumb %-->
        <jsp:include page="../../Basic/template/breadcrumb.jsp" />

        <div class="wrapper wrapper-content ">
            <div class="row">
                <div class="col-lg-12 ">
                    <div class="card  mx-auto p-4 white-bg">
                        <div class="card-body ">
                            <div class="container ">
                                <form action="" id="inbound_form">
                                    <div class="grid-container">

                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label"
                                                    style="font-weight: bolder; font-size: 13px; color: #676a6c">Vendor
                                                    Invoice
                                                    No.</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="invoice_number" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label"
                                                    style="font-weight: bolder; font-size: 13px; color: #676a6c">Vendor
                                                    Invoice
                                                    Date</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="VendorInvoiceDate" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label"
                                                    style="font-weight: bolder; font-size: 13px; color: #676a6c">DC
                                                    Number
                                                </label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="DCNumber" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label"
                                                    style="font-weight: bolder; font-size: 13px; color: #676a6c">
                                                    Work Order NO.
                                                </label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="workorderno" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label"
                                                    style="font-weight: bolder; font-size: 13px; color: #676a6c">
                                                    PO Number
                                                </label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="PONumber" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label"
                                                    style="font-weight: bolder; font-size: 13px; color: #676a6c">PO
                                                    Type
                                                </label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="POType" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label"
                                                    style="font-weight: bolder; font-size: 13px; color: #676a6c">Weight
                                                    /
                                                    Quantity
                                                </label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="weightquantity" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label"
                                                    style="font-weight: bolder; font-size: 13px; color: #676a6c">Invoice
                                                    Amount
                                                </label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="InvoiceAmount" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="vendor-info">
                                        <h1 style="color: white">Vendor Invoice Information</h1>
                                    </div>

                                    <div id="grid-2">
                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">LR No. </label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="LRNo" />
                                                </div>
                                            </div>
                                        </div>


                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">LR Date
                                                </label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="LRDate" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">Contract
                                                    No.</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="ContractNo" />
                                                </div>
                                            </div>
                                        </div>


                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">Contract
                                                    Date</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="ContractDate" />
                                                </div>
                                            </div>
                                        </div>



                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">State</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="State" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">Weight</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="Weight" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">EWAY BILL</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="EWAYBILL" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">IRN
                                                    Number</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="IRNNumber" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="Tax-info">
                                        <h1 style="color: white">Tax Information</h1>
                                    </div>

                                    <div id="grid-3">
                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">CGST RATE</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="cgstRate" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">CGST
                                                    AMOUNT</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="cgstAmount" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">SGST RATE</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="sgstRate" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">SGST
                                                    AMOUNT</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="sgstAmount" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">IGST RATE</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="igstRate" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">IGST
                                                    AMOUNT</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="igstAmount" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">CESS RATE</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="cessRate" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">CESS
                                                    AMOUNT</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="cessAmount" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">Taxable
                                                    value</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="taxableValue" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid-item b-r">
                                            <div class="form-group row">
                                                <label class="col-3 col-form-label" id="label-inbound">Invoice
                                                    Amount</label>
                                                <div class="col-9">
                                                    <input type="text" class="form-control input_size check" required=""
                                                        id="invoiceAmount" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="Tax-info">
                                            <h1 style="color: white">Product Detail Information</h1>
                                        </div>

                                        <div id="product-details">
                                            <table id="product-table" class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" style="width: 10vh">SNo.</th>
                                                        <th scope="col" style="width: 25vw">Item Code</th>
                                                        <th scope="col" style="width: 25vw">Description</th>
                                                        <th scope="col">Hsn</th>
                                                        <th scope="col">UOM</th>
                                                        <th scope="col">Qty</th>
                                                        <th scope="col">Unit</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                </tbody>
                                            </table>
                                        </div>

                                        <div id="buttons">
                                            <button type="button" class="btn btn-outline-primary" id="addButton"
                                                style="background-color: #24537f; color: white">Add</button>
                                        </div>

                                        <div class="px-2 offset-1 my-3 d-flex justify-content-start ">
                                            <button class="btn cancel btn-outline-danger pt-2 m-1">Cancel</button>
                                            <button type="submit" class="btn add btn-primary pt-2 m-1">Saves
                                                Changes</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--% including footer %-->
        <jsp:include page="../../Basic/template/footer.jsp" />
    </div>
</body>
<!-- Mainly scripts -->
<script src="../../../../static/js/popper.min.js"></script>
<script src="../../../../static/js/bootstrap.js"></script>
<script src="../../../../static/js/plugins/metisMenu/jquery.metisMenu.js"></script>
<script src="../../../../static/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

<!-- Custom and plugin javascript -->
<script src="../../../../static/js/inspinia.js"></script>
<script src="../../../../static/js/plugins/pace/pace.min.js"></script>

<!-- jQuery UI -->
<script src="../../../../static/js/plugins/jquery-ui/jquery-ui.min.js"></script>

<!-- addStatus JS -->

<script src="../../../Configration/js/globalConfig.js"></script>

<script src="../js/updateInbound.js"></script>

<!-- breadcrumb JS -->
<script src="../../../../custom/js/breadcrumb.js"></script>

<!-- dataTable JS -->
<script src="../../../../cdn/js/jquery.dataTables.min.js"></script>
<script src="../../../../cdn/js/dataTables.responsive.min.js"></script>
<script src="../../../../cdn/js/dataTables.select.min.js"></script>

</html>