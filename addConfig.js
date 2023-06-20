
$(document).ready(()=>{


  var test = $.test()
  $("#type").filterMultiSelect({
      placeholderText: "No Type Selected",
    });
      
  
  $("#env").filterMultiSelect({
    placeholderText: "No Enviornment Selected",
  });
  
  $('#form').submit(function(e){
    // var array = [];
    
    e.preventDefault();
    $("#type .item").map((index,value)=>{
      array1 = value.innerText.split("\n")[0];
    })
    
    $("#env .item").map((index,value)=>{
      array2 = value.innerText.split("\n")[0];
    })
    var url= $("#jdeUrl").val()
    var user = $("#jdeUser").val()
    var password= $("#jdePassword").val()
    var checkbox = $("#url_active")[0].checked
    

    $.ajax({
    type: "POST",
    url: `${test}/configmaster/addconfig`,
    data: JSON.stringify({
         url: url,
         username: user,
        password: password,
        url_active: checkbox,
        
        type : array1,
        env : array2,
      }),
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    success: function(data,status,xhr) {
    // console.log(xhr.status);
    console.log(data);
    
    if (xhr.status==200)
    {
      // console.log(data);
    window.open("config.jsp" ,"_self"); 
    }
    },
    error: function(xhr){
    // console.log("error");
    //       alert('fail');
      },
    });
    });


    $(".cancel").click(()=>{
        window.open("config.jsp" , "_self");
    })

    

   

    })
 

         