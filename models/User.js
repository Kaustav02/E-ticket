
const pool = require('../config/db');

const User = {
    async findByEmail(email) {
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    },

    async create(userData) {
        const { username, email, password_hash } = userData;
        const [result] = await pool.query('INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)', [username, email, password_hash]);
        return result.insertId;
    }
};

module.exports = User;
