<!DOCTYPE html>
<html>

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <title>Updateuser</title>

  <link href="../../../static/css/bootstrap.min.css" rel="stylesheet">
  <link href="../../../static/font-awesome/css/font-awesome.css" rel="stylesheet">


  <link href="../../../static/css/animate.css" rel="stylesheet">
  <link href="../../../static/css/style.css" rel="stylesheet">


  <script src="../../../cdn/js/sweetalert2.js"></script>


  <link href="../../../static/css/bootstrap.min.css" rel="stylesheet">
  <link href="../../../static/font-awesome/css/font-awesome.css" rel="stylesheet">

  <link href="../../../static/css/animate.css" rel="stylesheet">
  <link href="../../../static/css/style.css" rel="stylesheet">

  <link href="../css/updateUser.css" rel="stylesheet">

  <script src="../../../static/js/jquery-2.1.1.js"></script>


  <link rel="stylesheet" href="../../../cdn/css/jquery.dataTables.css">

  <link rel="stylesheet" href="../../../cdn/css/responsive.dataTables.min.css">


  <link rel="stylesheet" href="../../../cdn/css/select.dataTables.min.css">
  <script src="../../../cdn/js/jquery.dataTables.min.js"></script>

  <script src="../../../cdn/js/dataTables.responsive.min.js"></script>

  <script src="../../../cdn/js/dataTables.select.min.js"></script>

  <script src="../../../custom/js/filter-multi-select-bundle.min.js"></script>
  <link href="../../../custom/css/filter_multi_select.css" rel="stylesheet">




   <style>
    /* .btn-outline-success {
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
   } */
  </style> 

</head>

<body>

  <div id="wrapper">
    <!--% including header %-->
    <jsp:include page="../../Basic/template/header.jsp" />

    <!--% including breadcrumb %-->
    <jsp:include page="../../Basic/template/breadcrumb.jsp" />

    <div class="wrapper wrapper-content animated fadeInRight ecommerce">
      <div class="row">
        <div class="col-12">
          <div class="ibox ">
            <div class="ibox-content py-3">
              <div class="">
                <div>
                  <h1 id="input-text11" class="">Full Name</h1>
                </div>
                <div>
                  <!-- <p class="font-bold" id="input-text12">User name</p> -->
                  <p class="font-bold d-inline">User name :
                  <div class="d-inline" id="input-text12"></div>
                  </p>
                </div><br>
                <div class="">
                  <!-- <p class="font-bold" id="input-text13">Email</p> -->
                  <p class="font-bold d-inline">Email :
                  <div class="d-inline" id="input-text13"></div>
                  </p>
                </div>
              </div>
              <div class="hr-line-dashed py-0"></div>

              <div class="tabs-container ">
                <ul class="nav nav-tabs" role="tablist">
                  <li><a class="nav-link active" data-toggle="tab" href="#tab-1">Personal Info. </a></li>
                  <li><a class="nav-link" data-toggle="tab" href="#tab-2">JDE Info.</a></li>
                  <li><a class="nav-link" data-toggle="tab" href="#tab-3">Role Code</a></li>

                </ul>
                <div class="tab-content">
                  <div role="tabpanel" id="tab-1" class="tab-pane active">
                    <form class="contact-form" id="form1">
                      <div class="panel-body">


                        <div class="controls">
                          <div class="row">
                            <div class="col-1"></div>
                            <div class="col-md-4">
                              <div class="form-group"><label>First Name*</label> <input type="text" required=""
                                  maxlength="10" id="input-text3" placeholder="Enter First Name" class="form-control">
                              </div>
                              <div class="form-group"><label>Display Name*</label> <input type="text" required=""
                                  maxlength="25" id="input-text5" placeholder="Enter Display name" class="form-control">
                              </div>
                            </div>
                            <div class="col-2"></div>
                            <div class="col-md-4">

                              <div class="form-group"><label>Last Name*</label> <input type="text" required=""
                                  maxlength="10" id="input-text4" placeholder="Enter Last Name" class="form-control">
                              </div>
                            </div>
                            <br>
                          </div>
                          <div class="col-11 d-flex justify-content-end">
                            <input type="button" class="btn btn-outline-success nextt" value="Next">
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
                            <div class="form-group"><label>Company code</label> <input type="text" required=""
                                maxlength="8" id="input-text9" placeholder="Company Code" class="form-control"></div>
                            <div class="form-group"><label>Address number*</label><input type="address" required=""
                                maxlength="8" id="input-text6" placeholder="address number" class="form-control"></div>

                          </div>
                          <div class="col-2"></div>
                          <div class="col-md-4">

                            <label>Business Unit*</label>

                            <div class="input-group">
                              <input type="text" class="form-control" required="" placeholder="Business Unit"
                                aria-label="Admin Theme" aria-describedby="button-addon2" readonly id="form6Example8">
                              <div class="input-group-append">
                                <button type="button" id="model" class="btn btn-primary" data-toggle="modal"
                                  data-target="#myModal5">
                                  Select
                                </button>
                              </div>

                            </div>
                            <div class="modal inmodal fade" id="myModal5" tabindex="-1" role="dialog"
                              aria-hidden="true">
                              <div class="modal-dialog ">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal"><span
                                        aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                                    <br><br>
                                    <table cellspacing="0" cellpadding="4">
                                      <tbody>
                                        <tr id="filter_col2" data-column="1" class=" ">
                                          <td class=" col-12 ">
                                            <div class="d-flex ">
                                              <div class="input-group ">
                                                <input type="text" class="form-control column_filter"
                                                  placeholder="Business Unit" aria-label="Admin Theme"
                                                  aria-describedby="button-addon2" id="col1_filter">
                                                <div class="input-group-append" id="search">
                                                  <button class="btn btn-primary" type="button" id="button-addon2"><i
                                                      class="fa fa-search"></i>
                                                    Search</button>
                                                </div>
                                              </div>
                                            </div>
                                          </td>

                                          <td align="center"><input type="checkbox" class="column_filter invisible"
                                              id="col1_smart" checked="checked">
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div class="modal-body">
                                    <table id="Dtable" class="display responsive nowrap text-left " style="width: 100%">
                                      <thead>
                                        <th class="text-left" data-hide="phone">BUSINESS
                                          UNIT</th>
                                        <th class="text-left" data-hide="phone">
                                          DESCRIPTION</th>
                                      </thead>
                                      <tbody id="tbody">
                                      </tbody>
                                    </table>
                                    
                                  </div>

                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-white" data-dismiss="modal">Close</button>
                                    <button id="select" type="button" data-dismiss="modal"
                                      class="btn btn-primary">Select</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <br>

                            <label>Supplier Number*</label>

                            <div class="input-group">
                              <input type="text" class="form-control" required="" placeholder="Supplier Number"
                                aria-label="Admin Theme" aria-describedby="button-addon2" readonly id="form6Example10">
                              <div class="input-group-append">
                                <button type="button" id="model" class="btn btn-primary" data-toggle="modal"
                                  data-target="#myModal6">
                                  Select
                                </button>
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
                            
                          </div>
                          
                        </div>

                        <div class="col-11 d-flex justify-content-end">
                          <input type="button" class="btn btn-outline-success prev" value="Previous">&nbsp;&nbsp;
                          <input type="button" class="btn btn-outline-success last" value="Next">
                        </div>


                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" id="tab-3" class="tab-pane">
                    <div class="panel-body">
                      <div class="controls">
                        <div class="row">
                          <div class="col-1"></div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <label for="">Role code</label>
                              <select name="roles" id="roles"></select>
                            </div>

                          </div>
                          <div class="col-2"></div>
                          <div class="col-md-4">


                          </div>

                          <div class="px-2 offset-1 my-3 d-flex justify-content-start">
                            <button class="btn cancel btn-outline-danger pt-2 m-1">Cancel</button>
                            <button type="submit" class="btn add btn-primary pt-2 m-1">Save Changes</button>
                          </div>
                        </div>

                        <div class="col-11 d-flex justify-content-end">
                          <input type="button" class="btn btn-outline-success nextt" value="Previous">
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
      </div>
    </div><br>
    <!--% including footer %-->
    <jsp:include page="../../Basic/template/footer.jsp" />
  </div>


  </div>






  <script>

//     $(document).ready(()=>{

//       $.fn.DataTable.ext.pager.numbers_length = 4;

//     $("#model").click(() => {
//       $("#col1_filter")[0].value = "";
//     })

//     var tab = $("#Dtable").DataTable({
//       // pageLength : 2,
//       language: {
//         'paginate': {
//           'previous': '<span class="prev-icon"><i class="fa fa-angle-left"></i></span>',
//           'next': '<span class="next-icon"><i class="fa fa-angle-right"></i></span>'
//         }
//       },

//       dom: '<"top">t<"bottom"ip>',
//       ordering: true,
//       lengthMenu: [5, 10, 20, 25, 50],

//       pagingType: "simple_numbers",
//       ajax: {
//         url: 'http://192.168.100.54:8050/businessunit/get',
//         dataSrc: "data",
//       },

//       columns: [
//         { data: "business_unit" },
//         { data: "description" },

//       ],

//       select: true,

//       columnDefs: [
//         {
//           "defaultContent": "-",
//           "targets": "_all"
//         },
//         { responsivePriority: 1, targets: 0 },
//         { responsivePriority: -2, targets: 1 }
//       ],

//     });


//     $('#Dtable tbody').on('click', 'tr', function () {
//       var data = tab.row(this).data();

//       var row  = $(this)[0];

//       function search(data) {

//         $("#input-text8").val(data.business_unit);

//         $(row).removeClass("selected");
//       }

//       $("#select").click(() => {

//         search(data);

//       })
//     });




//     $('input.global_filter').on('keyup click', function () {
//       filterGlobal();
//     });


//     $("#search").click(() => {
//       $('#Dtable').DataTable().column(0).search(
//         $('#col' + 1 + '_filter').val(),
//         $('#col' + 1 + '_smart').prop('checked')
//       ).draw();
//     })
// });



  </script>



  <!-- Mainly scripts -->
  <script src="../../../static/js/popper.min.js"></script>
  <script src="../../../static/js/bootstrap.js"></script>
  <script src="../../../static/js/plugins/metisMenu/jquery.metisMenu.js"></script>
  <script src="../../../static/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

  <!-- Custom and plugin javascript -->
  <script src="../../../static/js/inspinia.js"></script>
  <script src="../../../static/js/plugins/pace/pace.min.js"></script>

  <script src="../../Configration/js/globalConfig.js"></script>

  <!-- updateuser JS -->
  <script src="../js/updateUser.js"></script>

  <!-- businessmodal JS -->
  <script src="../js/businessmodal.js"></script>

  <!-- breadcrumb JS -->
  <script src="../../../custom/js/breadcrumb.js"></script>

  <!-- sweetalert JS -->
  <script src="../../../cdn/js/sweetalert.min.js"></script>

  <!-- jQuery UI -->
  <script src="../../../static/js/plugins/jquery-ui/jquery-ui.min.js"></script>

</body>

</html>