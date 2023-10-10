$(document).ready(() => {

  $('#addemail').on('click', function () {
    $('#myModal5').modal('show');
  });

  $('#emailadd').on('click', function () {

    let emailVal = $('#emailname').val();

    $('#eaemail').val(emailVal);

    $('#myModal5').modal('hide');
  });


  $('#addemail2').on('click', function () {
    $('#myModal6').modal('show');
  });

  $('#emailadd2').on('click', function () {

    let emailVal = $('#emailname2').val();

    $('#hodemail').val(emailVal);

    $('#myModal6').modal('hide');
  });


  $('#eaemail').hide();
  $('#addemail').hide();

  // Bind an event handler to the change event of the dropdown
  $('#ea').change(function () {

    // Check the selected value
    var selectedValue = $("#ea").val();
    // If "No" is selected, hide the input field  with button; otherwise, show it
    if (selectedValue === 'N') {

      $('#eaemail').hide();
      $("#addemail").hide();
    } else {
      $('#eaemail').show();
      $("#addemail").show();

    }
  });

  $('#hodemail').hide();


  $('#hod').change(function () {

    // Check the selected value
    var selectedValue = $("#hod").val();
    // If "No" is selected, hide the input field  with button; otherwise, show it
    if (selectedValue === 'N') {

      $('#hodemail').hide();
      $("#addemail2").hide();
    } else {
      $('#hodemail').show();
      $("#addemail2").show();

    }
  });

  const token = JSON.parse(localStorage.getItem("token"));
  $("form")[0].reset();
  let test = $.test();
  let emailArr = []
  let selectFilter;




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
    let values = selectFilter.getSelectedOptionsAsJson(includeDisabled = true);

    JSON.parse(values).emails.map(values => {
      emailArr.push({ email: values });
    })

    var departmentcode = $("#departmentcode").val()
    var departmentname = $("#departmentname").val()
    var ea = $('#ea option:selected').val();
    var hod = $("#hod").val()
    var naming = $('#name').val();
    // var emailname= $('#emailname').val();




    $.ajax({
      url: `${[test[0].url]}/department/add`,
      type: "POST",
      data: JSON.stringify({

        departmentCode: departmentcode,
        departmentName: departmentname,
        e_A: ea,
        hod: hod,
        name: naming,
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
