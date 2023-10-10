$(document).ready(() => {
  var eaEmailArr = []
  var hodEmailArr = []

  $("#eaemail").filterMultiSelect()

  $('#addemail').on('click', function () {
    $('#myModal5').modal('show');
  });

  $('#button-addon1').on('click', function () {

    let emailVal = $('#eaemail2').val();

    if (emailVal !== "") {
      let emailType = "EA_email"

      eaEmailArr.push({
        'email': emailVal,
        'emailType': emailType
      })

      $("#ea_tbody").append(`<tr><td>${emailVal}</td><td>${emailType}</td></tr>`)
    }
  });


  $('#selectRecords').on('click', function () {

    let EA_Dropdown = `<select id="eaemail" name="eaemail" class="form-control" multiple
    placeholder="EA Email">`

    for (let i = 0; i < eaEmailArr.length; i++) {
      EA_Dropdown += `<option value=${eaEmailArr[i]['email']}>${eaEmailArr[i]['email']}</option>`
    }

    EA_Dropdown += `</select>`

    document.getElementById('eaEmailDropdown').innerHTML = EA_Dropdown

    var eaEmailDropdown = $("#eaemail").filterMultiSelect()

    eaEmailDropdown.selectAll()
  });

  $("#hodemail").filterMultiSelect()

  $('#addemail2').on('click', function () {
    $('#myModal6').modal('show');
    // $('#hodemail').val('');
  });

  $('#button-addon2').on('click', function () {

    let emailVal = $('#hodemail2').val();

    if (emailVal !== "") {
      let emailType = "HOD_email"

      hodEmailArr.push({
        'email': emailVal,
        'emailType': emailType
      })

      $("#hod_tbody").append(`<tr><td>${emailVal}</td><td>${emailType}</td></tr>`)
    }
  });

  $('#selectRecords2').on('click', function () {

    let HOD_Dropdown = `<select id="hodemail" name="hodemail" class="form-control" multiple
    placeholder="HOD Email">`

    for (let i = 0; i < hodEmailArr.length; i++) {
      HOD_Dropdown += `<option value=${hodEmailArr[i]['email']}>${hodEmailArr[i]['email']}</option>`
    }

    HOD_Dropdown += `</select>`

    document.getElementById('hodEmailDropdown').innerHTML = HOD_Dropdown

    var hodEmailDropdown = $("#hodemail").filterMultiSelect()

    hodEmailDropdown.selectAll()
  });


  $('#ea_email_container').hide();

  $('#ea').change(function () {
    var selectedValue = $("#ea").val();

    if (selectedValue === 'N') {
      $('#ea_email_container').hide();
    }

    else {
      $('#ea_email_container').show();
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

  $("#Datable").DataTable({

    language: {

      'paginate': {

        'previous': '<span class="prev-icon"><i class="fa fa-angle-left"></i></span>',

        'next': '<span class="next-icon"><i class="fa fa-angle-right"></i></span>'

      }

    },

    dom: '<"top">t<"bottom"ip>',

    ordering: true,

    lengthMenu: [5, 10, 20, 25, 50],

    pagingType: "simple_numbers",
  });

  $("#Datable2").DataTable({

    language: {

      'paginate': {

        'previous': '<span class="prev-icon"><i class="fa fa-angle-left"></i></span>',

        'next': '<span class="next-icon"><i class="fa fa-angle-right"></i></span>'

      }

    },

    dom: '<"top">t<"bottom"ip>',

    ordering: true,

    lengthMenu: [5, 10, 20, 25, 50],

    pagingType: "simple_numbers",
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
    var emailArr = eaEmailArr.concat(hodEmailArr)

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
