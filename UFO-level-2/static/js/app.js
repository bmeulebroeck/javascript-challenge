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

    // Filter the data and log to console to verify it's working
    var filteredData = tableData;

    // Conditional statements to apply filters
    if (inputDate) {
        filteredData = filteredData.filter(ufoSighting => ufoSighting.datetime === inputDate);
    }

    if (inputCity) {
        filteredData = filteredData.filter(ufoSighting => ufoSighting.city === inputCity);
    }

    if (inputState) {
        filteredData = filteredData.filter(ufoSighting => ufoSighting.state === inputState);
    }

    if (inputCountry) {
        filteredData = filteredData.filter(ufoSighting => ufoSighting.country === inputCountry);
    }  
   
    if (inputShape) {
        filteredData = filteredData.filter(ufoSighting => ufoSighting.shape === inputShape);
    }
    
    console.log(filteredData);

    // Clear the table
    tbody.html("");

    // Loop Through the filtered ufo sighting data and append it to the table
    filteredData.forEach(function(filterResults) {

        var row = tbody.append("tr");

        Object.entries(filterResults).forEach(function([key, value]) {
            row.append("td").text(value);
        });
    });  
};

