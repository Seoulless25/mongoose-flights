const Flight = require('../model/flights');

module.exports = { 
    create
};

async function create(req, res) {
    const flightUpdate = await Flight.findById(req.params.id);
    flightUpdate.destinations.push(req.body);
    try{
        await flightUpdate.save();
    }
    catch(err){
        console.log(err)
    }
    res.redirect(`/flights/${flightUpdate._id}`);
}