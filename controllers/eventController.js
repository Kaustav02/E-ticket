// controllers/eventController.js
const Event = require('../models/Event');

exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getEventById = async (req, res) => {
    const { id } = req.params;

    try {
        const event = await Event.findById(id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createEvent = async (req, res) => {
    const eventData = req.body;

    try {
        const eventId = await Event.create(eventData);
        res.status(201).json({ id: eventId });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateEvent = async (req, res) => {
    const { id } = req.params;
    const eventData = req.body;

    try {
        await Event.update(id, eventData);
        res.status(200).json({ message: 'Event updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteEvent = async (req, res) => {
    const { id } = req.params;

    try {
        await Event.delete(id);
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
