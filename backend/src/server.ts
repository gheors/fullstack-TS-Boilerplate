import express, { Request, Response, } from 'express';
import bodyParser from "body-parser"
import { PORT } from './util/secrets';
import './database'

const server = express();
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

export { server }