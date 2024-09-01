// controllers/bookingController.js
const Booking = require('../models/Booking');
const Ticket = require('../models/Ticket');

exports.getBookingsByUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const bookings = await Booking.findByUserId(userId);
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createBooking = async (req, res) => {
    const bookingData = req.body;

    try {
        await Ticket.decreaseQuantity(bookingData.ticketId, bookingData.quantity);
        const bookingId = await Booking.create(bookingData);
        res.status(201).json({ id: bookingId });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
