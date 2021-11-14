import axios from "axios";
import { Event } from "../../interface/event-Interface";

// const BASE_URL = process.env.REACT_APP_ZONE_BACKEND_HOST || "http://localhost:8080/backend/";
const BASE_URL = "http://localhost:5000/api/events";

export async function postEvent(event: Event) {
    return axios.post(BASE_URL + "/", { event });
}

export async function getEvents(userId: string) {
    return axios.get(BASE_URL + `/${userId}`);
}

export async function getEventByName(name: string) {
    const res = await axios.get(BASE_URL + `/${name}`);
    return res;
}


export async function deleteEvent(event: Event) {
    return axios.delete(BASE_URL + `/${event.name}`);
}
