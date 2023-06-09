const express = require('express');
const router = express.Router();

const tripsCrontroller = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsCrontroller.tripsList);

router
    .route('/trips/:tripCode')
    . get(tripsCrontroller.tripsFindByCode);

module.exports = router;
