// Initialize the Plotly plot with a generic histogram
function initPlot(){

    var x = [];
    for(var i=0; i<500; i++){
        x[i] = Math.random();
    };

    var trace = {
        x: x,
        type: 'histogram'
    };

    var data = [trace];

    var layout = {
        title: "Normal distribution",
        xaxis: {range: [10, 100]}
    };

    Plotly.newPlot("plot", data, layout);
}

// Update labels with value from sliders
function updateLabels() {

    var mean = document.getElementById("mean").value;
    d3.select("#mean_label").html(`Mean: <strong>${mean}</strong>`);

    var sd = document.getElementById("sd").value;
    d3.select("#sd_label").html(`Standard deviation: <strong>${sd}</strong>`);
}

// Initialize page
function init() {
    initPlot();
    updateLabels();
}

init();

d3.select("#mean").on("input", updateLabels);
d3.select("#sd").on("input", updateLabels);
