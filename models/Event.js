// models/Event.js
const pool = require('../config/db');

const Event = {
    async findAll() {
        const [rows] = await pool.query('SELECT * FROM events');
        return rows;
    },

    async findById(eventId) {
        const [rows] = await pool.query('SELECT * FROM events WHERE event_id = ?', [eventId]);
        return rows[0];
    },

    async create(eventData) {
        const { title, description, location, date, category } = eventData;
        const [result] = await pool.query('INSERT INTO events (title, description, location, date, category) VALUES (?, ?, ?, ?, ?)', [title, description, location, date, category]);
        return result.insertId;
    },

    async update(eventId, eventData) {
        const { title, description, location, date, category } = eventData;
        await pool.query('UPDATE events SET title = ?, description = ?, location = ?, date = ?, category = ? WHERE event_id = ?', [title, description, location, date, category, eventId]);
    },

    async delete(eventId) {
        await pool.query('DELETE FROM events WHERE event_id = ?', [eventId]);
    }
};

module.exports = Event;
