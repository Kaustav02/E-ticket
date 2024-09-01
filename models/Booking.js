// models/Booking.js
const pool = require('../config/db');

const Booking = {
    async findByUserId(userId) {
        const [rows] = await pool.query('SELECT * FROM bookings WHERE user_id = ?', [userId]);
        return rows;
    },

    async create(bookingData) {
        const { userId, ticketId, quantity } = bookingData;
        const [result] = await pool.query('INSERT INTO bookings (user_id, ticket_id, quantity) VALUES (?, ?, ?)', [userId, ticketId, quantity]);
        return result.insertId;
    },

    async updateStatus(bookingId, status) {
        await pool.query('UPDATE bookings SET status = ? WHERE booking_id = ?', [status, bookingId]);
    }
};

module.exports = Booking;
