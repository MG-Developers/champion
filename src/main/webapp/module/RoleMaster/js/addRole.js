$(document).ready(()=>{
    $('#form').submit(function(e){

        var test = $.test()

        e.preventDefault();
    var role = $("#form6Example1").val()
    var des= $("#form6Example5").val()

    // console.log(role);
    // console.log(des);


    
    
    $.ajax({
    type: "POST",
    url: `${test}/rolemaster/addrole`,
    data: JSON.stringify({
    rolecode: role,
    role_description: des,
    }),
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    success: function(data,status,xhr) {
    console.log(xhr.status);
    console.log(data);
    
    if (xhr.status==200)
    {
    window.open("../template/rolemaster.jsp" ,"_self"); 
    }
    },
    error: function(xhr){
    console.log("error");
          alert('fail');
      },
    });
    });


    $(".cancel").click(()=>{
        window.open("rolemaster.jsp" , "_self");
    })

    var test = $.test()

    $.ajax({
        url:`${test}/rolemaster/roles`,
        success: function(data){
            var name = data.data;
            name.map(value=>{
                $("#countries").append((`<option value = "${value.rolecode}"> ${value.rolecode}</option>`));

            })
        }
    })



    });

         