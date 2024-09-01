// routes/bookingRoutes.js
const express = require('express');
const {
    getBookingsByUser,
    createBooking,
} = require('../controllers/bookingController');

const router = express.Router();

router.get('/user/:userId', getBookingsByUser);
router.post('/', createBooking);

module.exports = router;
