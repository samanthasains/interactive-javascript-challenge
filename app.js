// Initialize the page with default
function init() {

    // read in samples.json
    d3.json("samples.json").then((data) => {
        console.log(data);

        // write subject ids to array
        var subjectNo = data.names;
        console.log(subjectNo);

        // var sample_values = samples.sample_values.slice(0,10).reverse();
        // console.log(sample_values);

        // var otu_ids=samples.otu_ids;
        // // console.log(otu_ids);

        // var otu_labels = samples.otu_labels;
        // console.log(otu_labels);
    });
    };

    // This function is called when a dropdown menu item is selected
    function updateId() {
        // Use D3 to select the dropdown menu
        var dropdownMenu = d3.select("#selDataset");

        // read in samples.json
        d3.json("samples.json").then((data) => {
            console.log(data);

            // Write ids to menu bar
            data.names.forEach(function (name) {
                dropdownMenu.append("option").text(name).property("value", name);
            });
        });
    };
            // Assign the value of the dropdown menu option to a variable
            // var dataset = dropdownMenu.property();

            // Bar chart

            // // create trace for bar chart  data
            // var trace1 = {
            //     x: sample_values,
            //     y: otu_ids,
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

            // Bubble chart

            // var trace1= {
            //     x: out_ids,
            //     y: sample_values,
            //     mode: 'markers',
            //     marker: {
            //       size: sample_values,
            //       color: otu_ids
            //     },
            //     text: otu_labels
            //   };

            //   var data = [trace1];

            //   var layout = {
            //     showlegend: false,
            //     height: 600,
            //     width: 600
            //   };

            //   Plotly.newPlot('bubble', data, layout);

        // });
        init();
        updateId();