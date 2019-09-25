const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

// require router files
const authenticate = require('./auth/authenticate-middleware.js');
const authRouter = require('./auth/auth-router.js');
const eventsRouter = require('./events/events-router.js');
const foodRouter = require('./food/food-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// Base Route
server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/../index.html'));
});

// Routes
server.use('/api/auth', authRouter);
server.use('/api/events', eventsRouter);
server.use('/api/:username/events', eventsRouter);
server.use('/api/food', foodRouter);

module.exports = server;