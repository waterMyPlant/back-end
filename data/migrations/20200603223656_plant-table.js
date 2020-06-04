exports.up = function (knex) {
  return knex.schema.createTable('plants', (plants) => {
    plants.increments();
    plants.string('name', 255).notNullable();
    plants.string('image_URL').notNullable();
    plants.string('water_frequency').notNullable();
    plants.string('light');
    plants.boolean('pet_friendly');
  });
};

exports.down = function (knex) {};
