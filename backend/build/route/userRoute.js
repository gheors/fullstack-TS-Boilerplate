"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControl_1 = require("../controller/userControl");
const router = express_1.default.Router();
router.post('/register', async (req, res) => {
    console.log(req.body.username);
    const token = await (0, userControl_1.registerUser)(req, res);
    res.status(200).send({ token: token });
});
// router.post('/register', registerUser)
router.post('/login', userControl_1.authenticateUser);
exports.default = router;
