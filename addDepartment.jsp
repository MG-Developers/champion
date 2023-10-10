<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Department Master</title>

    <link href="../../../../static/css/bootstrap.min.css" rel="stylesheet">
    <link href="../../../../static/font-awesome/css/font-awesome.css" rel="stylesheet">

    <link href="../../../../static/css/animate.css" rel="stylesheet">
    <link href="../../../../static/css/style.css" rel="stylesheet">

    <script src="../../../../cdn/js/sweetalert2.js"></script>


    <link rel="stylesheet" href="../../../../custom/css/filter_multi_select.css">



    <style>
        #show {
            padding: 0.465rem 0.75rem;
        }
    </style>

    <script src="../../../../static/js/bootstrap.js"></script>

    <link rel="stylesheet" href="../../../../cdn/css/jquery.dataTables.css">
    <link rel="stylesheet" href="../../../../cdn/css/responsive.dataTables.min.css">
    <link rel="stylesheet" href="../../../../cdn/css/select.dataTables.min.css">

    <script src="../../../../static/js/jquery-2.1.1.js"></script>

</head>


<body>

    <script>
        let sessionString = localStorage.getItem("userrole")

        let name = JSON.parse(sessionString);
        if (name != null) {
            if (name.includes("Admin")) {

            }
            else {
                window.location.href = "../../../Basic/template/404.jsp";
            }
        }
        else {
            window.location.href = "../../../Basic/template/404.jsp";
        }

    </script>

    <div id="wrapper">
        <!--% including header %-->
        <jsp:include page="../../../Basic/template/header.jsp" />
        <!--% including breadcrumb %-->
        <jsp:include page="../../../Basic/template/breadcrumb.jsp" />

        <div class="modal inmodal fade" id="myModal5" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span
                                aria-hidden="true">&times;</span><span class="sr-only">Close</span></button> <br><br>
                        <table cellspacing="0" cellpadding="4">
                            <tbody>
                                <tr id="filter_col2" data-column="1" class=" ">
                                    <td class=" col-12 ">
                                        <div class="d-flex ">
                                            <div class="input-group ">
                                                <input type="text" class="form-control column_filter"
                                                    placeholder="Email" aria-label="Admin Theme"
                                                    aria-describedby="button-addon2" id="eaemail2">
                                                <div class="input-group-append" id="searchrecord">
                                                    <button class="btn btn-primary" type="button" id="button-addon1">
                                                        Add Email</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td align="center"><input type="checkbox" class="column_filter invisible"
                                            id="col2_smart" checked="checked">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="modal-body">
                        <table id="Datable" class="display responsive nowrap text-left " style="width: 100%">
                            <thead>
                                <th class="text-left" data-hide="phone">EA Email</th>
                                <th class="text-left" data-hide="phone">
                                    Type</th>
                            </thead>
                            <tbody id="ea_tbody">
                            </tbody>
                        </table>
                    </div>


                    <div class="modal-footer">
                        <button type="button" class="btn btn-white" data-dismiss="modal">Close</button>
                        <button id="selectRecords" type="button" data-dismiss="modal"
                            class="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal inmodal fade" id="myModal6" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span
                                aria-hidden="true">&times;</span><span class="sr-only">Close</span></button> <br><br>
                        <table cellspacing="0" cellpadding="4">
                            <tbody>
                                <tr id="filter_col2" data-column="1" class=" ">
                                    <td class=" col-12 ">
                                        <div class="d-flex ">
                                            <div class="input-group ">
                                                <input type="text" class="form-control column_filter"
                                                    placeholder="Email" aria-label="Admin Theme"
                                                    aria-describedby="button-addon2" id="hodemail2">
                                                <div class="input-group-append" id="searchrecord">
                                                    <button class="btn btn-primary" type="button" id="button-addon2">
                                                        Add Email</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td align="center"><input type="checkbox" class="column_filter invisible"
                                            id="col2_smart" checked="checked">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="modal-body">
                        <table id="Datable" class="display responsive nowrap text-left " style="width: 100%">
                            <thead>
                                <th class="text-left" data-hide="phone">HOD Email</th>
                                <th class="text-left" data-hide="phone">
                                    Type</th>
                            </thead>
                            <tbody id="hod_tbody">
                            </tbody>
                        </table>
                    </div>


                    <div class="modal-footer">
                        <button type="button" class="btn btn-white" data-dismiss="modal">Close</button>
                        <button id="selectRecords2" type="button" data-dismiss="modal"
                            class="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="wrapper wrapper-content">
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
                                                <div class="form-group"><label>Department Code*</label><input
                                                        type="text" placeholder="Department Code" class="form-control"
                                                        id="departmentcode" required="" maxlength="12"></div>

                                                <div class="form-group">
                                                    <label for="accessories">EA</label> <br>
                                                    <select id="ea" class="form-control">
                                                        <!-- <option value=""></option> -->
                                                        <option value="Y">Yes</option>
                                                        <option value="N" selected>No</option>

                                                    </select>
                                                </div>

                                                <div class="form-group"><label> Name*</label> <input type="text"
                                                        placeholder="Name" class="form-control" id="name"></div>

                                                <div class="input-group mb-3 mt-4 ">
                                                    <input type="email" class="form-control" placeholder=" EA Email"
                                                        aria-label="Email" aria-describedby="basic-addon2" id="eaemail">
                                                    <div class="input-group-append">
                                                        <button class="btn btn-primary" type="button" id="addemail"
                                                            data-toggle="modal" data-target="#myModal5">Add
                                                            Email</button>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="col-2"></div>
                                            <div class="col-md-4">
                                                <div class="form-group"><label>Department Name*</label> <input
                                                        type="text" placeholder="Department Name" class="form-control"
                                                        id="departmentname" required="" maxlength="30 "></div>

                                                <div class="form-group">
                                                    <label for="accessories">HOD</label> <br>
                                                    <select id="hod" class="form-control">
                                                        <option value="Y">Yes</option>
                                                        <option value="N">No</option>
                                                    </select>
                                                </div>

                                                <div class="form-group"><label>HOD Name*</label> <input type="text"
                                                        placeholder="HOD Name" class="form-control" id="hodname">
                                                </div>

                                                <div class="input-group mb-3 mt-4 ">
                                                    <input type="email" class="form-control" placeholder="HOD Email"
                                                        aria-label="Email" aria-describedby="basic-addon2"
                                                        id="hodemail">
                                                    <div class="input-group-append">
                                                        <button class="btn btn-primary" type="button" id="addemail2"
                                                            data-toggle="modal" data-target="#myModal6">Add
                                                            Email</button>
                                                    </div>
                                                </div>

                                                <!-- <div class="form-group" id="dropId"><label>Email*</label>
                          <select id="DropDown" name="dropDown" class="form-control">
                          </select>
                        </div> -->

                                                <!-- <div class="form-group"><label>EA*</label> <input type="text" placeholder="EA"
                            class="form-control" id="ea" required="" maxlength="100"></div> -->

                                                <!-- <div class="form-group"><label>EA*</label><br>
                              <input type="radio" name="fav_language" value="Yes" /> Yes<br />
                              <input type="radio" name="fav_language" value="No" /> No<br />
                            </div> -->

                                            </div>

                                            <div class="px-2 offset-1 my-3 d-flex justify-content-start ">
                                                <button type="button"
                                                    class="btn cancel btn-outline-danger pt-2 m-1">Cancel</button>
                                                <button type="submit" class="btn add btn-primary pt-2 m-1">Add</button>
                                            </div>

                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <jsp:include page="../../../Basic/template/footer.jsp" />
        </div>
        <!--% including footer %-->


    </div>

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
    <!-- <script src="../js/emailSetup.js?v=" + $.getCurrentVersion()></script> -->
    <script src="../../../../custom/js/filter-multi-select-bundle.min.js"></script>

    <script src="../js/addDepartment.js"></script>

    <script src="../../../Configration/js/globalConfig.js"></script>


    <!-- breadcrumb JS -->
    <script src="../../../../custom/js/breadcrumb.js"></script>


    <!-- dataTable JS -->
    <script src="../../../../cdn/js/jquery.dataTables.min.js"></script>
    <script src="../../../../cdn/js/dataTables.responsive.min.js"></script>
    <script src="../../../../cdn/js/dataTables.select.min.js"></script>






</body>

</html>