const express = require('express');
const bcrypt = require('bcryptjs');
const helmet = require('helmet');

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up', dbenv: process.env.DB_ENV });
});

server.use(helmet());
server.use(express.json());
module.exports = server;
