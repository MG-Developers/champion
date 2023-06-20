
        
        $(document).ready(()=>{

          var sessionString = sessionStorage.getItem('object');
                  var object  = JSON.parse(sessionString);
                  console.log(object);
          
          
                  var jdeUrl = $("#jdeUrl").val(object.url); 
                  $("#jdeUser").val(object.username);
                  var jdePassword = $("#jdePassword").val(object.password); 
                  // var urlactive = $("#urlactive").prop('checked' ,object.url_active);
              let elementValue = object.url_active
              $("#urlactive").prop('checked',elementValue);

              $("#urlactive").change(function () {
                elementValue = $("#urlactive")[0].checked
                console.log(elementValue)
              })


      
                  var jdeType = $("#jdeType").filterMultiSelect()
                  jdeType.selectOption(object.type)

                  var jdeEnv= $("#jdeEnv").filterMultiSelect()
                  jdeEnv.selectOption(object.env) 

                  var jdeTypeValue = object.type
                  var jdeEnvValue = object.env

                  $("#jdeType").click(function (){
                    let selected = jdeType.getSelectedOptionsAsJson(includeDisabled = true);
                    let options = JSON.parse(selected)
                    jdeTypeValue = options.Type[0]
                  })
                  $("#jdeEnv").click(function (){
                    let selected = jdeType.getSelectedOptionsAsJson(includeDisabled = true);
                    let options = JSON.parse(selected)
                    jdeEnvValue = options.Type[0]
                  })


                  // $("#jdeEnv").val(object.env);
                  // $("#jdeType").val(object.type);
             
                  // var jdeEnv = $("#jdeEnv").filterMultiSelect({
                  //   placeholderText: "No Type Selected",
                  // });
                  // var jde = $("#jdeType").filterMultiSelect({
                  //   placeholderText: "No Type Selected",
                  // });

          var arr = []
          $("#form").submit((e)=>{

            var items = $(".item")

              // items.map((index,value)=>{
    
              //   arr.push(value.innerText.split("\n")[0]);
              // })

              var test = $.test()
             
              // let checkboxValue;
              // elementValue= $("#urlactive")[0].checked
              // console.log(elementValue);
                e.preventDefault();
                
                     $.ajax({
                     type: "PUT",
                     url: `${test}/configmaster/updateconfig/${object.id}`,
                     dataSrc:"",
                     data: JSON.stringify({
                    
                       "url": $("#jdeUrl").val(),
                       username: $("#jdeUser").val(),
                       "password": jdePassword[0].value,
                       "url_active": elementValue,
                       "env": jdeTypeValue,
                       "type": jdeEnvValue
                    

                      //  "env": arr[0],
                      //  "type": arr[1],
        
                     }),
                     headers: {
                       'Accept': 'application/json',
                       'Content-Type': 'application/json'
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
                        title: 'Config updated',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        reverseButtons: true
                    }).then((result) => {
                        
                      window.open("../template/config.jsp","_self");

                    })
                  },
                     error: function(xhr){
                       console.log("error");
                       console.log(xhr);
                            alert('fail')
                                  
                     },
                    })
                  });
                               
                     $(".cancel").click(()=>{
                            window.open("../template/config.jsp" , "_self");
                     })
        })