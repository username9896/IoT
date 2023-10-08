const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Vicky1234:Vicky12345@cluster0.6vg99a2.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const mqtt = require('mqtt');
const express = require('express');
const bodyParser = require('body-parser');
const Sensordata = require('./models/sensor');

const app = express();
const port = 5003;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/saveData', (req, res) => {
    const data = req.body.data;
    const a = req.body.a;

    const NewDevice = new Sensordata({
        data: data,
        date: a
    });

    NewDevice.save()
        .then(() => {
            res.status(200).send('Data saved successfully');
        })
        .catch((err) => {
            res.status(500).send('Error saving data: ' + err);
        });
});

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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
