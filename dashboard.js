$(document).ready(() => {

    var result = [
        {
            'userid': "1",
            'username': "Mohit Jain",
            'address_number': "1234",
            'email': "mohitjain@gmail.com",
            'completed': "0.75",
            'company_code': "1234"
        },
        {
            'userid': "2",
            'username': "Aman Tomar",
            'address_number': "12345",
            'email': "aman@gmail.com",
            'completed': "1",
            'company_code': "12345"
        },
        {
            'userid': "3",
            'username': "Rahul Sharma",
            'address_number': "123456",
            'email': "rahul@gmail.com",
            'completed': "0.8",
            'company_code': "123456"
        }
    ]

    function createPieChart(data) {

        var fraction1 = data
        var fraction2 = parseFloat(1.0) - parseFloat(fraction1)

        let fractions = [fraction1, fraction2]

        let colors = ["#1ab394", "#d7d7d7"]

        const centerX = 8;
        const centerY = 8;
        const radius = 8;

        let startAngle = 270;
        let endAngle;

        let paths = '';

        for (let i = 0; i < fractions.length; i++) {
            const fraction = fractions[i];
            const color = colors[i];

            endAngle = startAngle + (fraction * 360);

            const startAngleRad = startAngle * (Math.PI / 180);
            const endAngleRad = endAngle * (Math.PI / 180);

            const startX = centerX + radius * Math.cos(startAngleRad);
            const startY = centerY + radius * Math.sin(startAngleRad);
            const endX = centerX + radius * Math.cos(endAngleRad);
            const endY = centerY + radius * Math.sin(endAngleRad);

            const largeArcFlag = fraction > 0.5 ? 1 : 0;
            const sweepFlag = 1;

            const path = `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY} Z`;

            paths += `<path d="${path}" fill="${color}" />`;

            startAngle = endAngle;
        }

        return paths
    }

    $.fn.DataTable.ext.pager.numbers_length = 5;

    var tab = $("#Dtable").DataTable({

        dom: '<"top">t<"bottom"ilp>',
        ordering: true,
        processing: true,
        data: result,

        columns: [
            { data: 'userid' },
            { data: 'username' },
            { data: 'address_number' },
            { data: 'email' },

            {
                data: "completed", render: function (data) {

                    if (data == 1) {
                        return `
                            <i class="fa fa-check text-completed"></i>
                            <span class="pie">${data*100}%</span>
                        `
                    }

                    var paths = createPieChart(data)

                    return `
                    <svg class="peity" height="16" width="16">
                        ${paths}
                    </svg>
                    <span class="pie">${data*100}%</span>
                    `
                }
            },

            { data: 'company_code' },

            {
                data: "id", render: function (data, type, row, meta) {

                    return `
                       <div class="btn-group">
                       <button class='btn btn-outline-danger btn-sm delete'>Delete</button>&nbsp;&nbsp;  
                       <button class='btn btn-outline-success btn-sm edit'>Edit</button>&nbsp;&nbsp;
                       <button class='btn btn-outline-primary btn-sm view'>View</button>
                       </div>
                       `
                }
            },
        ],

        columnDefs: [
            {
                "defaultContent": "-",
                "targets": "_all"
            },
            { responsivePriority: 1, targets: 0 },
            { responsivePriority: -2, targets: 5 }
        ],

    });

    tab.column(0).visible(false);


    $('input.global_filter').on('keyup click', function () {
        filterGlobal();
    });


    $("#search").click(() => {
        $('#Dtable').DataTable().column(1).search(
            $('#col' + 1 + '_filter').val(),
            $('#col' + 1 + '_smart').prop('checked')
        ).draw();
    })
});