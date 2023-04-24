$(document).ready(() => {
    
    $.fn.DataTable.ext.pager.numbers_length = 4;
    //  $("#form6Example8")[0].value = "";


    $("#model").click(()=>{
        $("#col1_filter")[0].value = "";
    })

    var tab;
    var table;

    $.ajax ({

        type: 'GET',    
        
        url: 'http://103.65.20.159:8081/jderest/v2/dataservice/table/F0006?$field=F0006.MCU&$field=F0006.DL01&$filter=F0006.MCU%20EQ%20*&$limit=50',
        
        // dataSrc : "fs_DATABROWSE_F0006",
        
        headers: {
        
         "Authorization": "Basic " + btoa("GAURAV"+":"+"Pernod@123")
        
        },
        
        success : function(data) {
        
         //Success block  

        
         var Business = data.fs_DATABROWSE_F0006.data.gridData.rowset;
        
         // var Description = data.fs_DATABROWSE_F0006.data.gridData.rowset.map(value=> value.F0006_MCU);
        
         console.log(Business);
        
         for(let i = 0 ; i < Business.length ; i++)
        
         {
        
         $("#tbody").append(`<tr><td>${Business[i].F0006_MCU}</td><td>${Business[i].F0006_DL01}</td></tr>`)
        
         }
        
        },
        
         error: function (xhr,ajaxOptions,throwError){
        
         //Error block
        
        },
        
        complete : ()=>{
        
         tab = $("#Dtable").DataTable({
        
         language: {
        
         'paginate': {
        
          'previous': '<span class="prev-icon"><i class="fa fa-angle-left"></i></span>',
        
          'next': '<span class="next-icon"><i class="fa fa-angle-right"></i></span>'
        
         }
        
         },
        
         dom: '<"top">t<"bottom"ip>',
        
         ordering: true,
        
         lengthMenu : [5,10,20,25,50],
        
         pagingType: "simple_numbers",
      
         select: true,
         });
         }
        
        })






        $.ajax ({

            type: 'GET',    
            
            url: `http://103.65.20.159:8081/jderest/v2/dataservice/table/F0101?$field=F0101.AN8&%24field=F0101.ALPH&%24filter=F0101.AT1%20EQ%20V&$limit=50`,
            
            // dataSrc : "fs_DATABROWSE_F0006",
            
            headers: {
            
             "Authorization": "Basic " + btoa("GAURAV"+":"+"Pernod@123")
            
            },
            
            success : function(data) {
            
             //Success block  
            //  console.log(data);
    
            
             var supplier = data.fs_DATABROWSE_F0101.data.gridData.rowset;
            
             // var Description = data.fs_DATABROWSE_F0006.data.gridData.rowset.map(value=> value.F0006_MCU);
            
             
             for(let i = 0 ; i < supplier.length ; i++)
             {
  
                $("#tbodyy").append(`<tr><td>${supplier[i].F0101_AN8}</td><td>${supplier[i].F0101_ALPH}</td></tr>`)
            
             }
            
            },
            
             error: function (xhr,ajaxOptions,throwError){
            
             //Error block
            
            },
            
            complete : ()=>{
                 
                // console.log("complete");
            
             table = $("#Datable").DataTable({
            
             language: {
            
             'paginate': {
            
              'previous': '<span class="prev-icon"><i class="fa fa-angle-left"></i></span>',
            
              'next': '<span class="next-icon"><i class="fa fa-angle-right"></i></span>'
            
             }
            
             },
            
             dom: '<"top">t<"bottom"ip>',
            
             ordering: true,
            
             lengthMenu : [5,10,20,25,50],
            
             pagingType: "simple_numbers",
          
             select: true,
             });
             }
            
            })


$('#Dtable tbody').on( 'click', 'tr', function () {
    var data= tab.row( this ).data();
    var row  = $(this)[0];
    function search()
    { 
        $("#form6Example8").val(data[0]); 

        $(row).removeClass("selected");
    }
    
    $("#select").click(()=>{
        
        search(data);
        
    })
} );


$('#Datable tbody').on( 'click', 'tr', function () {
    var dataa = table.row(this).data();
    var roww  = $(this)[0];

    // console.log(dataa[0]);
    function searchh()
    { 
        console.log(dataa[0]);
        $("#form6Example10").val(dataa[0]); 

        $(roww).removeClass("selected");
    }
    
    $("#selectt").click(()=>{
        searchh(dataa);
        
    })
} );


$('input.global_filter').on('keyup click', function () {
    filterGlobal();
});


$("#search").click(() => {
    $('#Dtable').DataTable().column(0).search(
        $('#col' + 1 + '_filter').val(),
        $('#col' + 1     + '_smart').prop('checked')
        ).draw();
    })
    
    
    
    $("#searchrecord").click(() => {
        $('#Datable').DataTable().column(0).search(
            $('#col' + 2 + '_filter').val(),
            $('#col' + 2     + '_smart').prop('checked')
            ).draw();
        })
})
