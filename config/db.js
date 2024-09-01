// config/db.js
const mysql = require('mysql2/promise');


const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection()
    .then(connection => {
        console.log('Connected to MySQL database!');
        connection.release();  // Release the connection back to the pool
    })
    .catch(error => {
        console.error('Error connecting to MySQL database:', error.message);
    });


module.exports = pool;
