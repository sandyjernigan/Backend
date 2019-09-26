const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
// session for cookies
const session = require('express-session');
const connectSessionKnex = require('connect-session-knex');
const server = express();

// require router files
const authenticate = require('./auth/authenticate-middleware.js');
const authRouter = require('./auth/auth-router.js');
const cookieRouter = require('./auth/cookie-router.js');
const eventsRouter = require('./events/events-router.js');
const guestsRouter = require('./guests/guests-router.js');
const foodRouter = require('./food/food-router.js');

// Database
const db = require('../data/dbConfig.js');
const KnexSessionStore = connectSessionKnex(session)

// configure express-session middleware
const sessionConfig = {
  name: "cookiemonster",
  secret: 'keep it secret, keep it safe',
  cookie: {
    maxAge: 1 * 24 * 60 * 60 * 1000, // days * hours * minutes * seconds * milliseconds
    secure: false, // true, (in production set to true) // only set cookies over https. Server will not send back a cookie over http.
    httpOnly: true, // browser can't access via js
  }, // 1 day in milliseconds // don't let JS code access cookies. Browser extensions run JS code on your browser!
  resave: false,
  saveUninitialized: true, // GDPR laws against setting cookies automatically
  // store the session
  store: new KnexSessionStore({
    knex: db,
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 60 * 60000
  })
}

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

// Base Route
server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/../index.html'));
});

// Routes
server.use('/api/auth', authRouter);
server.use('/api/authentication', cookieRouter);
server.use('/api/events', eventsRouter);
server.use('/api/:username/events', eventsRouter);
server.use('/api/guests', guestsRouter);
server.use('/api/food', foodRouter);

module.exports = server;