// from data.js
var tableData = data;

// Code to display the data in the table
var tbody = d3.select("tbody");

data.forEach(function(UFOReport) {
    var row = tbody.append("tr");

    Object.entries(UFOReport).forEach(function([key, value]) {
        row.append("td").text(value);
    });
});

// Filter by date
var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("keyup", runEnter);

function runEnter() {
    d3.event.preventDefault();

    // Select the input element and store the date value entered
    var inputElement = d3.select("#datetime");
    var inputDate = inputElement.property("value");

    console.log(inputDate);

    // Filter the data by the entered date and log to console to verify it's working
    var filteredData = tableData.filter(tableData => tableData.datetime === inputDate);

    console.log(filteredData);

    // Clear the table
    tbody.html("");

    // Loop through the filtered data and add it into the table
    filteredData.forEach(function(filterDate) {
        var row = tbody.append("tr");

        Object.entries(filterDate).forEach(function([key, value]) {
            row.append("td").text(value);
        })
    })
}