const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ["DEN", "DFW", "AUS", "LAX", "SAN", 'ATL'],
    }, 
    arrival: {
        type: Date
    },
});

const flightSchema = new Schema({
    airline: {
        type: String, 
        enum: ["American Airlines", "Southwest", "United", 'Delta']
    },
    airport: {
        type: String, 
        enum: ["DEN", "DFW", "AUS", "LAX", "SAN", 'ATL'],
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        min: Date.now(),
    },
    destinations: [destinationSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model("Flight", flightSchema);