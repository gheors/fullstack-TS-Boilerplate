import express, { Request, Response, } from 'express';
import bodyParser from "body-parser"
import passport from "passport";
import { PORT, JWT_SECRET } from './util/secrets';
import './util/strategies'
import './database'
import route from './route';
import cors from 'cors';
import dotenv from 'dotenv';
import session from 'express-session';

dotenv.config()
const server = express();
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(cors({ origin: "http://localhost:3000", credentials: true }))
server.use(
    session({
        secret: JWT_SECRET,
        resave: true,
        saveUninitialized: true,
    })
);
server.use(passport.initialize());
server.use(passport.session());
server.use(route)

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

export { server }
