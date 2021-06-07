// Create the initial output and make any changes based on dropdown menu selection
function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("../data/samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
})};

// Calls to change info panel and the chart
function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
};

// Changes what is shown in the information panel
function buildMetadata(sample) {
  d3.json("../data/samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    // PANEL.append("h6").text(Object.entries(result));
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key}: ${value}`);
    });
  });
};

init();