let cors = require('cors');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const bp = require('body-parser');
const port = process.env.port || 3001;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.listen(port);

const memoryRoute = require('./routes/api');
app.use('/api', memoryRoute)