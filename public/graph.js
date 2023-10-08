document.addEventListener("DOMContentLoaded", function () {
    var numDataPoints = 20;
    var brightnessData = Array.from({ length: numDataPoints }, () => Math.floor(Math.random() * 100));
    var statusData = Array.from({ length: numDataPoints }, () => Math.random() > 0.5 ? "Online" : "Offline");
    var brightnessTrace = {
        x: Array.from({ length: numDataPoints }, (_, i) => i + 1),
        y: brightnessData,
        mode: 'lines+markers',
        type: 'scatter',
        name: 'Brightness',
        line: { shape: 'linear' },
        marker: { size: 10 }
    };

    var statusTrace = {
        x: Array.from({ length: numDataPoints }, (_, i) => i + 1),
        y: statusData,
        mode: 'markers',
        type: 'scatter',
        name: 'Status',
        marker: { size: 12, symbol: 'square-open-dot' }
    };

    var layout = {
        title: 'Light Data Visualization',
        xaxis: {
            title: 'Data Points'
        },
        yaxis: {
            title: 'Value'
        }
    };
    var data = [brightnessTrace, statusTrace];
    Plotly.newPlot('plot', data, layout);
});
