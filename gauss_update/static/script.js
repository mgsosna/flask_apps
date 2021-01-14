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

    var inputs = {
        loc: d3.select("#mean").property("value"),
        scale: d3.select("#sd").property("value"),
        size: 1000
    };

    json = JSON.stringify(inputs);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/normal");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = handleData;
    xhr.send(json);

    function handleData() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var newData = JSON.parse(xhr.responseText.split(', '));
            console.log(newData);
            createPlot(newData);
        }
    }
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
