const express = require('express');
const bcrypt = require('bcryptjs');
const helmet = require('helmet');
const cors = require('cors');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const plantsRouter = require('../plants/plants-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();

server.get('/', cors(), (req, res) => {
  res.status(200).json({ api: 'up', dbenv: process.env.DB_ENV });
});

server.use(helmet());
server.use(express.json());

server.use('/api/auth', cors(), authRouter);
server.use('/api/plants', cors(), plantsRouter);
server.use('/api/users', cors(), authenticate, usersRouter);

module.exports = server;
