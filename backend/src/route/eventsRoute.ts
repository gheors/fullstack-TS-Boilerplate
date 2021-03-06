import express from 'express';
import { Event } from 'model/event';

import { addEvent, deleteEvent, getEvent, getEvents } from "../controller/eventsControl"
const router = express.Router();

// POST : add event
router.post('/', async (req, res) => {
    const events = await addEvent(req.body.event)
    console.log(req.body)
    res.status(200).send(events)
})

// GET : get all events
router.get('/:userId', async (req, res) => {
    const events = await getEvents(req.params.userId)
    res.send(events)
})

// GET : get event by name
router.get('/:name', async (req, res) => {
    const event = await getEvent(req.params.name as string)
    res.send(event)
})


// DELETE : delete event
router.delete('/', async (req, res) => {
    const events = await deleteEvent(req.query.name as string)
    res.send(events)
})


export default router;
