$(document).ready(function() 
{
  const token = JSON.parse(localStorage.getItem("token"));
  // console.log(token);
  var totalPages = 10;
  var defaultPageSize = 10;

  var dataTable = $("#myDataTable").DataTable({
    processing: true,
    serverSide: true,

    ajax: {
      url: function() {
        var page = dataTable.page.info().page + 1;
        var pageSize = dataTable.page.info().length;
        return "http://192.168.50.81:8080/ap_automation_backend/usermaster/users?page=" + page + "&size=" + pageSize;
      },
      type: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      dataSrc: function(json) {
        totalPages = json.totalPages;
        defaultPageSize = json.defaultPageSize;

        return json.data;
      },
    },

    columns: [
      { data: "userid" },
      { data: "username" },
      { data: "address_number" },
      { data: "email" },
      {
        data: "userid",
        render: function(data, type, row, meta) {
          return `
                    <div class="btn-group">
                        <button class='btn btn-outline-danger btn-sm delete'>Delete</button>&nbsp;&nbsp;  
                        <button class='btn btn-outline-success btn-sm edit'>Edit</button>&nbsp;&nbsp;
                        <button class='btn btn-outline-success btn-sm view'>View</button>
                    </div>
                `;
        },
      },
    ],

    // columnDefs: [
    //   { targets: 0, visible: false },
    // ],

    pageLength: defaultPageSize,
    lengthMenu: [10, 25, 50, 75, 100],
    
  });
});
