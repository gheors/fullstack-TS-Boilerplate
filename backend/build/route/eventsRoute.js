"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const eventsControl_1 = require("../controller/eventsControl");
const router = express_1.default.Router();
// POST : add event
router.post('/', async (req, res) => {
    const events = await (0, eventsControl_1.addEvent)(req.query.name);
    res.status(200).send(events);
});
// GET : get all events
router.get('/', async (req, res) => {
    const events = await (0, eventsControl_1.getEvents)();
    res.send(events);
});
// DELETE : delete event
router.delete('/', async (req, res) => {
    const events = await (0, eventsControl_1.deleteEvent)(req.query.name);
    res.send(events);
});
exports.default = router;
