var sessionString = sessionStorage.getItem('object');
        var object  = JSON.parse(sessionString);
        console.log(object);

        
        $(document).ready(()=>{

          
          
          var jdeUser = $("#jdeUser").val(object.user); 
          // var jdePassword = $("#jdePassword").val(object.jdePassword); 
          var jdeUrl = $("#jdeUrl").val(object.url); 
          
          //  var jdeType = $("#type").filterMultiSelect({
          //   placeholderText: "No Type Selected",
          // });
          // var jdeEnv = $("#env").filterMultiSelect({
          //   placeholderText: "No Type Selected",
          // });

          // jdeEnv.selectOption(object.jdeEnv);
          // jdeType.selectOption(object.jdeType);




            $("#form").submit((e)=>{

              var test = $.test()
                e.preventDefault();
                
                     $.ajax({
                     type: "PUT",
                     url: `${test}/configmaster/updateconfig/${object.id}`,
                     dataSrc:"",
                     data: JSON.stringify({
                       "jdeUser": jdeUser[0].value,
                    //    "jdePassword": jdePassword[0].value,
                       "jdeUrl": jdeUrl[0].value,
        
                     }),
                     headers: {
                       'Accept': 'application/json',
                       'Content-Type': 'application/json'
                     },
                     success: function(data,status,xhr) {
                      const swalWithBootstrapButtons = Swal.mixin({
                        customClass: {
                            confirmButton: 'btn btn-success',
                        },
                        buttonsStyling: false
                    })
                    swalWithBootstrapButtons.fire({
                        title: 'Config updated',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        reverseButtons: true
                    }).then((result) => {
                        
                      window.open("config.jsp","_self");

                    })},
                     error: function(xhr){
                       console.log("error");
                       console.log(xhr);
                                   alert('fail')
                                  
                     },
                    })
                  });
                               
                     $(".cancel").click(()=>{
                            window.open("config.jsp" , "_self");
                     })
        })
