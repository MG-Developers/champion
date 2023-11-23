$(document).ready(function () {

    const token = JSON.parse(localStorage.getItem("token"));
    $("form")[0].reset();
    var test = $.test()

    var product_details = []

    let fieldNames = ['s_no', 'item_code', 'description', 'hsn', 'uom', 'quantity', 'unit']

    var total_rows = 0;

    function addRow() {

        let newRow = $(`<tr id="row_${total_rows + 1}">`)

        for (let i = 0; i < fieldNames.length; i++) {
            let cell = $('<td>')
            let field = $(`<input type="text" class="form-control px-1 input_size check" required="" id="${fieldNames[i]}_${total_rows + 1}" />`)
            cell.append(field)
            newRow.append(cell)
        }

        let btnCell = $(`<td>
        <button type="button" class="btn btn-outline-danger cancel cancelButton"> Cancel </button> </td>`)
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

    $("#inbound_form").submit((e) => {

        e.preventDefault();
        // Array Data
        product_details = extractTableInputValues();

        var vendorCode = $("#vendorCode").val()
        var VendorName = $("#vendorname").val()
        var VendorInvoiceNo = $("#VendorInvoiceNo").val()
        var VendorInvoiceDate = $("#VendorInvoiceDate").val()
        var VendorName = $("#DCNumber").val()
        var WorkOrderNO = $("#workorderno").val()
        var PONumber = $("#PONumber").val()
        var POType = $("#POType").val()
        var Weight = $("#weightqunatity").val()
        var InvoiceAmount = $("#InvoiceAmount").val()
        var UnitName = $("#UnitName").val()
        var StoreId = $("#StoreId").val()
        var TransactionType = $("#TransactionType").val()
        var Invoiceno = $("#Invoiceno").val()
        var LRDate = $("#LRDate").val()
        var LRNo = $("#LRNo").val()
        var ContractDate = $("#ContractDate").val()
        var ContractNo = $("#ContractNo").val()
        var State = $("#State").val()
        var Weight = $("#Weight").val()
        var VehicleNumber = $("#VehicleNumber").val()
        var PoNumber = $("#PoNumber").val()
        var PoType = $("#PoType").val()
        var EWAYBILL = $("#EWAYBILL").val()
        var IRNNumber = $("#IRNNumber").val()
        var cgstRate = $("#cgstRate").val()
        var cgstAmount = $("#cgstAmount").val()
        var sgstRate = $("#sgstRate").val()
        var sgstAmount = $("#sgstAmount").val()
        var igstRate = $("#igstRate").val()
        var igstAmount = $("#igstAmount").val()
        var cessRate = $("#cessRate").val()
        var cessAmount = $("#cessAmount").val()
        var taxableValue = $("#taxableValue").val()
        var invoiceAmount = $("#invoiceAmount").val()
        var sgstRate = $("#sgstRate").val()
        var igstRate = $("#igstRate").val()
        var invoiceAmount = $("#invoiceAmount").val()

        $.ajax({
            url: `https:localhost:8050/ibshipment/add`,
            type: "POST",
            data: JSON.stringify({
                code: vendorCode,
                description: VendorName,
                label: VendorInvoiceNo,
                label: VendorInvoiceDate,
                label: VendorName,
                label: WorkOrderNO,
                label: PONumber,
                label: POType,
                label: Weight,
                label: InvoiceAmount,
                label: UnitName,
                label: StoreId,
                label: ansactionType,
                label: TransactionType,
                label: Invoiceno,
                label: LRDate,
                label: LRNo,
                label: ContractDate,
                label: ContractNo,
                label: State,
                label: Weight,
                label: VehicleNumber,
                label: PoNumber,
                label: PoType,
                label: EWAYBILL,
                label: IRNNumber,
                label: cgstRate,
                label: cgstAmount,
                label: sgstRate,
                label: sgstAmount,
                label: igstRate,
                label: igstAmount,
                label: cessRate,
                label: cessAmount,
                label: taxableValue,
                label: invoiceAmount,
                label: sgstRate,
                label: igstRate,
                label: invoiceAmount,
                product_details: product_details
            }),

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

            success: function (data, status, xhr) {

                if (xhr.status == 200) {
                    window.open("../template/inbound.jsp", "_self");
                    $("form")[0].reset();
                }
                else {

                    $.errorMessage(xhr.responseJSON.message);
                    $("form")[0].reset();
                }

            },

            error: function (xhr, httpStatusMessage, customErrorMessage) {

                if (xhr.status == 498) {
                    $.tokenError();
                }
                else if (xhr.status >= 400 && xhr.status < 500) {

                    $.errorMessage(xhr.responseJSON.message);
                    $("form")[0].reset();
                }
                else {
                    $.errorMessage(xhr.responseJSON.error)
                    $("form")[0].reset();
                }

            }
        });

        $(".cancel").click((e) => {
            e.preventDefault();
            window.open("../template/inbound.jsp", "_self");
        })
    });
});

