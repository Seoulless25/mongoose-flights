const Flight = require('../model/flights');
const Ticket = require('../model/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

function newFlight(req, res) {
    const newFlight = new Flight();
    const departureDate = newFlight.departs;
    res.render('flights/new', {errorMsg: ''} )
}

async function index(req,res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights: flights})
}

async function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {
      await Flight.create(req.body);
      res.redirect('/flights');
    } catch (err) {
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }

async function show(req,  res) {
    const flight = await Flight.findById(req.params.id)
    res.render('flights/show', {
        flight,
        ticket: await Ticket.find({flight: flight._id})
    });
}

