// app.js
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const errorMiddleware = require('./middleware/errorHandler');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/tickets', authMiddleware, ticketRoutes);
app.use('/api/bookings', authMiddleware, bookingRoutes);

app.use(errorMiddleware);

module.exports = app;
