import { IEvent, Event } from "../model/event"


// add Event to mongodb
export async function addEvent(name: string) {
    return new Promise((resolve, reject) => {
        const event = new Event({ name })
        event.save().then(resolve).catch(reject)
    })
}

// get all events from mongodb
export async function getEvents(): Promise<IEvent[]> {
    return new Promise<IEvent[]>((resolve, reject) => {
        Event.find({}, (err, events) => {
            if (err) {
                reject(err)
            } else {
                resolve(events)
            }
        })
    })
}


// delete event from mongodb
export async function deleteEvent(name: string) {
    return new Promise((resolve, reject) => {
        Event.deleteMany({ name: name }).then(resolve).catch(reject)
    })
}
