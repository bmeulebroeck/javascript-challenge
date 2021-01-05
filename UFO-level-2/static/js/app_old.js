// from data.js
var tableData = data;

// YOUR CODE HERE!

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
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();

    // Select the input elements and store the values entered
    var inputElementDate = d3.select("#datetime");
    var inputDate = inputElementDate.property("value");
    console.log(inputDate);

    var inputElementCity = d3.select("#city");
    var inputCity = inputElementCity.property("value");
    console.log(inputCity);

    var inputElementState = d3.select("#state");
    var inputState = inputElementState.property("value");
    console.log(inputState);

    var inputElementCountry = d3.select("#country");
    var inputCountry = inputElementCountry.property("value");
    console.log(inputCountry);

    var inputElementShape = d3.select("#shape");
    var inputShape = inputElementShape.property("value");
    console.log(inputShape);

    // Filter the data filters and log to console to verify it's working
    // -----THIS WORKS BUT ONLY APPLIES THE LAST ENTERED FILTER VALUE, NOT ALL VALUES
    if (inputDate) {
        filteredData = tableData.filter(tableData => tableData.datetime === inputDate);
    }
    if (inputCity) {
        filteredData = tableData.filter(tableData => tableData.city === inputCity);
    }
    if (inputState) {
        filteredData = tableData.filter(tableData => tableData.state === inputState);
    }
    if (inputCountry) {
        filteredData = tableData.filter(tableData => tableData.country === inputCountry);
    }
    if (inputShape) {
        filteredData = tableData.filter(tableData => tableData.shape === inputShape);
    }

    // OLD CODE FROM THE FIRST LEVEL EXERCISE
    // var filteredData = tableData.filter(tableData => tableData.datetime === inputDate);

    console.log(filteredData);

    // Clear the table
    tbody.html("");

    // Loop through the filtered data and add it into the table
    filteredData.forEach(function(filterResults) {
        
        var row = tbody.append("tr");

        Object.entries(filterResults).forEach(function([key, value]) {
            row.append("td").text(value);
        });
    })  
};

