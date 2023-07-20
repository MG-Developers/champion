$(document).ready(function () {
    
    // Populate year drop-down with options
    var currentYear = new Date().getFullYear();
    for (var i = currentYear; i >= 1900; i--) {
        $('#year').append($('<option>', {
            value: i,
            text: i
        }));
    }

    // Event listener for year selection
    $('#year').change(function () {
        var selectedYear = $('#year').val();
        populateMonthDropdown(selectedYear);
    });

    // Function to populate month drop-down based on selected year
    function populateMonthDropdown(year) {
        $('#month').empty(); // Clear existing options
        var currentDate = new Date();
        var lastMonth = 11;

        if (currentDate.getFullYear() == year) {
            lastMonth = currentDate.getMonth();
        }

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        for (var j = 0; j <= lastMonth; j++) {
            $('#month').append($('<option>', {
                value: j,
                text: months[j]
            }));
        }
    }

    // Event listener for button click
    $('#fetchDates').click(function () {
        var selectedYear = $('#year').val();
        var selectedMonth = $('#month').val();

        // Fetch current date and last date
        var currentDate = new Date();
        var lastDate = new Date(selectedYear, selectedMonth, 0);

        // Format dates as needed
        var currentDateString = currentDate.toISOString().split('T')[0];
        var lastDateString = lastDate.toISOString().split('T')[0];

        // Display dates
        console.log('Current Date:', currentDateString);
        console.log('Last Date:', lastDateString);
    });



    // Retrieve the URL for the [test[0].url]
    // var test = $.test()

    // Make an AJAX request
    // $.ajax({
    //     url: `${[test[0].url]}/gate/reporting/asonorder`,
    //     datasrc: "data",
    //     success: function (data) {

    // Extract the required data from the response

    var data = [
        {
            "label": "Invoice Scan",
            "total": 0,
            "active": 1
        },

        {
            "label": "Store",
            "total": 5,
            "active": 3
        },

        {
            "label": "Quality",
            "total": 5,
            "active": 4
        },

        {
            "label": "IFinance",
            "total": 8,
            "active": 3
        },
    ]

    var result = data;
    var temp = ["success", "info", "navy", "danger"];

    var pie = [
        "radial-gradient(60% 60% at right,#f497a47d 82%,#0000 81%) ,radial-gradient(60% 60% at bottom ,#f497a47d 82%,#0000 81%), linear-gradient(0.25turn,#ffbb96ad, #df2d2d)",

        "radial-gradient(60% 60% at right,#48a3ec5c 82%,#0000 81%) ,radial-gradient(60% 60% at bottom ,#48a3ec5c 82%,#0000 81%), linear-gradient(0.25turn,#63a5e7db, #f8f9fa)",

        "radial-gradient(60% 60% at right,#f497a47d 82%,#0000 81%) ,radial-gradient(60% 60% at bottom ,#f497a47d 82%,#0000 81%), linear-gradient(0.25turn,#ffbb96ad, #df2d2d)",

        "radial-gradient(60% 60% at right,#48a3ec5c 82%,#0000 81%) ,radial-gradient(60% 60% at bottom ,#48a3ec5c 82%,#0000 81%), linear-gradient(0.25turn,#63a5e7db, #f8f9fa)"
    ];


    result = result.slice(0, 4);

    // Loop through the result data and generate HTML elements
    result.map((item, key) => {

        // Append the generated HTML elements to the "apiData" element
        $("#apiData").append(
            `<div class="col-lg-3" } > 
                        <div class="ibox float-e-margins" >
                        <div style="background:${pie[key]}">
                            <div class="my-ibox-title">
                                <div class="ibox-tools" >
                                </div>
                                
                                <span class="label label-${temp[key]} pull-right">Monthly</span>
                                <h4>${item.label}</h3>
                            </div>
                            
                            <div class="my-ibox-content">
                                <div class="flexCenter">
                                    <h1 class="no-margins">${item.active}</h1>
                                </div>
                           
                                <div class="flexCenter">
                                    <h5 class="no-margins">Total</h5>
                                    <div class="stat-percent font-bold text-${temp[key]}">${item.total} <i class="fa fa-bolt"></i></div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>`
        )
    })
})
