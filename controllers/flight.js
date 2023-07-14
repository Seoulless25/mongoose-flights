const Flight = require('../model/flights');
const { create } = require('../model/flights');

module.exports = {
    new: newFlight,
    create,
    index
};

function newFlight(req, res) {
    res.render('flights/new', {errorMsg: ''} )
}

async function index(req,res) {
    const flights = await Flight.find({});
    res.render('flights/index', { 
        flights 
    })
}

async function create() {
    try {
      await Flight.create(req.body);
      res.redirect('/flights');
  
    } catch (err) {
      console.log(err);
      res.render('flights', { errorMsg: err.message });
    }
  }