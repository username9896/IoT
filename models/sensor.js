const mongoose = require('mongoose');

module.exports = mongoose.model('Sensor', new mongoose.Schema({
    id: Number,
    Value: String,
    Data: String
}, { collection: 'sensorvalue' }));