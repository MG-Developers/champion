
$(document).ready(() => {
    $("#kt_sign_in_form").submit((e) => {
      e.preventDefault();
      var username = $("input#username").val();
      var password = $("input#password").val();
      // console.log(username);
      // console.log(password);

var login = $.login()

  $.ajax({
  type: "POST",
  url: `${login}/jderest/tokenrequest`,
  data: JSON.stringify({
    username: username,
    password: password,
  }),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  success: function(data,status,xhr) {
    sessionStorage.setItem('name' , JSON.stringify(data.username))
    if (data.userInfo.token !=null && xhr.status==200){

      sessionStorage.setItem('Token' , JSON.stringify(data.userInfo.token))
        
        window.open("../../UserMaster/template/users.jsp" , "_self")
    }
  },
  
  error: function(xhr){


    
    swal("",xhr.responseJSON.message, "error").then(()=>{
      $("form")[0].reset();
    })
  }
    });
  });
});