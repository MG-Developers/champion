<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Add User</title>

    <link href="../../../static/css/bootstrap.min.css" rel="stylesheet">
    <link href="../../../static/font-awesome/css/font-awesome.css" rel="stylesheet">

    <link href="../../../static/css/animate.css" rel="stylesheet">
    <link href="../../../static/css/style.css" rel="stylesheet">

    <link href="../css/addUser.css" rel="stylesheet">

    <link rel="stylesheet" href="../../../cdn/css/jquery.dataTables.css">
    <link rel="stylesheet" href="../../../cdn/css/responsive.dataTables.min.css">
    <link rel="stylesheet" href="../../../cdn/css/select.dataTables.min.css">

    <script src="../../../static/js/jquery-2.1.1.js"></script>

    <link rel="stylesheet" href="../../../custom/css/filter_multi_select.css">
    <script src="../../../custom/js/filter-multi-select-bundle.min.js"></script>


</head>

<body>


    <div id="wrapper">

        <!--% including header %-->
        <jsp:include page="../../Basic/template/header.jsp" />

        <!--% including breadcrumb %-->
        <jsp:include page="../../Basic/template/breadcrumb.jsp" />

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
                                                <div class="form-group"><label>User Name*</label> <input type="text"
                                                        placeholder="Enter name" class="form-control" required=""
                                                        maxlength="15" id="form6Example1"></div>
                                                <div class="form-group"><label>Password*</label> <input type="password"
                                                        required="" maxlength="10" id="form6Example2"
                                                        placeholder="Password" class="form-control"></div>
                                                <div class="form-group"><label>First Name*</label> <input type="text"
                                                        required="" maxlength="10" id="form6Example3"
                                                        placeholder="Enter First Name" class="form-control"></div>
                                                <div class="form-group"><label>Last Name*</label> <input type="text"
                                                        required="" maxlength="10" id="form6Example4"
                                                        placeholder="Enter Last Name" class="form-control"></div>
                                                <div class="form-group">
                                                    <label for="accessories">Role Code*</label> <br>
                                                    <select name="roles" id="roles"></select>

                                                </div>
                                            </div>
                                            <div class="col-2"></div>
                                            <div class="col-md-4">
                                                <div class="form-group"><label>Address No*</label><input type="number"
                                                        required="" maxlength="8" id="form6Example5"
                                                        placeholder="Address no" class="form-control"></div>
                                                <div class="form-group"><label>Display Name*</label> <input type="text"
                                                        required="" maxlength="25" id="form6Example6"
                                                        placeholder="Enter Display name" class="form-control"></div>
                                                <div class="form-group"><label>Email*</label> <input type="email"
                                                        required="" maxlength="25" id="form6Example7"
                                                        placeholder="Enter email address" class="form-control"
                                                        required=""></div>
                                                <div class="form-group"><label>Company code</label> <input type="text"
                                                        required="" maxlength="8" id="form6Example9"
                                                        placeholder="Company Code" class="form-control"></div>

                                                <label>Business Unit*</label>

                                                <div class="input-group">
                                                    <input type="text" class="form-control" required=""
                                                        placeholder="Business Unit" aria-label="Admin Theme"
                                                        aria-describedby="button-addon2" readonly id="form6Example8">
                                                    <div class="input-group-append">
                                                        <button type="button" id="model" class="btn btn-primary"
                                                            data-toggle="modal" data-target="#myModal5">
                                                            Select
                                                        </button>
                                                    </div>

                                                </div><br>

                                                <label> Supplier Number*</label>

                                                <div class="input-group">
                                                    <input type="text" class="form-control" required=""
                                                        placeholder="Supplier Number" aria-label="Admin Theme"
                                                        aria-describedby="button-addon2" readonly id="form6Example10">
                                                    <div class="input-group-append">
                                                        <button type="button" id="modeldata" class="btn btn-primary"
                                                            data-toggle="modal" data-target="#myModal6">
                                                            Select
                                                        </button>
                                                    </div>

                                                </div>



                                                <div class="modal inmodal fade" id="myModal5" tabindex="-1"
                                                    role="dialog" aria-hidden="true">
                                                    <div class="modal-dialog ">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <button type="button" class="close"
                                                                    data-dismiss="modal"><span
                                                                        aria-hidden="true">&times;</span><span
                                                                        class="sr-only">Close</span></button> <br><br>
                                                                <table cellspacing="0" cellpadding="4">
                                                                    <tbody>
                                                                        <tr id="filter_col2" data-column="1" class=" ">
                                                                            <td class=" col-12 ">
                                                                                <div class="d-flex ">
                                                                                    <div class="input-group ">
                                                                                        <input type="text"
                                                                                            class="form-control column_filter"
                                                                                            placeholder="Business Unit"
                                                                                            aria-label="Admin Theme"
                                                                                            aria-describedby="button-addon2"
                                                                                            id="col1_filter">
                                                                                        <div class="input-group-append"
                                                                                            id="search">
                                                                                            <button
                                                                                                class="btn btn-primary"
                                                                                                type="button"
                                                                                                id="button-addon"><i
                                                                                                    class="fa fa-search"></i>
                                                                                                Search</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td align="center"><input type="checkbox"
                                                                                    class="column_filter invisible"
                                                                                    id="col1_smart" checked="checked">
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div class="modal-body">
                                                                <table id="Dtable"
                                                                    class="display responsive nowrap text-left "
                                                                    style="width: 100%">
                                                                    <thead>
                                                                        <th class="text-left" data-hide="phone">Business
                                                                            Number</th>
                                                                        <th class="text-left" data-hide="phone">
                                                                            DESCRIPTION</th>

                                                                    </thead>
                                                                    <tbody id="tbody">
                                                                    </tbody>
                                                                </table>
                                                            </div>

                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-white"
                                                                    data-dismiss="modal">Close</button>
                                                                <button id="select" type="button" data-dismiss="modal"
                                                                    class="btn btn-primary">Select</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="modal inmodal fade" id="myModal6" tabindex="-1" role="dialog"
                                                aria-hidden="true">
                                                <div class="modal-dialog ">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <button type="button" class="close"
                                                                data-dismiss="modal"><span
                                                                    aria-hidden="true">&times;</span><span
                                                                    class="sr-only">Close</span></button> <br><br>
                                                            <table cellspacing="0" cellpadding="4">
                                                                <tbody>
                                                                    <tr id="filter_col2" data-column="1" class=" ">
                                                                        <td class=" col-12 ">
                                                                            <div class="d-flex ">
                                                                                <div class="input-group ">
                                                                                    <input type="text"
                                                                                        class="form-control column_filter"
                                                                                        placeholder="Supplier Number"
                                                                                        aria-label="Admin Theme"
                                                                                        aria-describedby="button-addon2"
                                                                                        id="col2_filter">
                                                                                    <div class="input-group-append"
                                                                                        id="searchrecord">
                                                                                        <button class="btn btn-primary"
                                                                                            type="button"
                                                                                            id="button-addon2"><i
                                                                                                class="fa fa-search"></i>
                                                                                            Search</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>

                                                                        <td align="center"><input type="checkbox"
                                                                                class="column_filter invisible"
                                                                                id="col2_smart" checked="checked">
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="modal-body">
                                                            <table id="Datable"
                                                                class="display responsive nowrap text-left "
                                                                style="width: 100%">
                                                                <thead>
                                                                    <th class="text-left" data-hide="phone">Supplier
                                                                        Number</th>
                                                                    <th class="text-left" data-hide="phone">
                                                                        DESCRIPTION</th>
                                                                </thead>
                                                                <tbody id="tbodyy">
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-white"
                                                                data-dismiss="modal">Close</button>
                                                            <button id="selectt" type="button" data-dismiss="modal"
                                                                class="btn btn-primary">Select</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="px-2 offset-1 my-3 d-flex justify-content-start ">
                                                <button class="btn cancel btn-outline-danger pt-2 m-1">Cancel</button>
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
        </div>
        <br>
        <!--% including footer %-->
        <jsp:include page="../../Basic/template/footer.jsp" />

    </div>



    <!-- Mainly scripts -->
    <!-- <script src="static/js/jquery-2.1.1.js"></script> -->
    <script src="../../../static/js/popper.min.js"></script>
    <script src="../../../static/js/bootstrap.js"></script>
    <script src="../../../static/js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="../../../static/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

    <!-- Custom and plugin javascript -->
    <script src="../../../static/js/inspinia.js"></script>
    <script src="../../../static/js/plugins/pace/pace.min.js"></script>

    <!-- jQuery UI -->
    <script src="../../../static/js/plugins/jquery-ui/jquery-ui.min.js"></script>

    <!-- sweetalert JS -->
    <script src="../../../cdn/js/sweetalert.min.js"></script>

    <script src="../../Configration/js/globalConfig.js"></script>
    <!-- adduser JS -->
    <script src="../js/adduser.js"></script>

    <!-- businessmodal JS -->
    <script src="../js/businessmodal.js"></script>

    <!-- breadcrumb JS -->
    <script src="../../../custom/js/breadcrumb.js"></script>

    <!-- dataTable JS -->
    <script src="../../../cdn/js/jquery.dataTables.min.js"></script>
    <script src="../../../cdn/js/dataTables.responsive.min.js"></script>
    <script src="../../../cdn/js/dataTables.select.min.js"></script>

</body>

</html>