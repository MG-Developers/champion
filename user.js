$(document).ready(function() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    success: function(data) {
      $("#myDataTable").DataTable({
        data: data,
        columns: [{ data: "id" }, { data: "name" }, { data: "email" }],
        pageLength: 5,
        lengthMenu: [10, 25, 50, 75, 100],
        pagingType: "full_numbers",
      });
    },
    error: function(error) {
      console.log("Error: ", error);
    },
  });
});
