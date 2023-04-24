var sessionString = sessionStorage.getItem('roles');
        var roles  = JSON.parse(sessionString);

        
        $(document).ready(()=>{

          
          var role = $("#form6Example1").val(roles.rolecode); 
          var des = $("#form6Example5").val(roles.role_description); 
          
          $("#form").submit((e)=>{
            e.preventDefault();
            var test = $.test()
                
                     $.ajax({
                     type: "PUT",
                     url: `${test}/rolemaster/updaterole/${roles.roleid}`,
                     dataSrc:"",
                     data: JSON.stringify({
                       "rolecode": role[0].value,
                       "role_description": des[0].value,
        
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
                        title: 'User updated',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        reverseButtons: true
                    }).then((result) => {
                        
                      window.open("../template/roles.jsp","_self");

                    })},
                     error: function(xhr){
                       console.log("error");
                       console.log(xhr);
                                   alert('fail')
                                  
                     },
                    })
                  });
                               
                     $(".cancel").click(()=>{
                            window.open("../template/roles.jsp" , "_self");
                     })
        })
