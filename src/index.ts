import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import { config } from '../config';

// const app = express();
// app.use(cors ({
//     credentials: true
// }));
// app.use(compression());
// app.use(cookieParser());
// app.use(bodyParser.json());

// const server = http.createServer(app);

// // server.listen(8080, () => {
//     console.log('server running on http://localhost:8080/');
// });

const MONGO_URL = 'mongodb+srv://samthorne:' + config.MONGO_DB_PASS + '@cluster0.jvhrs6g.mongodb.net/?retryWrites=true&w=majority';
console.log(MONGO_URL);