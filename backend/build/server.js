"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const passport_1 = __importDefault(require("passport"));
const secrets_1 = require("./util/secrets");
require("./util/strategies");
require("./database");
const route_1 = __importDefault(require("./route"));
const session = require("express-session");
require('dotenv').config();
const server = (0, express_1.default)();
exports.server = server;
server.use(body_parser_1.default.json());
server.use(body_parser_1.default.urlencoded({ extended: true }));
server.use(route_1.default);
server.use(session({ secret: "secret" }));
server.use(passport_1.default.initialize());
server.use(passport_1.default.session());
server.listen(secrets_1.PORT, () => {
    console.log(`server running on port ${secrets_1.PORT}`);
});
