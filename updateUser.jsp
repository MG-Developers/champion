<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />

    <title>Users</title>

    <link href="../../../css/styles.css" rel="stylesheet" />
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <link rel="stylesheet" href="../css/users.css">

    <link rel="stylesheet" href="../../../custom/css/filter_multi_select.css">
    <script src="../../../custom/js/filter-multi-select-bundle.min.js"></script>

    <script src="../../../cdn/js/sweetalert2.js"></script>


    <script src="../../Configuration/js/globalConfig.js"></script>

    <link rel="stylesheet" href="../../../cdn/css/jquery.dataTables.css">


    <!-- Mainly scripts -->
    <script src="../../../static/js/popper.min.js"></script>
    <script src="../../../static/js/bootstrap.js"></script>
    <script src="../../../static/js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="../../../static/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

    <!-- Custom and plugin javascript -->
    <script src="../../../static/js/inspinia.js"></script>
    <script src="../../../static/js/plugins/pace/pace.min.js"></script>

    <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
    <script src="../../../cdn/js/sweetalert.min.js"></script>

    <style>
        .form-group {
            margin-bottom: 12px;
        }

        .form-group label {
            margin-bottom: 4px;
        }

        #heading {
            margin-top: 36px;
        }

        .nav>li>a {
            color: #a7b1c2;
        }

        #pass1 {
            width: 420px;

        }

        #nextButton {
            color: #24537f;
        }

        .hr-line-dashed {

            border-top: 1px dashed #e7eaec;
            color: #ffffff;
            background-color: #ffffff;
            height: 1px;
            margin: 20px 0;
        }
    </style>
</head>

<body class="sb-nav-fixed">
    <jsp:include page="../../Basic/template/header.jsp" />

    <div id="layoutSidenav">

        <jsp:include page="../../Basic/template/sidenav.jsp" />

        <!-- Modal Show -->
        <div class="modal inmodal fade" id="exampleModalCenter1" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header text-left">
                        <div class="form-group row ">
                            <div class="col-12 d-flex justify-content-start flex-column align-item-start">
                                <label class="labelling">New Password*</label>
                                <div class="input-group">
                                    <input type="password" placeholder="New Password" class="form-control pwd "
                                        id="pass1" required="">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default reveal" id="show" type="button"><i
                                                class="fa fa-eye-slash"></i></button>
                                    </span>
                                </div><br>
                                <label class="labelling">Confirm Password*</label>
                                <div class="input-group">
                                    <input type="password" placeholder="Confirm Password" class="form-control pwd1 "
                                        id="pass2" required="">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default reveal1" id="show1" type="button"><i
                                                class="fa fa-eye-slash"></i></button>
                                    </span>
                                </div>


                                <div id="errorText" class="mt-2"></div>
                            </div>
                            <!-- <div class="col-1"></div> -->
                        </div>

                        <button type="button" class="close d-none" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary mb-2" data-dismiss="modal"
                            id="modal_close">Close</button>
                        <!-- <button type="button" class="btn btn-primary mb-2" onclick="validatePasswords()" >Save Password</button> -->
                        <button type="button" class="btn btn-primary mb-2" id="savePassword">Save Password</button>
                    </div>
                </div>
            </div>
        </div>




        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div class="sb-sidenav-menu">
                    <div class="nav">
                        <a class="nav-link" href="../../DashBoard/template/dashboard.jsp">
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-tachometer-alt"></i>
                            </div>
                            Dashboard
                        </a>
                        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse"
                            data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-columns"></i>
                            </div>
                            User Management
                            <div class="sb-sidenav-collapse-arrow">
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </a>
                        <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="../../UserMaster/template/addUser.jsp">Add User</a>
                                <a class="nav-link" href="../../UserMaster/template/user.jsp">User</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid px-4">
                    <h3 id="heading">Update User</h3><br>

                    <div class="row">
                        <div class="col-12">
                            <div class="ibox ">
                                <div class="ibox-content py-3">
                                    <div class="">
                                        <div class="row">
                                            <h4 id="input-text11" class="col-10">Full Name</h4>
                                            <div class="col-2">
                                                <input type="button" class="btn btn-success" id="Change_password"
                                                    value="Change Password">
                                            </div>
                                        </div>
                                        <div>
                                            <!-- <p class="font-bold" id="input-text12">User name</p> -->
                                            <p class="font-bold d-inline">User name :
                                            <div class="d-inline" id="input-text12"></div>
                                            </p>
                                        </div>
                                        <div class="">
                                            <!-- <p class="font-bold" id="input-text13">Email</p> -->
                                            <p class="font-bold d-inline">Email :
                                            <div class="d-inline" id="input-text13"></div>
                                            </p>
                                        </div>
                                    </div>
                                    <div id="content" class="d-none"></div>
                                    <div class="hr-line-dashed py-2"></div>
                                    <div class="tabs-container">
                                        <ul class="nav nav-tabs" role="tablist">
                                            <li><a class="nav-link active" data-toggle="tab" href="#tab-1">Personal
                                                    Info. </a></li>
                                            <li><a class="nav-link" data-toggle="tab" href="#tab-2">JDE Info.</a></li>
                                            <!-- <li><a class="nav-link" data-toggle="tab" href="#tab-3">Role Code</a></li> -->

                                        </ul>
                                        <div class="tab-content">
                                            <div role="tabpanel" id="tab-1" class="tab-pane active">
                                                <form class="contact-form" id="form1">
                                                    <div class="panel-body">
                                                        <div class="controls">
                                                            <div class="row">
                                                                <div class="col-1"></div>
                                                                <div class="col-md-4">
                                                                    <div class="form-group"><label>First Name*</label>
                                                                        <input type="text" required="" maxlength="10"
                                                                            id="input-text3"
                                                                            placeholder="Enter First Name"
                                                                            class="form-control">
                                                                    </div>

                                                                    <div class="form-group"><label>Address
                                                                            number*</label><input type="address"
                                                                            required="" maxlength="8" id="input-text6"
                                                                            placeholder="Address number"
                                                                            class="form-control">
                                                                    </div>

                                                                </div>



                                                                <div class="col-2"></div>
                                                                <div class="col-md-4">
                                                                    <div class="form-group"><label>Last Name*</label>
                                                                        <input type="text" required="" maxlength="10"
                                                                            id="input-text4"
                                                                            placeholder="Enter Last Name"
                                                                            class="form-control">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label>Mobile No.*</label>
                                                                        <input type="tel" required pattern="[0-9]{10}"
                                                                            id="mobile_number"
                                                                            placeholder="Enter 10-Digit Mobile No."
                                                                            class="form-control" maxlength="10"
                                                                            minlength="10">
                                                                        <small class="text-danger"
                                                                            id="mobile_number_error"
                                                                            style="display: none;">Please
                                                                            enter a 10-digit mobile number.</small>
                                                                    </div>

                                                                </div>
                                                                <br>
                                                            </div>
                                                            <div class="col-11 d-flex justify-content-end">
                                                                <input type="button"
                                                                    class="btn btn-outline-success nextt" value="Next">
                                                            </div>
                                                        </div>

                                                    </div>
                                            </div>
                                            <div role="tabpanel" id="tab-2" class="tab-pane">
                                                <div class="panel-body">
                                                    <div class="controls">
                                                        <div class="row">
                                                            <div class="col-1"></div>
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label for="unitname">Unit Name</label> <br>
                                                                    <select id="unitname" name="unitname"
                                                                        class="form-control">
                                                                        <option value="" disabled selected>No Unit Name
                                                                            Selected
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="">Role code</label>
                                                                    <select name="roles" id="roles"></select>
                                                                </div>
                                                                <!-- <div class="form-group">
                                                                    <label for="gateId">Gate Id</label> <br>
                                                                    <select id="gateId" name="gateId"
                                                                        class="form-control">
                                                                        <option value="" disabled selected>No Gate Id
                                                                            Selected
                                                                        </option>
                                                                    </select>
                                                                </div> -->


                                                            </div>

                                                            <div class="col-2"></div>
                                                            <div class="col-md-4">
                                                                <div class="form-group" id="store_dynamic">
                                                                    <label for="storeId">Store Id</label>
                                                                    <select id="storeId" name="storeId"
                                                                        class="form-control">
                                                                        <option value="" disabled selected>No Store Id
                                                                            Selected
                                                                        </option>
                                                                    </select>
                                                                </div>




                                                                <!-- <div class="form-group">
                                                                    <label for="">Role code</label>
                                                                    <select name="roles" id="roles"></select>
                                                                </div> -->
                                                                <br>


                                                            </div>


                                                        </div>

                                                        <div class="px-2 offset-1 my-3 d-flex justify-content-start">
                                                            <button
                                                                class="btn cancel btn-outline-danger pt-2 m-1">Cancel</button>
                                                            <button type="submit"
                                                                class="btn add btn-primary pt-2 m-1">Save
                                                                Changes</button>
                                                        </div>

                                                        <div class="col-11 d-flex justify-content-end">
                                                            <input type="button" class="btn btn-outline-success prev"
                                                                id="previousbutton" value="Previous">&nbsp;&nbsp;
                                                            <input type="button" class="btn btn-outline-success last"
                                                                id="nextbutton" value="Next">
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <br>
        </div>
    </div>
    <script src="../../../cdn/js/jquery.dataTables.min.js"></script>
    <!-- <script src="https://cdn.datatables.net/1.13.7/js/jquery.dataTables.js"></script> -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"></script>

    <script src="../js/updateUser.js?v=" + $.getCurrentVersion()></script>

    <!-- businessmodal JS -->
    <script src="../js/businessmodal.js?v=" + $.getCurrentVersion()></script>
    <script src="../../../js/scripts.js"></script>
</body>

</html>