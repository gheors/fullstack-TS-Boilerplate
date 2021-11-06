"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../controller/auth");
const express_1 = __importDefault(require("express"));
const eventsRoute_1 = __importDefault(require("./eventsRoute"));
const userRoute_1 = __importDefault(require("./userRoute"));
const router = express_1.default.Router();
router.use('/user', userRoute_1.default);
router.use('/api/events', auth_1.authenticateJWT, eventsRoute_1.default);
exports.default = router;
