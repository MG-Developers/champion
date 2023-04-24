
$(document).ready(() => {

  $("form")[0].reset();


  $('#form').submit(function (e) {

    var test = $.test();

    e.preventDefault();
    var display = $("#form6Example6").val().split(" ");

    var user = [];
    for (value of display) {
      user.push(value.charAt(0).toUpperCase() + value.slice(1).toLowerCase());
    }
    var username = $("#form6Example1").val().charAt(0).toUpperCase() + $("#form6Example1").val().slice(1).toLowerCase();
    var password = $("#form6Example2").val()
    var first_name = $("#form6Example3").val().charAt(0).toUpperCase() + $("#form6Example3").val().slice(1).toLowerCase()
    var last_name = $("#form6Example4").val().charAt(0).toUpperCase() + $("#form6Example4").val().slice(1).toLowerCase()
    var address_number = $("#form6Example5").val()
    var display_name = user.join(" ");
    var email = $("#form6Example7").val()
    var business_unit = $("#form6Example8").val()
    var company_code = $("#form6Example9").val()
    var supply_number = $("#form6Example10").val()
    assignroles = [];

    var span = $(".item");

    span.map((index, value) => {
      rolecode = value.innerText.split("\n")[0];
      assignroles.push({ rolecode })
    })

    $.ajax({
      type: "POST",
      url: `${test}/usermaster/adduser`,
      data: JSON.stringify({
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name,
        address_number: address_number,
        display_name: display_name,
        email: email,
        business_unit: business_unit,
        company_code: company_code,
        supplier_number : supply_number,
        assignroles: assignroles,

      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      success: function (data, status, xhr) {

        if (xhr.status == 200) {
          window.open("../template/users.jsp", "_self");
          $("form")[0].reset();
        }
        else {
          swal("", data.message, "error");
          $("form")[0].reset();
        }
      },

      error: function (xhr, httpStatusMessage, customErrorMessage) {


        if (xhr.status === 410) {
          swal("", xhr.responseJSON.message, "error")
          $("form")[0].reset();
        }
        else if (xhr.status == 400) {
          swal("", xhr.responseJSON.message, "error")
          $("form")[0].reset();
        }
        else {
          swal("", xhr.responseJSON.error, "error")
          $("form")[0].reset();
        }
        $("form")[0].reset();
      }
    });


  });
  
  var test = $.test();

  $.ajax({
    url: `${test}/rolemaster/roles`,
    success: function (data, status, xhr) {
      data.data.map(value => {
        $("#roles").append(`<option value="${value.rolecode}">${value.rolecode}</option>`)
        $("#roles").attr("multiple", "")
      })
      call();
    }
  })

  function call() {

    $("#roles").filterMultiSelect({
      placeholderText: "No Roles Selected",
    });

  }


  $(".cancel").click((e) => {
    e.preventDefault();
    window.open("../template/users.jsp", "_self");

  })

});
