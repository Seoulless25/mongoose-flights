const Flight = require('../models/flights');

module.exports = { 
    create
};

async function create(req, res) {
    const flightsUpdated = await Flight.findById(req.params.id);
    flightsUpdated.destinations.push(req.body);

    try{
        await flightsUpdated.save();
    }
    catch(err){
        console.log(err)
    }
    res.redirect(`/flights/${flightToUpdate._id}`);
}