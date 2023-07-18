const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['American Airlines', 'Southwest', 'United']
    },
    arrival: {
        type: Date,
    }
});

const airlineSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American Airlines', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['LAX', 'AUS', 'DFW', 'DEN', 'LAX', 'ATL', 'SAN']
    },
    flightNo: {
        type: Number,
        min:  10,
        max: 9999
    },
    departs: {
        type: Date,
        min: Date.now()
    },
    destinations: [destinationSchema],
}, {    
   timestamps: true
});

module.exports = mongoose.model('Flights', airlineSchema);