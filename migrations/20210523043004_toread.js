
exports.up = function(knex) {
  return knex.schema.createTable('toread', function (table) {
      table.increments('id')
      table.string('book')
      table.boolean('done')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('toread')
};
