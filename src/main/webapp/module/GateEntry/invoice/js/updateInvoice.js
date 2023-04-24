


$(document).ready(()=>{

    var test = $.test();

    var sessionString = sessionStorage.getItem('object2');
    var object2  = JSON.parse(sessionString);
    
    console.log( object2);
    
    $(window).load(()=>{
        
        for(let i = 0 ; i < object2.details.length-1 ; i++)
        {
            $("#add_row").trigger("click");
        }
            for(let i = 0 ; i < object2.details.length ; i++)
            {
                let line_number =$(".line_num")[i];
                let status =$(".details_status")[i];
                let gate_id =$(".details_gate_id")[i];
                let item_code =$(".item_code")[i];
                let hsn_code =$(".hsn_code")[i];
                let quantity =$(".quantity")[i];
                let uom =$(".uom")[i];
                let rate =$(".rate")[i];
                let amount =$(".amount")[i];
                
                
                $(line_number).val(object2.details[i].line_number);
                $(status).val(object2.details[i].status);
                $(gate_id).val(object2.details[i].gate_id);
                $(item_code).val(object2.details[i].item_code);
                $(hsn_code).val(object2.details[i].hsn_code);
                $(quantity).val(object2.details[i].quantity);
                $(uom).val(object2.details[i].uom);
                $(rate).val(object2.details[i].rate);
                $(amount).val(object2.details[i].amount);
                
            }

            var img = document.getElementById('imageview');
            var file = document.querySelector('input[type=file]').files[0];
            var reader = new FileReader();
            reader.addEventListener("load", function () {
                var theBlob = reader.result;
                console.log(theBlob);
                theBlob.lastModifiedDate = new Date();
                theBlob.name = file;
                img.src = theBlob;
    
            }, false);
    
            if (file) {
                reader.readAsDataURL(file);
    
            }

            
            $("#invoice_form").submit((e) => {
                e.preventDefault();
                 
                var oTable = document.querySelector('#tab_logic');
                var details = [];
        
                var data = [...oTable.rows].map(t => [...t.children].map(u => [...u.children].map(c => c.value)));
        
                data.shift();
                data.pop()

                console.log(data);
        
                for (let i = 0; i < data.length; i++) {
                    let tab_val = data[i].flat(2).flat(2)
                    if(tab_val[2] || tab_val[2] == ''){
                        details.push({
                            id: (typeof object2.details[i] != "undefined") ? object2.details[i].id : 0,
                            line_number: tab_val[1],
                            status: tab_val[2],
                            gate_id: tab_val[3],
                            item_code: tab_val[4],
                            hsn_code: tab_val[5],
                            quantity: tab_val[6],
                            uom: tab_val[7],
                            rate: tab_val[8],
                            amount: tab_val[9],
                        })
                    }
                }

                

               
        
                
                var fd = new FormData();
                var files = $('#inputimg')[0].files[0];
                fd.append('file', files);
                fd.append('json' , JSON.stringify({
                        billto_name: $("#billto_name").val(),
                        billto_address1: $("#billto_address1").val(),
                        billto_address2: $("#billto_address2").val(),
                        billto_address3: $("#billto_address3").val(),
                        billto_gstin: $("#billto_gstin").val(),
                        billto_city: $("#billto_city").val(),
                        billto_state: $("#billto_state").val(),
                        billto_zipcode: $("#billto_zipcode").val(),
                        shipto_name: $("#shipto_name").val(),
                        shipto_address1: $("#shipto_address1").val(),
                        shipto_address2: $("#shipto_address2").val(),
                        shipto_address3: $("#shipto_address3").val(),
                        shipto_gstin: $("#shipto_gstin").val(),
                        shipto_city: $("#shipto_city").val(),
                        shipto_state: $("#shipto_state").val(),
                        shipto_zipcode: $("#shipto_zipcode").val(),
                        supplier_invoice_nbr: $("#supplier_invoice_nbr").val(),
                        supplier_date: $("#supplier_date").val(),
                        supplier_order_nbr: $("#supplier_order_nbr").val(),
                        supplier_vehicle_nbr: $("#supplier_vehicle_nbr").val(),
                        supplier_order_date: $("#supplier_order_date").val(),
                        supplier_supply_place: $("#supplier_supply_place").val(),
                        supplier_supply_date: $("#supplier_supply_date").val(),
                        supplier_supply_time: $("#supplier_supply_time").val(),
                        supplier_despatch_mode: $("#supplier_despatch_mode").val(),
                        gate_id: $("#gate_id").val(),
                        status: $("#status").val(),
                        vehicle_nbr: $("#vehicle_nbr").val(),
                        material_type: $("#material_type").val(),
                        weight: $("#weight").val(),
                        in_time: $("#in_time").val(),
                        out_time: $("#out_time").val(),
                        devision: $("#devision").val(),
                        remark: $("#remark").val(),
                        queue_id: $("#queue_id").val(),
                        details: details,}))
        
                $.ajax({
                    url: `${test}/gate/update/${object2.id}`,
                    type: 'put',
                    data: fd,
                    contentType: false,
                    processData: false,
                    success: function (response,xhr) {
                        const swalWithBootstrapButtons = Swal.mixin({
                            customClass: {
                                confirmButton: 'btn btn-success',
                            },
                            buttonsStyling: false
                        })
                        swalWithBootstrapButtons.fire({
                            title: 'Invoice updated',
                            icon: 'success',
                            confirmButtonText: 'OK',
                            reverseButtons: true
                        }).then((result) => {

                        window.open("invoice.jsp" ,"_self");
                        })
                    },
                    error: function(xhr){
                        console.log(xhr);
                    }
                }); 
        
            })
        
    
    })
    


$("#billto_name").val(object2.billto_name);
$("#billto_address1").val(object2.billto_address1);
$("#billto_address2").val(object2.billto_address2);
$("#billto_address3").val(object2.billto_address3);
$("#billto_gstin").val(object2.billto_gstin);
$("#billto_city").val(object2.billto_city);
$("#billto_state").val(object2.billto_state);
$("#billto_zipcode").val(object2.billto_zipcode);

$("#shipto_name").val(object2.shipto_name);
$("#shipto_address1").val(object2.shipto_address1);
$("#shipto_address2").val(object2.shipto_address2);
$("#shipto_address3").val(object2.shipto_address3);
$("#shipto_gstin").val(object2.shipto_gstin);
$("#shipto_city").val(object2.shipto_city);
$("#shipto_state").val(object2.shipto_state);
$("#shipto_zipcode").val(object2.shipto_zipcode);

$("#supplier_invoice_nbr").val(object2.supplier_invoice_nbr);
$("#supplier_order_nbr").val(object2.supplier_order_nbr);
$("#supplier_date").val(object2.supplier_date);
$("#supplier_vehicle_nbr").val(object2.supplier_vehicle_nbr);
var date=$("#supplier_order_date").val(object2.supplier_order_date);
console.log(date);
$("#supplier_supply_place").val(object2.supplier_supply_place);
$("#supplier_supply_date").val(object2.supplier_supply_date);
$("#supplier_supply_time").val(object2.supplier_supply_time);
$("#supplier_despatch_mode").val(object2.supplier_despatch_mode);

$("#gate_id").val(object2.gate_id);
$("#status").val(object2.status);
$("#vehicle_nbr").val(object2.vehicle_nbr);
$("#material_type").val(object2.material_type);
$("#weight").val(object2.weight);
$("#in_time").val(object2.in_time);
$("#out_time").val(object2.out_time);
$("#devision").val(object2.devision);
$("#remark").val(object2.remark);
$("#queue_id").val(object2.queue_id);

var test = $.test();


fetch(`${test}/invoice/${object2.id}`)
.then(response => response.blob())
.then(blob => {
    console.log(blob);
    const extension = blob.type.split("/").reverse()[0];
    const objectURL = URL.createObjectURL(blob);
    if (extension=="jpg" || extension=="jpeg" || extension=="png") {
        $(".ravi").append(`<img class="w-100 h-100" src="" id="imageview"></img>`)
        document.getElementById('imageview').src = objectURL;
    }else{   
        $(".ravi").append(`<object data="" type="application/pdf" class="w-100 h-100" id="pdfview"></object>`)
        document.getElementById('pdfview').data = objectURL;
    }
});
})
  

function previewFile() {
    const file = document.querySelector('input[type=file]').files[0];
    console.log(file.name);
    let extension = file.name.split('.');
    extension = extension.reverse();
    // console.log(extension);
    
    if (extension[0]=="jpg" || extension[0]=="jpeg" || extension[0]=="png") {
        $(".ravi").children().remove();
        $(".ravi").append(`<img class="w-100 h-100" src="" id="imageview"></img>`)
        const preview = document.querySelector('img');
        const reader = new FileReader();
        var filename = file.name;


        reader.addEventListener("load", function () {
            preview.src = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);

            console.log(file);
        }
    }else if(extension[0]=="pdf"){
        $(".ravi").children().remove();
        $(".ravi").append(`<object data="" type="application/pdf" class="w-100 h-100"></object>`)
        const preview = document.querySelector('object');
        const reader = new FileReader();
        var filename = file.name;


        reader.addEventListener("load", function () {
            preview.data = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
        console.log("falana dekhanna");
    }
}
  

    $("#trig").click(()=>{
        $("#inputimg").trigger("click")
    })