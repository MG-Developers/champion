$(document).ready(() => {

    const token = JSON.parse(localStorage.getItem("token"));
    var test = $.test()

    var sessionString = sessionStorage.getItem('objectdata');
    var object = JSON.parse(sessionString);

    var product_details = object[0].ibShipmentDtl

    let fieldNames = ['s_no', 'item_code', 'description', 'hsn', 'uom', 'quantity', 'unit']

    var total_rows = 0;

    const fillTableRows = () => {

        for (let i = 0; i < product_details.length; i++) {
            console.log(product_details[i])
            fetchRow(product_details[i])
        }

    }

    fillTableRows()

    function fetchRow(item) {

        let newRow = $(`<tr id="row_${total_rows}">`)

        for (let i = 0; i < fieldNames.length; i++) {
            let cell = $('<td>')
            let field = $(`<input type="text" class="form-control px-1 input_size check" required="" id="${fieldNames[i]}_${total_rows}" value=${item[fieldNames[i]]} />`)
            cell.append(field)
            newRow.append(cell)
        }

        let btnCell = $(`<td>
        <button type="button" class="btn btn-outline-danger cancelButton"> Cancel </button> </td>`)
        newRow.append(btnCell)

        $('#product-table tbody').append(newRow)

        total_rows++;
    }

    function addRow() {

        let newRow = $(`<tr id="row_${total_rows}">`)

        for (let i = 0; i < fieldNames.length; i++) {
            let cell = $('<td>')
            let field = $(`<input type="text" class="form-control px-1 input_size check" required="" id="${fieldNames[i]}_${total_rows}" />`)
            cell.append(field)
            newRow.append(cell)
        }

        let btnCell = $(`<td>
        <button type="button" class="btn btn-outline-danger cancelButton"> Cancel </button> </td>`)
        newRow.append(btnCell)

        $('#product-table tbody').append(newRow)

        total_rows++;
    }

    $("#addButton").on("click", function () {
        addRow()
    })

    $("#product-table").on('click', '.cancelButton', function () {
        $(this).closest("tr").remove()
        total_rows--;
    })

    function extractTableInputValues() {
        let dataObjects = []

        $('#product-table tbody tr').each(function () {
            let rowData = {}
            $(this).find('input').each(function (index) {
                let columnName = fieldNames[index];
                let cellValue = $(this).val();
                rowData[columnName] = cellValue;
            })
            dataObjects.push(rowData)
        })

        return dataObjects
    }

    $("#invoice_number").val(object[0].invoiceNumber)
    $("#VendorInvoiceDate").val(object[0].invoiceDate)
    $("#workorderno").val(object[0].workOrderNumber)
    $("#PONumber").val(object[0].poNumber)
    $("#POType").val(object[0].PoType)
    $("#weightquantity").val(object[0].weight)
    $("#InvoiceAmount").val(object[0].invoiceAmount)
    $("#LRNo").val(object[0].lrNumber)
    $("#LRDate").val(object[0].lrDate)
    $("#ContractNo").val(object[0].contractNumber)
    $("#ContractDate").val(object[0].contractDate)
    $("#State").val(object[0].state)
    $("#EWAYBILL").val(object[0].ewayBillNumber)
    $("#IRNNumber").val(object[0].irnNumber)
    $("#cgstRate").val(object[0].cgstPercentage)
    $("#cgstAmount").val(object[0].cgstAmount)
    $("#sgstRate").val(object[0].sgstPercentage)
    $("#sgstAmount").val(object[0].sgstAmount)
    $("#igstRate").val(object[0].igstPercentage)
    $("#igstAmount").val(object[0].igstAmount)
    $("#cessRate").val(object[0].cessPercentage)
    $("#cessAmount").val(object[0].cessAmount)
    $("#taxableValue").val(object[0].taxableValue)
    $("#invoiceAmount").val(object[0].invoiceAmount)

    $("#inbound_form").submit((e) => {
        e.preventDefault();
        product_details=extractTableInputValues()

        $.ajax({
            type: "PUT",
            url: `http://192.168.50.81:8080/ap_automation_backend/ibshipment/update?id=${object[0].id}`,

            data: JSON.stringify({

                invoiceNumber: VendorInvoiceNo,
                invoiceDate: VendorInvoiceDate,
                workOrderNumber: WorkOrderNO,
                poNumber: PONumber,
                PoType: POType,
                weight: Weight,
                invoiceAmount: InvoiceAmount,
                lrNumber: LRNo,
                lrDate: LRDate,
                contractDate: ContractDate,
                contractNumber: ContractNo,
                state: State,
                ewayBillNumber: EWAYBILL,
                irnNumber: IRNNumber,
                cgstPercentage: cgstRate,
                cgstAmount: cgstAmount,
                sgstPercentage: sgstRate,
                sgstAmount: sgstAmount,
                igstPercentage: igstRate,
                igstAmount: igstAmount,
                cessPercentage: cessRate,
                cessAmount: cessAmount,
                taxableValue: taxableValue,
                ibShipmentDtl: product_details
            }),

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer  + ${token}`,

            },
            success: function (data, status, xhr) {
                console.log(data);

                if (xhr.status == 200) {
                    const swalWithBootstrapButtons = Swal.mixin({
                        customClass: {
                            confirmButton: 'btn btn-primary',
                        },
                        buttonsStyling: false
                    })


                    swalWithBootstrapButtons.fire({
                        title: 'Inbound  updated',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        reverseButtons: true
                    }).then((result) => {

                        window.open("../template/Inbound.jsp", "_self")
                    })
                }
                else {

                    $.errorMessage(xhr.responseJSON.message);
                }


            },
            error: function (xhr) {
                if (xhr.status == 498) {
                    $.tokenError();
                }
                else if (xhr.status >= 400 && xhr.status < 500) {

                    $.errorMessage(xhr.responseJSON.message);
                }
                else {
                    $.errorMessage(xhr.responseJSON.error)
                }
            },
        });
    });


    $(".cancel").click(() => {
        window.open("../template/Inbound.jsp", "_self")
    })

})

