$(document).ready(() => {

    $("form")[0].reset();


    $('#form').submit(function (e) {

        var test = $.test();

        e.preventDefault();

        var company_id = $("#form6Example1").val()
        var company = $("#form6Example2").val()
        var mcu = $("#form6Example3").val()
        var process = $("#form6Example4").val()
        var year = $("#form6Example5").val().substr(0, 4)
        var currentIndex = $("#form6Example6").val()
        var lastNumber = $("#form6Example7").val()
        var length1 = $("#form6Example8").val()

        $.ajax({

            type: "POST",
            url: `${test}/gate/number`,

            data: JSON.stringify({
                company_id: company_id,
                company: company,
                mcu: mcu,
                process: process,
                year: year,
                currentIndex: currentIndex,
                lastNumber: lastNumber,
                length: length1
            }),

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            success: function (data, status, xhr) {

                if (xhr.status == 200) {
                    window.open("../template/gate.jsp", "_self");
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


    $(".cancel").click((e) => {
        e.preventDefault();
        window.open("../template/gate.jsp", "_self");
    })

});
