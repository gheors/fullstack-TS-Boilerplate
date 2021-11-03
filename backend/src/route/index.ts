import express from "express"
import eventsRoute from "./eventsRoute"

const router = express.Router()

router.use('/api/events', eventsRoute)

export default router