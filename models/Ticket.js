// models/Ticket.js
const pool = require('../config/db');

const Ticket = {
    async findByEventId(eventId) {
        const [rows] = await pool.query('SELECT * FROM tickets WHERE event_id = ?', [eventId]);
        return rows;
    },

    async create(ticketData) {
        const { eventId, price, quantity } = ticketData;
        const [result] = await pool.query('INSERT INTO tickets (event_id, price, quantity) VALUES (?, ?, ?)', [eventId, price, quantity]);
        return result.insertId;
    },

    async update(ticketId, ticketData) {
        const { price, quantity } = ticketData;
        await pool.query('UPDATE tickets SET price = ?, quantity = ? WHERE ticket_id = ?', [price, quantity, ticketId]);
    },

    async delete(ticketId) {
        await pool.query('DELETE FROM tickets WHERE ticket_id = ?', [ticketId]);
    },

    async decreaseQuantity(ticketId, quantity) {
        await pool.query('UPDATE tickets SET quantity = quantity - ? WHERE ticket_id = ?', [quantity, ticketId]);
    }
};

module.exports = Ticket;
