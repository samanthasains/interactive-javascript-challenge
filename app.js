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
    }

// Pull data for selected ID
function getData(newId) {

    // read in samples.json
    d3.json("samples.json").then((data) => {
        // console.log(data);

        // select metadata from json
        var metadata = data.metadata
        console.log(metadata);

        // filter metadata by id
        var demographicId = metadata.filter(a => a.newId === newId)[0];
        console.log(demographicId);

        // filter array by id
        var sampleId = data.samples.filter(a => a.newId === newId)[0];
        // console.log(sampleId);

        // filter & sort samples values
        var sample_values = sampleId.sample_values.slice(0,10).reverse();
        // console.log(sample_values);

        // filter & sort otu ids
        var otu_ids = sampleId.otu_ids.slice(0,10).reverse();
        // console.log(otu_ids);

        // filter & sort otu labels
        var otu_labels = sampleId.otu_labels.slice(0,10).reverse();
        // console.log(otu_labels);

        // add string to otu ids for display in bar chart
        var otu_ids_edited = []
        otu_ids.forEach(function(id){
            otu_ids_edited.push(`OTU ID: ${id}`)
        })

    // create trace for bar chart  data
    var trace1 = {
        x: sample_values,
        y: otu_ids_edited,
        type: 'bar',
        orientation: 'h',
        text: otu_labels
      };

      // write trace to data variable
      var data = [trace1];

      // write layout variable
      var layout = {
        showlegend: false,
        yaxis:{
            automargin:true
        }
      };

      // plot chart to 'bar' with data and layout information
      Plotly.newPlot('bar', data, layout);

    // create trace for Bubble chart
    var trace1= {
        x: otu_ids,
        y: sample_values,
        mode: 'markers',
        marker: {
          size: sample_values,
          color: otu_ids
        },
        text: otu_ids
      };

      // write trace to data variable
      var data = [trace1];

      // write layout variable
      var layout = {
        showlegend: false,
        height: 600,
        width: 1200
      };

      // plot chart to 'bubble' with data and layout information
      Plotly.newPlot('bubble', data, layout);


    // Display metadata in demographic box
    // Use D3 to select the metadata
    var demographicInfo = d3.select("#sample-metadata");

    // Write metadata to table
    Object.entries(demographicId).forEach((value) => {
      demographicInfo.append("h5").text(value[0]+ ":" + value[1] + "\n");
    });



    });
};

        // });
        getData();
        updateId();