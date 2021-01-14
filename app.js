// read in samples.json
d3.json("data/samples.json").then((data)=>{
    console.log(data);

    var samples = data.samples;
    console.log(samples);

    var sample_values = samples.sample_values.slice(0,10).reverse();
    console.log(sample_values);

    var otu_ids=samples.otu_ids;
    console.log(otu_ids);

    var otu_labels = samples.otu_labels;
    console.log(otu_labels);

});

// Bar chart

// // create trace for bar chart  data
// var trace1 = {
//     x: sample_values
//     y: otu_ids
//     type: 'bar',
//     orientation: 'h',
//     text: otu_labels,
//     marker: {
//       color: 'blue'
//     }
//   };
  
//   // write trace to data variable
//   var data = [trace1];
  
//   // write layout variable
//   var layout = {
//     font:{
//       family: 'Raleway, sans-serif'
//     },
//     showlegend: false,
//     xaxis: {
//       tickangle: -45
//     },
//     yaxis: {
//       zeroline: false,
//       gridwidth: 2
//     },
//     bargap :0.05
//   };
  
//   // plot chart to 'bar' with data and layout information
//   Plotly.newPlot('bar', data, layout);

// This function is called when a dropdown menu item is selected
function updateId() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.node().value;
  