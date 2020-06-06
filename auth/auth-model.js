const db = require('../data/dbConfig');

module.exports = {
  insert,
  getUsers,
  getByUsername,
};

function insert(user) {
  return db('users').insert(user, 'id');
}

function getUsers() {
  return db('users');
}

function getByUsername(filter) {
  return db('users').where(filter);
}
