<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>View</title>

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
        /* .form-control {
            padding: 2px 2px !important;
            height: 30px;
        } */

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
            border-color: #24537f !important;
        }

        .btn-outline-success:hover {
            background-color: #24537f !important;
        }

        .col-form-label {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }

        .size {

            min-width: 800px;
        }

        .btn-success {
            border: 1px solid #24537f !important;
            background-color: #24537f !important;
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
            border-color: #24537f;
            outline: 0;
        }

        .one {
            width: 2.7vw;
        }

        .py-3 {
            padding-bottom: 4rem !important;

        }

        .py-2 {
            padding-bottom: 0.7rem !important;
        }

        .btn {
            border: none;
            outline: none;
            padding: 10px 16px;
            background-color: #f1f1f1;
            cursor: pointer;
        }

        .active,
        .btn:hover {
            background-color: #797171;
            color: white;
        }

        #fetch_btn {
            margin-top: 10px;
        }

        .upload-image {
            overflow: hidden !important;
            height: auto !important;

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
            <div class="row">
                <div class="col-lg-12 ">
                    <div class="card mx-auto p-4 white-bg">
                        <div class="card-body ">
                            <div class="container ">

                                <form class="contact-form" id="form">
                                    <div class="controls">
                                        <div class="row">
                                            <div class="col-1"></div>
                                            <div class="col-md-4">

                                                <div class="form-group">
                                                    <label>Company Id*</label>
                                                    <input type="text" placeholder="Enter company id"
                                                        class="form-control" required="" maxlength="15"
                                                        id="form6Example1">
                                                </div>

                                                <div class="form-group">
                                                    <label>Company Name*</label>
                                                    <input type="text" required="" maxlength="10" id="form6Example2"
                                                        placeholder="Enter company name" class="form-control">
                                                </div>

                                                <div class="form-group">
                                                    <label>Business Unit*</label>
                                                    <input type="text" required="" maxlength="10" id="form6Example3"
                                                        placeholder="Business Unit" class="form-control">
                                                </div>

                                                <div class="form-group">
                                                    <label>Process*</label>
                                                    <input type="text" required="" maxlength="10" id="form6Example4"
                                                        placeholder="Enter process" class="form-control">
                                                </div>

                                            </div>

                                            <div class="col-2"></div>

                                            <div class="col-md-4">

                                                <div class="form-group">
                                                    <label>Year*</label>
                                                    <input type="month" required="" maxlength="8" id="form6Example5"
                                                        class="form-control">
                                                </div>

                                                <div class="form-group">
                                                    <label>Current Index*</label>
                                                    <input type="text" required="" maxlength="25" id="form6Example6"
                                                        placeholder="Enter Current Index" class="form-control">
                                                </div>

                                                <div class="form-group">
                                                    <label>Last Number*</label>
                                                    <input type="text" required="" maxlength="25" id="form6Example7"
                                                        placeholder="Enter last number" class="form-control"
                                                        required="">
                                                </div>

                                                <div class="form-group">
                                                    <label>Length *</label>
                                                    <input type="text" required="" maxlength="25" id="form6Example8"
                                                        placeholder="Enter length" class="form-control"
                                                        required="">
                                                </div>

                                                <br>
                                                <!-- 
                                                <div id="myDIV">
                                                    <button class="btn active">Active</button>
                                                    <button class="btn">Disabled</button>
                                                </div> -->

                                                <div class="px-2 offset-1 my-3 d-flex justify-content-start ">
                                                    <button
                                                        class="btn cancel btn-outline-danger pt-2 m-1">Cancel</button>
                                                    <button type="submit"
                                                        class="btn add btn-primary pt-2 m-1">Add</button>
                                                </div>

                                            </div>
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
        <jsp:include page="../../../Basic/template/footer.jsp" />

    </div>




    <script src="../../../../custom/adjustable-invoice/js/index.js"></script>
    <!-- adduser JS -->

    <!-- <script src="https://cdn.datatables.net/buttons/1.5.0/js/dataTables.buttons.min.js"></script> -->


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
    <script src="../js/addGate.js"></script>
    <!-- <script src="../js/view.js"></script> -->

    <!-- jQuery UI -->

    <!-- breadcrumb JS -->
    <script src="../../../../custom/js/breadcrumb.js"></script>

    <script src="../../../../cdn/js/sweetalert.min.js"></script>
    <script src="../../../../cdn/js/sweetalert2.js"></script>

    <!-- dataTable JS -->
    <script src="../../../../cdn/js/jquery.dataTables.min.js"></script>
    <script src="../../../../cdn/js/dataTables.responsive.min.js"></script>