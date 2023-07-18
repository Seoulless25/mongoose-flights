const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ["DEN", "DFW", "ELP", "LAX", "SAN"],
    }, 
    arrival: {
        type: Date,
    },
});

const flightSchema = new Schema({
    airline: {
        type: String, 
        enum: ["American", "Southwest", "United"]
    },
    airport: {
        type: String, 
        enum: ["DEN", "DFW", "ELP", "LAX", "SAN"],
        default: "ELP",
    },
    flightNo: {
        type: Number,
        required: true,
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