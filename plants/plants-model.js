const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db('plants');
}

function findById(id) {
  return db('plants').where({ id }).first();
}

async function add(story) {
  return db('plants').insert(story).returning('id');
}

async function update(changes, id) {
  return db('plants').where({ id }).update(changes, '*');
}

function remove(id) {
  return db('plants').where({ id }).del();
}
