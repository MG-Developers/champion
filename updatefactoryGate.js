
$(document).ready(() => {
    
    var test = $.test()
    var sessionString = sessionStorage.getItem('object');
    var object = JSON.parse(sessionString);
    console.log(object);
    

    $("#input-text1").val(object[0].gate_number);
    $("#input-text2").val(object[0].scan_folder_username);
    $("#input-text3").val(object[0].scan_location);
    $("#input-text4").val(object[0].scan_folder_password);

    var unitname = $("#unitname").filterMultiSelect({
        placeholderText: "No Unit Selected",
      });

     unitname.selectOption(object[0].unit_name)

      var arr1;
    $("#form").submit((e) => {

        var items = $("#unitname .item")
            
        items.map((index,value)=>{

          arr1 = value.innerText.split("\n")[0];
        })
       
        e.preventDefault();
       
        $.ajax({
            type: "PUT",
            url: `http://192.168.0.177:8050/factory/update/${object[0].id}`,
            
            data: JSON.stringify({
                id: object.id,
                gate_number: $("#input-text1").val(),
                scan_location: $("#input-text2").val(),
                scan_folder_username: $("#input-text3").val(),
                scan_folder_password: $("#input-text4").val(),
                "unit_name": arr1,

            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                
            },
            success: function (data, status, xhr) {
                console.log(data);
                
                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                        confirmButton: 'btn btn-primary',
                    },
                    buttonsStyling: false
                })
            
                
                swalWithBootstrapButtons.fire({
                    title: 'Factory updated',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    reverseButtons: true
                }).then((result) => {
        
                    window.open("../template/factory.jsp", "_self")
                })
                
            },
            error: function (xhr) {
                console.log(xhr);
            },
        });
    });

    $.ajax({
        url: `${[test[0].url]}/companymaster/companies`,
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

   

   

    $(".cancel").click(() => {
        window.open("../template/factory.jsp", "_self")
    })

})

