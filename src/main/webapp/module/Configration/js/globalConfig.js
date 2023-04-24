

    $.test = function (){
        var dataa;
        $.ajax({
            url: 'http://192.168.0.177:8050/configmaster/configs',
            async: false,
            success: function (resp) {

                // console.log(resp);
                resp.data.map((value)=>{
                    if(value.user == "Test")
                    {
                        // console.log(value);
                        dataa = value.url
                    }
                })
                
            },
            error: function () {}
        });
        return dataa;
          }


    $.login = function (){
        var dataa;
        $.ajax({
            url: 'http://192.168.0.177:8050/configmaster/configs',
            async: false,
            success: function (resp) {

                resp.data.map((value)=>{
                    if(value.user == "JDE")
                    {
                        dataa = value.url
                    }
                })
                
            },
            error: function () {}
        });
        return dataa;
          }

