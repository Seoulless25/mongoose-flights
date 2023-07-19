const Flight = require('../model/flights');
const Ticket = require('../model/ticket');

module.exports = {
    new: newTicket,
    create,
    addSeat,
};

async function newTicket(req, res) {
    const tickets = await Ticket.find({}).sort('name');
    res.render('tickets/new', {title: 'Add Ticket', tickets});
};

async function create(req, res) {
    req.body.depature += 'T00:00';
    try {
        await Ticket.create(req.body);
    }   catch (err) {
        console.log(err);
    }
    res.redirect('/tickets/new');
}

async function addSeat(req, res) {
    const flight = await Flight.findById(req.params.id);
    flight.seat.push(req.body.ticketId);
    await flight.save();
    res.redirect(`/flights/${flight._id}`);
}