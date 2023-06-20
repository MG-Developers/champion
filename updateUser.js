$(document).ready(() => {
  // Retrieve the 'object' from sessionStorage
  var sessionString = sessionStorage.getItem('object');
  var object = JSON.parse(sessionString);

  console.log(object);

  // Call the 'test' function from the '$' object
  var test = $.test();

  // Make an AJAX request to retrieve roles
  $.ajax({
    url: `${test}/rolemaster/roles`,
    success: function (data, status, xhr) {
      // Append options to the 'roles' select element
      data.data.map(value => {
        $("#roles").append(`<option value="${value.rolecode}">${value.rolecode}</option>`)
        $("#roles").attr("multiple", "")
      });

      // Call the 'call' function after appending options
      call()
    }
  });

  // Function to handle role selection
  function call() {
    // Filter the selected roles from the 'roles' select element
    var role = $("#roles").filterMultiSelect({
      placeholderText : "NO Roles Selected"
    });
    
    // Select the roles specified in the 'object.assignroles'
    for (let obj of object.assignroles) {
      role.selectOption(obj.rolecode);
    }
  }

  $.ajax({
    url: `${test}/companymaster/companies`,
    success: function (data, status, xhr) {
      data.data.forEach(value => {
        $("#unitname").append(`<option value="${value.unit_name}">${value.unit_name}</option>`);
        $("#unitname").attr("multiple", ""); // Set the 'multiple' attribute for multi-select
      });
      calls(); // Call the 'calls' function
    }
  });

  // Initialize the filterMultiSelect plugin
  function calls() {
  let unit_name = $("#unitname").filterMultiSelect({
      placeholderText: "No Unit Name Selected",
    });

    for (let obj of object.assigncompany) {
      unit_name.selectOption(obj.unitName);
    }
  }

  // Handle cancel button click
  $(".cancel").click(() => {
    // Open users page
    window.open("../template/users.jsp", "_self");
  });


  // Function to set input field values based on 'object' properties
  var setInputValue = (input, property) => $(input).val(object[property]);

  // Set input values using 'setInputValue' function
  setInputValue("#input-text3", "first_name");
  setInputValue("#input-text4", "last_name");
  setInputValue("#input-text5", "display_name");
  setInputValue("#input-text6", "address_number");
  setInputValue("#form6Example8", "business_unit");
  setInputValue("#input-text9", "company_code");

  // Set text values based on 'object' properties
  $("#input-text11").text(`${object.first_name}`);
  $("#input-text12").text(object.username);
  $("#input-text13").text(object.email);

  // Handle form submission
  $("#form1").submit((e) => {
    e.preventDefault();

    var test = $.test();
    var assignroles = [];

    // Extract assigned roles from displayed items
    var assignroles = $("#roles .item").map((index, value) => ({ rolecode: value.innerText.split("\n")[0] })).get();
    var assigncompany = $("#unitname .item").map((index, value) => ({ unitName: value.innerText.split("\n")[0] })).get();
    // Make an AJAX request to update user
    $.ajax({
      type: "PUT",
      url: `${test}/usermaster/updateuser/${object.userid}`,
      data: JSON.stringify({
        "userid": object.userid,
        "username": object.username,
        "first_name": $("#input-text3").val(),
        "last_name": $("#input-text4").val(),
        // "display_name": $("#input-text5").val(),
        "address_number": $("#input-text6").val(),
        "email": object.email,
        // "business_unit": $("#form6Example8").val(),
        // "company_code": $("#input-text9").val(),
        "assignroles": assignroles,
        "assigncompany": assigncompany,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      success: function (data, status, xhr) {
        // Display success message using SweetAlert library
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
          },
          buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
          title: 'User updated',
          icon: 'success',
          confirmButtonText: 'OK',
          reverseButtons: true
        }).then((result) => {
          // Open users page after successful update
          window.open("../template/users.jsp", "_self");
        });
      },
      error: function (xhr) {
        console.log(xhr);
      },
    });
  });

  // Handle cancel button click
  $(".cancel").click(() => {
    // Open users page
    window.open("../template/users.jsp", "_self");
  });

  // Get references to the tab links
  var tab1 = $(".nav-link")[0];
  var tab2 = $(".nav-link")[1];
  var tab3 = $(".nav-link")[2];

  // Handle next button click
  $(".nextt").click(() => {
    next();
  });

  // Handle previous button click
  $(".prev").click(() => {
    prev();
  });

  // Handle last button click
  $(".last").click(() => {
    lpage();
  });

  // Function to navigate to the next tab
  function next() {
    $(tab2).trigger("click");
  }

  // Function to navigate to the previous tab
  function prev() {
    $(tab1).trigger("click");
  }

  // Function to navigate to the last tab
  function lpage() {
    $(tab3).trigger("click");
  }
});
