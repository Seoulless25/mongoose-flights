const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airlineSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American Airlines', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['LAX', 'AUS', 'DFW', 'DEN', 'LAX', 'ATL']
    },
    flightNo: {
        type: Number,
        min:  10,
        max: 9999
    },
    departs: {
        type: Date
}
});

module.exports = mongoose.model('Flights', airlineSchema);