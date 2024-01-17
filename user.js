$(document).ready(function () {
    $.ajax({
        // Specify the URL for data retrieval
        url: `https://dummyjson.com/users`,
        method: 'Get',
        dataType: 'json',
        success: function (data) {
            $('#Dtable').DataTable({
                data: data,
                column: [
                    { data: 'id' },
                    { data: 'firstName' },
                    { data: 'email' }
                ]
            });
        },

        error: function (error) {
            console.log("Error:", error)
        }
    })
});
