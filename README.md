# javascript-challenge
<h2>UFO Level 1</h2>
<p>The objective was to load the data from the data.js file and display it in a table on the web page. I utilized the starter html file and referenced code from class activities: used d3.select to isolate "tbody" in the html, then used .forEach and Object.entries to load the data from the file into table rows/columns.</p>
<p>For the date filter, I set up variables and event listeners for the form and button. I then used an arrow function to filter the table data with the user date input, then sent that object through the same .forEach/Object.entries process to display the filtered output in the table.</p>

<h2>UFO Level 2</h2>
<p>The objective for this level was to setup multiple filters that could be applied to the data. I started by creating the input elements on the html page and setting up the ids that I could reference to gather user input. Once I had those variables I used a series of 'if' statements to see if a variable had a value, and if so used an arrow function to apply the value to the data.</p>
<p>In my initial development I had attempted to use 'else' and 'else if' statements, but I kept ending up with only one filter being applied. In my research and by partnering with my study group I realized that those statements were not needed and I could accomplish what I needed using only 'if' statements for each filter variable.</p>
<p>Once all filter values had been checked agains the data, I output the filteredData back to the table again using .forEach/Object.entries.</p>