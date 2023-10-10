$(document).ready(() => {

  var emailArr = []

  $('#addemail').on('click', function () {
    let emailVal = $('#eaemail').val();
    let emailType = "EA_email"

    emailArr.push({
      'email': emailVal,
      'emailType': emailType
    })

    $("#ea_tbody").append(`<tr><td>${emailVal}</td><td>${emailType}</td></tr>`)

    $('#myModal5').modal('show');
    // $('#eaemail').val('');
  });

  $('#addemail2').on('click', function () {
    let emailVal = $('#hodemail').val();
    let emailType = "HOD_email"

    emailArr.push({
      'email': emailVal,
      'emailType': emailType
    })

    $("#ea_tbody").append(`<tr><td>${emailVal}</td><td>${emailType}</td></tr>`)

    $('#myModal5').modal('show');
    // $('#hodemail').val('');
  });

  $('#eaemail').hide();
  $('#addemail').hide();

  $('#ea').change(function () {
    var selectedValue = $("#ea").val();

    if (selectedValue === 'N') {

      $('#eaemail').hide();
      $("#addemail").hide();
    }

    else {
      $('#eaemail').show();
      $("#addemail").show();
    }
  });

  $('#hod').change(function () {
    var selectedValue = $("#hod").val();

    if (selectedValue === 'N') {

      $('#hodemail').hide();
      $("#addemail2").hide();
    }

    else {
      $('#hodemail').show();
      $("#addemail2").show();
    }
  });

  const token = JSON.parse(localStorage.getItem("token"));
  $("form")[0].reset();
  let test = $.test();

  //   $("#DropDown").filterMultiSelect({
  //     placeholderText: "Nothing Selected"
  //   });

  //   let emailValues =[]
  //   let newOption1;

  //   $("#addemail").click(function () {


  //     let emailVal = $("#email").val();

  //     if (emailVal !== "") {

  //       if(emailValues.includes(emailVal) == false)
  //       {
  //         newOption1 = []
  //         emailValues.push(emailVal)

  //         console.log("entered");
  //         $('#DropDown').remove();
  //         emailValues.map((values)=> {
  //           console.log(values);
  //           newOption1.push($('<option>', { value: `${values}`, text: `${values}` }));
  //         })

  //           // $("#DropDown").append(`<option value="${emailVal}">${emailVal}</option>`)
  //           $("#email").val("")
  //           // emailArr.push({ 'email': emailVal });
  //           $("#dropId").append(`<select id="DropDown" name="emails" multiple class="form-control">
  //           </select>`)
  //           $('#DropDown').append(...newOption1)
  //            selectFilter = $("#DropDown").filterMultiSelect({
  //             placeholderText: "Nothing Selected"
  //           })

  //           selectFilter.selectAll()
  //       }

  //     }
  // });






  $('#form').submit(function (e) {

    e.preventDefault();

    var departmentcode = $("#departmentcode").val()
    var departmentname = $("#departmentname").val()
    var naming = $('#name').val();
    var ea = $("#ea").val();
    var hod = $("#hod").val();

    $.ajax({
      url: `${[test[0].url]}/department/add`,
      type: "POST",
      data: JSON.stringify({
        departmentName: departmentname,
        departmentCode: departmentcode,
        name: naming,
        e_A: ea,
        hod: hod,
        emails: emailArr
      }),

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },

      success: function (data, status, xhr) {
        console.log(data);


        if (xhr.status == 200) {
          window.open("../template/department.jsp", "_self");
          $("form")[0].reset();
        }
        else {

          $.errorMessage(xhr.responseJSON.message);
        }
      },

      error: function (xhr, httpStatusMessage, customErrorMessage) {

        if (xhr.status == 498) {
          $.tokenError();
        }
        else if (xhr.status >= 400 && xhr.status < 500) {

          $.errorMessage(xhr.responseJSON.message);
          $("form")[0].reset();
        }
        else {
          $.errorMessage(xhr.responseJSON.error)
          $("form")[0].reset();
        }
      }
    });
  });

  $(".cancel").click((e) => {
    e.preventDefault();
    window.open("../template/department.jsp", "_self");
  })

});