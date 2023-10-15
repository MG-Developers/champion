$(document).ready(() => {

    const token = JSON.parse(localStorage.getItem("token"));
    var test = $.test()

    var tab = $("#Dtable").DataTable({


        dom: '<"top">t<"bottom"ilp>',
        ordering: true,
        processing: true,

        ajax: {

            url: `http://192.168.50.81:8080/ap_automation_backend/dateFormat/list`,
            dataSrc: "data",
            headers: {
                'Authorization': 'Bearer ' + token,
            },
            error: function (xhr) {
                console.log(xhr);
                if (xhr.status == 498) {
                    $.tokenError();
                }
                else if (xhr.status >= 400 && xhr.status < 500) {

                    $.errorMessage(xhr.responseJSON.message);
                }
                else {
                    $.errorMessage(xhr.responseJSON.error)
                }
            }
        },

        columns: [
            { data: "id" },
            { data: "dateFormat" },
            // {
            //     data: 'dateFormat',
            //     render: function(data, type, row) {
            //       if (type === 'display') {

            //         return '<input type="text" class="edit-date" value="' + data+ '">';
            //       }
            //       return data; 
            //     },
            //   },
            //   { data: 'otherColumn' },


            {
                data: "id", render: function (data, type, row, meta) {

                    return `
                        <div class="btn-group">
                        <button class='btn btn-outline-danger btn-sm delete'>Delete</button>&nbsp;&nbsp;  
                        <button class='btn btn-outline-success btn-sm edit'onclick="editbutton()" >Edit</button>&nbsp;&nbsp;
                        <button class='btn btn-outline-success btn-sm view'>Update</button>
                        </div>
                        `
                }
            },



        ],



        columnDefs: [
            {
                "defaultContent": "-",
                "targets": "_all"
            },
            { responsivePriority: 1, targets: 0 },
            { responsivePriority: -2, targets: 1 }
        ],

    });
    tab.column(0).visible(false);


    $('input.global_filter').on('keyup click', function () {
        filterGlobal();
    });


    $("#search").click(() => {
        $('#Dtable').DataTable().column(1).search(
            $('#col' + 1 + '_filter').val(),
            $('#col' + 1 + '_smart').prop('checked')
        ).draw();
    })


    $("#col1_filter").keypress((event) => {

        if (event.keyCode === 13) {

            $('#Dtable').DataTable().column(1).search(
                $('#col' + 1 + '_filter').val(),
                $('#col' + 1 + '_smart').prop('checked')
            ).draw();
        }

    });


    // $('#editableTable tbody').on('blur', 'input.edit-date', function () {
    //     var rowIndex = dataTable.cell($(this).closest('td, th')).index().row;
    //     var newData = $(this).val();

    //     // Perform validation or other processing if needed

    //     // Update the data on the server
    //     $.ajax({
    //         url: 'http://192.168.50.81:8080/ap_automation_backend/dateFormat/update/${row}', // Replace with your update endpoint
    //         type: 'PUT',
    //         data: { id: dataTable.row(rowIndex).data().id, date: newData },
    //         success: function () {
    //             // Reload the table data after successful update
    //             dataTable.ajax.reload();
    //         },
    //     });
    // });



    $("#Dtable").on("click", ".delete", function () {

        var raw = $(this).closest("tr").children();
        var row = tab.row(raw).data().id;
        // console.log(row);

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-sm btn-success mx-1',
                cancelButton: 'btn btn-sm btn-danger mx-1'
            },
            buttonsStyling: false
        })


        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: `http://192.168.50.81:8080/ap_automation_backend/dateFormat/delete?id=${row}`,
                    type: "delete",
                    dataSrc: "data",
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    },
                    success: function (data, status, xhr) {
                        {
                            if (xhr.status == 200) {
                                swalWithBootstrapButtons.fire(
                                    'Entry Deleted!',
                                ).then(() => {
                                    tab.ajax.reload()
                                })
                            }
                            else {

                                $.errorMessage(xhr.responseJSON.message);
                            }

                        }
                    },
                    error: function (xhr) {
                        if (xhr.status == 498) {
                            $.tokenError();
                        }
                        else if (xhr.status >= 400 && xhr.status < 500) {

                            $.errorMessage(xhr.responseJSON.message);
                        }
                        else {
                            $.errorMessage(xhr.responseJSON.error)
                        }
                    }
                })
            }
        })
    })

    $("#Dtable").on("click", ".edit", function () {

        var raw = $(this).closest("tr").children();
        var row = tab.row(raw).data().id;

        // console.log("Hello")

        $.ajax({
            url: `http://192.168.50.81:8080/ap_automation_backend/department/get?id=${row}`,
            dataSrc: "data",
            headers: {
                'Authorization': 'Bearer ' + token,
            },
            success: function (data, status, xhr) {
                if (xhr.status == 200) {
                    console.log(data);
                    sessionStorage.setItem('objectdata', JSON.stringify(data.data))
                    openEditModal()
                    // window.location.href = `../template/updateDepartment.jsp`;
                }

                else {

                    $.errorMessage(xhr.responseJSON.message);
                }

            },
            error: function (xhr) {
                if (xhr.status == 498) {
                    $.tokenError();
                }
                else if (xhr.status >= 400 && xhr.status < 500) {

                    $.errorMessage(xhr.responseJSON.message);
                }
                else {
                    $.errorMessage(xhr.responseJSON.error);
                }
            }
        })

    })

    var openEditModal = () => {

        var sessionString = sessionStorage.getItem('objectdata');
        my_object = JSON.parse(sessionString);

        $("#editDateInput").val(my_object[0].dateFormat)

        $("#editModal").modal('show')
    }

    $('#editDate').click(function () {

        var editDateString = $("#editDateInput").val();

        $.ajax({
            url: `http://192.168.50.81:8080/ap_automation_backend/dateFormat/update?id=${my_object[0].id}`,
            method: "PUT",
            data: JSON.stringify({
                dateFormat: editDateString,
            }),

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },

            success: function (data, status, xhr) {

                $("#editModal").modal('toggle');

                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                        confirmButton: 'btn btn-success',
                        cancelButton: 'btn btn-danger'
                    },
                    buttonsStyling: false
                });

                swalWithBootstrapButtons.fire({
                    title: 'Confirm Save',
                    text: `Are you sure you want to update the date: ${editDateString} ?`,
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, update it!',
                    cancelButtonText: 'No, cancel!',
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire('Updated!', 'Date has been updated successfully.', 'success');
                    }

                    else {
                        Swal.fire('Cancelled', 'Date not updated.', 'info');
                    }

                    window.open("../template/dateMaster.jsp", "_self");
                });
            },

            error: function (xhr) {
                console.log(xhr);
            },
        });

    })

})