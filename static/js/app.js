// read in samples.json
d3.json("data/samples.json").then((data)=>{
    console.log(data)

    var wfreq = data.metadata.map(d => d.wfreq)
        console.log(`Washing Freq: ${wfreq}`)
});

// Bar chart

// create trace for bar chart  data
var trace1 = {
    x: ['Liam', 'Sophie', 'Jacob', 'Mia', 'William', 'Olivia'], // to enter sample_values
    y: [8.0, 8.0, 12.0, 12.0, 13.0, 20.0], // to enter out_ids
    type: 'bar',
    orientation: 'h',
    text: ['4.17 below the mean', '4.17 below the mean', '0.17 below the mean', 
    '0.17 below the mean', '0.83 above the mean', '7.83 above the mean'] // enter otu_labels,
    marker: {
      color: 'blue'
    }
  };
  
  // write trace to data variable
  var data = [trace1];
  
  // write layout variable
  var layout = {
    font:{
      family: 'Raleway, sans-serif'
    },
    showlegend: false,
    xaxis: {
      tickangle: -45
    },
    yaxis: {
      zeroline: false,
      gridwidth: 2
    },
    bargap :0.05
  };
  
  // plot chart to 'bar' with data and layout information
  Plotly.newPlot('bar', data, layout);