const Flight = require('../model/flights');

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

function newFlight(req, res) {
    const newFlight = new Flight();
    const departure = newFlight.departs;
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render("flights/new", { title: "Add Flight", errorMsg: "", departsDate });
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
    const flightDisplay = await Flight.findById(req.params.id);
    const airportCode = await Airport.findOne();
    const allAirportCodes = airportCode.airportCodes;
    res.render("flights/display", {flight: flightDisplay, allAirportCodes})
}

