    // This function is called when a dropdown menu item is selected
    function updateId() {
        // Use D3 to select the dropdown menu
        var dropdownMenu = d3.select("#selDataset");

        // read in samples.json
        d3.json("samples.json").then((data) => {
            // console.log(data);

            // Write ids to dropdown
            data.names.forEach(function (name) {
                dropdownMenu.append("option").text(name).property("value", name);
            });
        });
    };

    // Update sample when new id is selected
    function optionChanged(newId){
        getData(newId);
        // newCharts(newId);
    }

// Pull data for selected ID
function getData(newId) {

    // read in samples.json
    d3.json("samples.json").then((data) => {
        console.log(data);

        // filter array by id
        var sampleId = data.samples.filter(a => a.newId === newId)[0];
        console.log(sampleId);

        var sample_values = sampleId.sample_values.slice(0,10).reverse();
        console.log(sample_values);

        var otu_ids=sampleId.otu_ids.slice(0,10).reverse();
        console.log(otu_ids);

        var otu_labels = sampleId.otu_labels.slice(0,10).reverse();
        console.log(otu_labels);
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
        getData();
        updateId();