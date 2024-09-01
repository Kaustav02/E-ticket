// routes/ticketRoutes.js
const express = require('express');
const {
    getTicketsByEvent,
    createTicket,
    updateTicket,
    deleteTicket,
} = require('../controllers/ticketController');

const router = express.Router();

router.get('/event/:eventId', getTicketsByEvent);
router.post('/', createTicket);
router.put('/:id', updateTicket);
router.delete('/:id', deleteTicket);

module.exports = router;
