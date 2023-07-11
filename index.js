$(document).ready(function() {
    // Populate year drop-down with options
    var currentYear = new Date().getFullYear();
    for (var i = currentYear; i >= 1900; i--) {
      $('#year').append($('<option>', {
        value: i,
        text: i
      }));
    }
  
    // Event listener for year selection
    $('#year').change(function() {
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
    $('#fetchDates').click(function() {
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
  });
  