<!DOCTYPE html>
<html>

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Update Invoice</title>

  <link href="../../../../static/css/bootstrap.min.css" rel="stylesheet">
  <link href="../../../../static/font-awesome/css/font-awesome.css" rel="stylesheet">

  <link href="../../../../static/css/animate.css" rel="stylesheet">
  <link href="../../../../static/css/style.css" rel="stylesheet">

  <script src="../../../../static/js/jquery-2.1.1.js"></script>

  <link rel="stylesheet" href="../../../../custom/adjustable-invoice/css/index.css">

  <link rel="stylesheet" href="../css/updateInvoice.css">


  <script src="../../../../static/js/bootstrap.js"></script>

  <style>
    .btn-outline-success {
      border-color: #18A689 !important;
    }

    .btn-outline-success:hover {
      background-color: #18A689 !important;
    }

    .btn-success {
      border: 1px solid #18A689 !important;
      background-color: #18A689 !important;
    }

    #mail {
      margin-bottom: 0px !important;
    }

    div.dataTables_wrapper span.select-item {
      display: none !important;
    }

    .nav-tabs .nav-item.show .nav-link,
    .nav-tabs .nav-link.active {
      color: #1ab394 !important;
      border-top-color: #1ab394 !important;
    }

    .filter-multi-select>.dropdown-menu {
      position: relative !important;
    }

    .filter-multi-select>.viewbar>.selected-items>.item {

      background-color: #1AB394 !important;

    }

    .nav-tabs .nav-link {
      border-top-width: 5px;
    }



    .btn-outline-success {
      border-color: #18A689 !important;
    }

    .btn-outline-success:hover {
      background-color: #18A689 !important;
    }

    .btn-success {
      border: 1px solid #18A689 !important;
      background-color: #18A689 !important;
    }

    .paginate_button {
      border: 1px solid #18A689 !important;
      background: white !important;
      transition: all .5s;

    }

    .paginate_button:hover {
      background: #18A689 !important;
    }

    #Dtable_paginate {
      display: flex;
      justify-content: flex-start;
    }

    .paginate_button {
      border-radius: 0px !important;
    }

    .previous {
      border-top-left-radius: 5px !important;
      border-bottom-left-radius: 5px !important;
      border-right: none !important;
    }

    .paginate_button {
      margin: 0px !important;
      margin-top: .5rem !important;
      padding: 5px 10px !important;

    }

    .next {
      border-top-left-radius: 0px !important;
      border-bottom-left-radius: 0px !important;
      border-top-right-radius: 5px !important;
      border-bottom-right-radius: 5px !important;
      border-left: none !important;
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

                <form class="contact-form" id="form1">
                  <div class="controls">
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-md-4">

                        <div class="form-group">
                          <label>Company Id*</label>
                          <input type="text" placeholder="Enter company id" class="form-control" required=""
                            maxlength="15" id="input-text1">
                        </div>

                        <div class="form-group">
                          <label>Company Name*</label>
                          <input type="text" required="" maxlength="10" id="input-text2"
                            placeholder="Enter company name" class="form-control">
                        </div>

                        <div class="form-group">
                          <label>Business Unit*</label>
                          <input type="text" required="" maxlength="10" id="input-text3" placeholder="Business Unit"
                            class="form-control">
                        </div>

                        <div class="form-group">
                          <label>Process*</label>
                          <input type="text" required="" maxlength="10" id="input-text4" placeholder="Enter process"
                            class="form-control">
                        </div>

                      </div>

                      <div class="col-2"></div>

                      <div class="col-md-4">

                        <div class="form-group">
                          <label>Year*</label>
                          <input type="month" required="" maxlength="8" id="input-text5" class="form-control">
                        </div>

                        <div class="form-group">
                          <label>Current Index*</label>
                          <input type="text" required="" maxlength="25" id="input-text6"
                            placeholder="Enter Current Index" class="form-control">
                        </div>

                        <div class="form-group">
                          <label>Last Number*</label>
                          <input type="text" required="" maxlength="25" id="input-text7"
                            placeholder="Enter last number" class="form-control" required="">
                        </div>

                        <div class="form-group">
                          <label>Length *</label>
                          <input type="text" required="" maxlength="25" id="input-text8" placeholder="Enter length"
                            class="form-control" required="">
                        </div>

                        <br>
                        <!-- 
                                            <div id="myDIV">
                                                <button class="btn active">Active</button>
                                                <button class="btn">Disabled</button>
                                            </div> -->

                        <div class="px-2 offset-1 my-3 d-flex justify-content-start ">
                          <button class="btn cancel btn-outline-danger pt-2 m-1">Cancel</button>
                          <button type="submit" class="btn add btn-primary pt-2 m-1">Update</button>
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

  <!-- adduser ../../../../JS -->

  <script src="../../../Configration/js/globalConfig.js"></script>
  <script src="../js/updateGate.js"></script>


  <!-- Mainly scripts -->
  <!-- <script src="static/js/jquery-2.1.1.js"></script> -->
  <script src="../../../../static/js/popper.min.js"></script>
  <script src="../../../../static/js/bootstrap.js"></script>
  <script src="../../../../static/js/plugins/metisMenu/jquery.metisMenu.js"></script>
  <script src="../../../../static/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

  <!-- Custom and plugin javascript -->
  <script src="../../../../static/js/inspinia.js"></script>
  <script src="../../../../static/js/plugins/pace/pace.min.js"></script>


  <!-- jQuery UI -->
  <script src="../../../../static/js/plugins/jquery-ui/jquery-ui.min.js"></script>

  <script src="../../../../cdn/js/sweetalert2.js"></script>
  <script src="../../../../cdn/js/sweetalert.min.js"></script>

  <!-- breadcrumb JS -->
  <script src="../../../../custom/js/breadcrumb.js"></script>

</body>

</html>