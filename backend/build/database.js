"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const eventsControl_1 = require("./controller/eventsControl");
const secrets_1 = require("./util/secrets");
const mongoose = require('mongoose');
mongoose.connect(secrets_1.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
exports.db = db;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(`...${secrets_1.MONGODB_URI} connected...`);
    // testing database connection
    (0, eventsControl_1.addEvent)("test Connection");
});
