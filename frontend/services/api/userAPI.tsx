import axios from "axios";
import { Event } from "../../interface/event-Interface";

// const BASE_URL = process.env.REACT_APP_ZONE_BACKEND_HOST || "http://localhost:8080/backend/";
const BASE_URL = "http://localhost:5000/user";

export async function registerUser(username: string, password: string) {
    return axios.post(BASE_URL + "/register", { username, password });
}

export async function authenticateUser(username: string, password: string) {
    return axios.post(BASE_URL + "/login", { username, password });
}

export async function getEvents() {
    return axios.get(BASE_URL + "/");
}

export async function getEventByName(name: string) {
    const res = await axios.get(BASE_URL + `/${name}`);
    return res;
}


export async function deleteEvent(event: Event) {
    return axios.post(BASE_URL + "/", event.name);
}
