<!DOCTYPE html>
<html>
    
    <head>
        
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <title>Update Configuration</title>
        
        <link href="../../../static/css/bootstrap.min.css" rel="stylesheet">
        <link href="../../../static/font-awesome/css/font-awesome.css" rel="stylesheet">
        <script src="../../../static/js/jquery-2.1.1.js"></script>
        
        <link href="../../../static/css/animate.css" rel="stylesheet">
        <link href="../../../static/css/style.css" rel="stylesheet">

        <link rel="stylesheet" href="../../../custom/css/filter_multi_select.css">

        <script src="../../../custom/js/filter-multi-select-bundle.min.js"></script>

        
       <!-- Mainly scripts -->
       <script src="../../../static/js/popper.min.js"></script>
       <script src="../../../static/js/bootstrap.js"></script>
       <script src="../../../static/js/plugins/metisMenu/jquery.metisMenu.js"></script>
       <script src="../../../static/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
   
       <!-- Custom and plugin javascript -->
       <script src="../../../static/js/inspinia.js"></script>
       <script src="../../../static/js/plugins/pace/pace.min.js"></script>

       <!-- jQuery UI -->
       <script src="../../../static/js/plugins/jquery-ui/jquery-ui.min.js"></script>

       <!-- updateconfig JS -->

       <script src="../js/globalConfig.js"></script>

       <script src="../js/updateConfig.js"></script>

       <!-- breadcrumb JS -->
       <!-- <script src="../../../custom/js/breadcrumb.js"></script> -->

       <script src="../../../cdn/js/sweetalert2.js"></script>
       <script src="../../../cdn/js/sweetalert.min.js"></script>


        <style>
            .btn-success {
            border: 1px solid #24537f !important;
            background-color: #24537f !important;
        }
        </style>

</head>

<body>

<script>
    let sessionString = sessionStorage.getItem("userrole")

    let name = JSON.parse(sessionString);
    if(name != null)
    {
      if(name.includes("STORE"))
      {
  
      }
      else{
         window.location.href = "../../Basic/template/404.jsp";
      }
    }
    else{
      window.location.href = "../../Basic/template/404.jsp";
    }

</script>

    <div id="wrapper">
       <!--% including header %-->
        <jsp:include page="../../Basic/template/header.jsp"/>
        <!--% including breadcrumb %-->
        <jsp:include page="../../Basic/template/breadcrumb.jsp"/>

        <div class="wrapper wrapper-content ">
            <div class="row">
              <div class="col-lg-12 ">
                <div class="card  mx-auto p-4 white-bg">
                  <div class="card-body ">
                    <div class="container ">
                      <form class="contact-form" id="form">
                        <div class="controls">
                          <div class="row">
                            <div class="col-1"></div>
                            <div class="col-md-4">
                              <div class="form-group"><label>URL*</label><input type="text" required="" maxlength="80" id="jdeUrl" placeholder="JDE URL" class="form-control"></div>
                              <div class="form-group"><label>User*</label> <input type="text" required="" placeholder="User" class="form-control"  maxlength="12 " id="jdeUser"></div>
                              <div class="form-group"><label>Password*</label> <input type="password" required="" placeholder="JDE Password" class="form-control" required=""  maxlength="12 " id="jdePassword"></div>
                              
                              <!-- <div class="form-group"><label for="accessories">Env*</label> <br><select name="Env" id="env" ="JDE Environment"><option value = "Test"> Test</option><option value = "PD"> PD</option><option value = "PY"> PY</option></select></div> -->
                            </div>
                            <div class="col-2"></div>
                            <div class="col-md-4">
                              <div class="form-group"><label for="accessories">type*</label> <br><select name="Type" id="jdeType" placeholder="JDE Type"><option value = "JDE"> JDE</option><option value = "3P"> 3P</option></select></div>
                              <div class="form-group"><label for="accessories">Env*</label> <br><select name="Env" id="jdeEnv" placeholder="JDE Environment"><option value = "Test"> Test</option><option value = "PD"> PD</option><option value = "PY"> PY</option></select></div><br>
                              <div class="form-group"><label>URL Active*</label>&nbsp;&nbsp;&nbsp;<input type="checkbox" id="urlactive" maxlength="12" readonly></div>

                            </div>
                            
                            <div class="px-2 offset-1 my-3 d-flex justify-content-start ">
                              <button class="btn cancel btn-outline-danger pt-2 m-1">Cancel</button>
                              <button type="submit" class="btn add btn-primary pt-2 m-1">Saves Changes</button>
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
       <jsp:include page="../../Basic/template/footer.jsp"/>
    </div>
        

    <script src="../../../custom/js/breadcrumb.js"></script>


</body>

</html>
