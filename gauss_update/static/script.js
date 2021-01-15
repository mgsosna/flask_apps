function createPlot(x) {

    var trace = {x: x,
                 type: 'histogram',
                 xbins: {start: 10, end: 100, step: 2}};

    var data = [trace];

    var layout = {
        title: "Normal distribution",
        xaxis: {range: [10, 100]},
        yaxis: {range: [0, 200]}

    };

    Plotly.newPlot("plot", data, layout);
}

// Get data
function updateData() {

    var loc = d3.select("#mean").property("value");
    var scale = d3.select("#sd").property("value");

    var url = `/normal/loc=${loc}&scale=${scale}`;

    d3.json(url, data => {
        console.log(data);
        createPlot(data);
    });
}

// Update labels with value from sliders
function updateMeanLabel() {
    var mean = d3.select("#mean").property("value");
    d3.select("#mean_label").html(`Mean: <strong>${mean}</strong>`);
}

function updateSdLabel() {
    var sd = d3.select("#sd").property("value");
    d3.select("#sd_label").html(`Standard deviation: <strong>${sd}</strong>`);
}

// Initialize page
function init() {
    updateData();
    updateMeanLabel();
    updateSdLabel();
}

function handleMean() {
    updateMeanLabel();
    updateData();
}

function handleSd() {
    updateSdLabel();
    updateData();
}

init();

d3.select("#mean").on("input", handleMean);
d3.select("#sd").on("input", handleSd);
