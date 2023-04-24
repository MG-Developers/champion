var sessionString = sessionStorage.getItem('object');
var object = JSON.parse(sessionString);

console.log(object);

$(document).ready(() => {

      var test = $.test()


    //   $.ajax({
    //     url: `${test}/rolemaster/roles`,
    //     success: function (data, status, xhr) {
    //       data.data.map(value => {
    //         $("#roles").append(`<option value="${value.rolecode}">${value.rolecode}</option>`)
    //         $("#roles").attr("multiple", "")
    //       });

    //       call()
    //     }


    //   })

    //   function call() {
    //     var role = $("#roles").filterMultiSelect();

    //     for (let obj of object.assignroles) {
    //       role.selectOption(obj.rolecode);
    //     }

    //   }

    var company_id = $("#input-text1").val(object.company_id);
    var company = $("#input-text2").val(object.company);
    var mcu = $("#input-text3").val(object.mcu);
    var process = $("#input-text4").val(object.process);
    var year = $("#input-text5").val(object.year);
    var currentIndex = $("#input-text6").val(object.currentIndex);
    var lastNumber = $("#input-text7").val(object.lastNumber);
    var length1 = $("#input-text8").val(object.length1);

    $("#form1").submit((e) => {

        var test = $.test()

        e.preventDefault();

        $.ajax({
            type: "PUT",
            url: `${test}/gate/number/${object.id}`,
            dataSrc: "",

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
                'Content-Type': 'application/json',

            },
            success: function (data, status, xhr) {
                console.log(data);

                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                        confirmButton: 'btn btn-success',
                    },
                    buttonsStyling: false
                })


                swalWithBootstrapButtons.fire({
                    title: 'User updated',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    reverseButtons: true
                }).then((result) => {

                    window.open("../template/gate.jsp", "_self")
                })

            },
            error: function (xhr) {
                console.log(xhr);
            },
        });
    });

    $(".cancel").click(() => {
        window.open("../template/gate.jsp", "_self")
    })

})

