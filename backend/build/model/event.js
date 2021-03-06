"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// mongo
const EventSchema = new mongoose_1.default.Schema({
    name: String,
});
exports.Event = mongoose_1.default.model("events", EventSchema);
