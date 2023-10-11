$(document).ready(() => {

    const token = JSON.parse(localStorage.getItem("token"));
    var test = $.test()

    var sessionString = sessionStorage.getItem('objectdata');
    var object = JSON.parse(sessionString);
    // console.log("obejct", object)
    // console.log(object[0].emails)

    $("#input-text1").val(object[0].departmentCode);
    $("#input-text2").val(object[0].departmentName);
    $("#input-text3").val(object[0].name);
    $("#ea").val(object[0].e_A);
    $("#hod").val(object[0].hod);

    var ea_email_visibility = () => {

        let ea = $("#ea").val();

        if (ea === 'N') {
            $('#ea_email_container').hide();
        }

        else {
            $('#ea_email_container').show();
        }

    }

    var hod_email_visibility = () => {

        let hod = $("#hod").val();
        
        if (hod === 'N') {
            $('#hod_email_container').hide();
        }

        else {
            $('#hod_email_container').show();
        }

    }

    ea_email_visibility();
    hod_email_visibility();

    $("#ea").change(function () {
        ea_email_visibility();
    })

    $("#hod").change(function () {
        hod_email_visibility();
    })

    var allEmails = object[0].emails

    var eaEmailArr = []
    var hodEmailArr = []

    var fillEmailsArray = () => {
        for (let i = 0; i < allEmails.length; i++) {
            if (allEmails[i]['emailType'] == "EA_email") {
                eaEmailArr.push(allEmails[i]);
            }

            else {
                hodEmailArr.push(allEmails[i]);
            }
        }
    }

    fillEmailsArray();

    var fill_ea_Dropdown = () => {

        let EA_Dropdown = `<label for="eaemail">EA Emails*</label> <br> <select id="eaemail" name="eaemail" class="form-control" multiple
        placeholder="EA Email">`

        for (let i = 0; i < eaEmailArr.length; i++) {
            EA_Dropdown += `<option value=${eaEmailArr[i]['email']}>${eaEmailArr[i]['email']}</option>`
        }

        EA_Dropdown += `</select>`

        document.getElementById('eaEmailDropdown').innerHTML = EA_Dropdown

        var eaEmailDropdown = $("#eaemail").filterMultiSelect()

        eaEmailDropdown.selectAll()
    }

    fill_ea_Dropdown()

    var fill_ea_Modal = () => {

        for (let i = 0; i < eaEmailArr.length; i++) {
            $("#ea_tbody").append(`<tr><td>${eaEmailArr[i]['email']}</td><td>${eaEmailArr[i]['emailType']}</td></tr>`)
        }

    }

    fill_ea_Modal()

    var fill_hod_Dropdown = () => {

        let HOD_Dropdown = `<label for="hodemail">HOD Emails*</label> <br><select id="hodemail" name="hodemail" class="form-control" multiple
    placeholder="HOD Email">`

        for (let i = 0; i < hodEmailArr.length; i++) {
            HOD_Dropdown += `<option value=${hodEmailArr[i]['email']}>${hodEmailArr[i]['email']}</option>`
        }

        HOD_Dropdown += `</select>`

        document.getElementById('hodEmailDropdown').innerHTML = HOD_Dropdown

        var hodEmailDropdown = $("#hodemail").filterMultiSelect()

        hodEmailDropdown.selectAll()
    }

    fill_hod_Dropdown()

    var fill_hod_Modal = () => {

        for (let i = 0; i < hodEmailArr.length; i++) {
            $("#hod_tbody").append(`<tr><td>${hodEmailArr[i]['email']}</td><td>${hodEmailArr[i]['emailType']}</td></tr>`)
        }

    }

    fill_hod_Modal()

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
        fill_ea_Dropdown();
    });

    $('#addemail2').on('click', function () {
        $('#myModal6').modal('show');
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
        fill_hod_Dropdown()
    });


    // var emailArr = object[0].emails.map(value => value.email);
    // console.log('emailArr ---->', emailArr);
    // let newOption1;

    // emailArr.map((item) => {
    //     $("#DropDown").append(`<option value="${item}">${item}</option>`)
    // });

    // let selectedFilter = $("#DropDown").filterMultiSelect({
    //     placeholderText: "Nothing Selected"
    // });

    // selectedFilter.selectAll();


    // $("#addEmail").click(function () {
    //     let emailVal = $("#input-text6").val();

    //     if (emailVal !== "") {

    //         if (emailArr.includes(emailVal) == false) {

    //             newOption1 = []
    //             emailArr.push(emailVal)

    //             console.log("entered");
    //             $('#DropDown').remove();
    //             emailArr.map((value) => {
    //                 console.log(value);
    //                 newOption1.push($('<option>', { value: `${value}`, text: `${value}` }));
    //             })

    //             // $("#DropDown").append(`<option value="${emailVal}">${emailVal}</option>`)
    //             $("#input-text6").val("")
    //             // emailArr.push({ 'email': emailVal });
    //             $("#dropId").append(`<select id="DropDown" name="emails" multiple class="form-control">
    //           </select>`)
    //             $('#DropDown').append(...newOption1)
    //             selectedFilter = $("#DropDown").filterMultiSelect({
    //                 placeholderText: "Nothing Selected"
    //             })

    //             selectedFilter.selectAll()

    //             // $("#DropDown").append(`<option value="${emailVal}">${emailVal}</option>`)
    //             // $("#input-text6").val("")
    //         }
    //         // emailArr.push({ 'email': emailVal });
    //     }

    // });

    $("#form").submit((e) => {
        e.preventDefault();

        var emailArr = eaEmailArr.concat(hodEmailArr)

        $.ajax({
            type: "PUT",
            url: `${[test[0].url]}/department/update?id=${object[0].id}`,

            data: JSON.stringify({
                departmentCode: $("#input-text1").val(),
                departmentName: $("#input-text2").val(),
                e_A: $("#input-text4").val(),
                hod: $("#input-text5").val(),
                name: $("#input-text3").val(),
                emails: emailArr
            }),

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,

            },
            success: function (data, status, xhr) {
                console.log(data);

                if (xhr.status == 200) {
                    const swalWithBootstrapButtons = Swal.mixin({
                        customClass: {
                            confirmButton: 'btn btn-primary',
                        },
                        buttonsStyling: false
                    })


                    swalWithBootstrapButtons.fire({
                        title: 'Department  updated',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        reverseButtons: true
                    }).then((result) => {

                        window.open("../template/department.jsp", "_self")
                    })
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
                    $.errorMessage(xhr.responseJSON.error)
                }
            },
        });
    });



    $(".cancel").click(() => {
        window.open("../template/department.jsp", "_self")
    })

})


