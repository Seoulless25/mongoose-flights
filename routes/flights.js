var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flight');

router.get('/new', flightsCtrl.new);

router.get('/', flightsCtrl.create);

router.get('/', flightsCtrl.index);

module.exports = router;
