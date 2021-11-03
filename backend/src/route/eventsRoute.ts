import express from 'express';

import { addEvent, deleteEvent, getEvents } from "../controller/eventsControl"
const router = express.Router();

// POST : add event
router.post('/', async (req, res) => {
    const events = await addEvent(req.query.name as string)
    res.status(200).send(events)
})

// GET : get all events
router.get('/', async (req, res) => {
    const events = await getEvents()
    res.send(events)
})

// DELETE : delete event
router.delete('/', async (req, res) => {
    const events = await deleteEvent(req.query.name as string)
    res.send(events)
})


export default router;
