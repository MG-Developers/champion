$(document).ready(()=>{


  var test = $.test()
    $("#type").filterMultiSelect({
        placeholderText: "No Type Selected",
      });

      $("#env").filterMultiSelect({
        placeholderText: "No Enviornment Selected",
      });

      
      $('#form').submit(function(e){
        var array = [];
          
    e.preventDefault();
    $(".item").map((index,value)=>{
      array.push(value.innerText.split("\n")[0])
    })

    var user = $("#jdeUser").val()
    var password= $("#jdePassword").val()
    var url= $("#jdeUrl").val()


    $.ajax({
    type: "POST",
    url: `${test}/configmaster/addconfig`,
    data: JSON.stringify({
        user: user,
        password: password,
        url: url,
        env : array[1],
        type : array[0]
    }),
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    success: function(data,status,xhr) {
    // console.log(xhr.status);
    // console.log(data);
    
    if (xhr.status==200)
    {
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

    

   

    });

         