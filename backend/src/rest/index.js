import express from 'express';
import routes from './routes';
import cors from 'cors';
import http from 'http';
const app = express();
const httpServer = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(routes);

export default httpServer;