// controllers/ticketController.js
const Ticket = require('../models/Ticket');

exports.getTicketsByEvent = async (req, res) => {
    const { eventId } = req.params;

    try {
        const tickets = await Ticket.findByEventId(eventId);
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createTicket = async (req, res) => {
    const ticketData = req.body;

    try {
        const ticketId = await Ticket.create(ticketData);
        res.status(201).json({ id: ticketId });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateTicket = async (req, res) => {
    const { id } = req.params;
    const ticketData = req.body;

    try {
        await Ticket.update(id, ticketData);
        res.status(200).json({ message: 'Ticket updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteTicket = async (req, res) => {
    const { id } = req.params;

    try {
        await Ticket.delete(id);
        res.status(200).json({ message: 'Ticket deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
