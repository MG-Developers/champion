
        var sessionString = sessionStorage.getItem('object');
        var object  = JSON.parse(sessionString);

        console.log(object);

        $(document).ready(()=>{

          var test = $.test()


          $.ajax({
            url: `${test}/rolemaster/roles`,
            success: function (data, status, xhr) {
              data.data.map(value => {
                $("#roles").append(`<option value="${value.rolecode}">${value.rolecode}</option>`)
                $("#roles").attr("multiple" , "")
              });

              call()
            }
    
    
          })

          function call(){
            var role = $("#roles").filterMultiSelect();

            for(let obj of object.assignroles)
            {
              role.selectOption(obj.rolecode);
            }

          }
 
             var first = $("#input-text3").val(object.first_name); 
             var last = $("#input-text4").val(object.last_name); 
             var d_name = $("#input-text5").val(object.display_name); 
             var a_number = $("#input-text6").val(object.address_number); 
             var b_unit = $("#form6Example8").val(object.business_unit); 
             var com_code = $("#input-text9").val(object.company_code ); 
             var sup_code = $("#form6Example10").val(object.supplier_number ); 
             var assignroles = [];
             
             $("#input-text11")[0].innerText = object.first_name +" " + object.last_name; 
             $("#input-text12")[0].innerText = object.username;
             $("#input-text13")[0].innerText = object.email;
             
             
           
             $("#form1").submit((e)=>{

              var test = $.test()
              
               e.preventDefault();

               var items = $(".item");

               items.map((index,value)=>{
                var roles = value.innerText.split("\n")
                assignroles.push({rolecode:roles[0]})
               })
               
               
                    $.ajax({
                    type: "PUT",
                    url: `${test}/usermaster/updateuser/${object.userid}`,
                    dataSrc:"",
                  
                    data: JSON.stringify({
                      "userid": object.userid,
                      "username": object.username,
                      "first_name": first[0].value,
                      "last_name": last[0].value,
                      "display_name": d_name[0].value,
                      "address_number": a_number[0].value,
                      "email": object.email,
                      "business_unit": b_unit[0].value,
                      "company_code": com_code[0].value,
                      "supplier_number": sup_code[0].value,
                      "assignroles" : assignroles,

                    }),
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                      
                    },
                    success: function(data,status,xhr) {
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
                          
                          window.open("../template/users.jsp" , "_self")
                      })
                        
                    },
                    error: function(xhr){
                      console.log(xhr);
                              },
                      });
                    });

                    $(".cancel").click(()=>{
                      window.open("../template/users.jsp" , "_self")
                    })


                    var tab1 = $(".nav-link")[0];
                    var tab2 = $(".nav-link")[1];
                    var tab3 = $(".nav-link")[2];

                    $(".nextt").click(()=>{
                       next();
                    })
                    $(".prev").click(()=>{
                       prev();
                    })
                    $(".last").click(()=>{
                       lpage();
                    })
                    
                    function next(){
                      $(tab2).trigger("click");
                    }
                    function prev(){
                      $(tab1).trigger("click");
                    }

                    function lpage(){
                      $(tab3).trigger("click");
                    }

             })

