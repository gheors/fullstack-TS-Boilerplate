"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvent = exports.getEvents = exports.addEvent = void 0;
const event_1 = require("../model/event");
// add Event to mongodb
async function addEvent(name) {
    return new Promise((resolve, reject) => {
        const event = new event_1.Event({ name });
        console.log(event);
        event.save().then(resolve).catch(reject);
    });
}
exports.addEvent = addEvent;
// get all events from mongodb
async function getEvents() {
    return new Promise((resolve, reject) => {
        event_1.Event.find({}, (err, events) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(events);
            }
        });
    });
}
exports.getEvents = getEvents;
// delete event from mongodb
async function deleteEvent(name) {
    return new Promise((resolve, reject) => {
        event_1.Event.deleteMany({ name: name }).then(resolve).catch(reject);
    });
}
exports.deleteEvent = deleteEvent;
