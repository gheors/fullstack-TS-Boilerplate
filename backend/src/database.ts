import { addEvent } from "./controller/eventsControl";
import { MONGODB_URI } from "./util/secrets";

const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(`...${MONGODB_URI} connected...`)

    // testing database connection
    addEvent("test Connection")
});

export { db }