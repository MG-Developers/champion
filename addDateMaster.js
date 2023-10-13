$(document).ready(() => {
  const token = JSON.parse(localStorage.getItem("token"));
  $("form")[0].reset();
  let test = $.test();

  $("#saveDate").click(function (e) {
    
    e.preventDefault();
    
    $("#exampleModalCenter").modal('toggle');
    
    var dateString = $("#date").val();

    $.ajax({
      url: "http://192.168.50.81:8080/ap_automation_backend/dateFormat/add",
      method: "POST",
      data: JSON.stringify({
        dateFormat: dateString,
      }),

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },

      success: function (data, status, xhr) {
        
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
          title: 'Confirm Save',
          text: `Are you sure you want to save the date: ${dateString} ?`,
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes, save it!',
          cancelButtonText: 'No, cancel!',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Saved!', 'Date has been saved successfully.', 'success');
          }

          else {
            Swal.fire('Cancelled', 'Date not saved.', 'info');
          }

          window.open("../template/dateMaster.jsp", "_self");
        });
      },

      error: function (xhr) {
        Swal.fire('Cancelled', 'Error.', 'info');
        console.log(xhr);
      },
    });

  })
});
