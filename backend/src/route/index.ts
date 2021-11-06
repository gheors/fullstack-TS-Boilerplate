import { authenticateJWT } from "../controller/auth"
import express from "express"
import eventsRoute from "./eventsRoute"
import userRoute from "./userRoute"

const router = express.Router()
router.use('/user', userRoute)
router.use('/api/events', authenticateJWT, eventsRoute)

export default router