const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  update,
  remove,
};

function find() {
  return db('users');
}

function findById(id) {
  return db('users').where({ id }).first();
}

async function update(changes, id) {
  return db('users').where({ id }).update(changes, '*');
}

function remove(id) {
  return db('users').where({ id }).del();
}
