
exports.up = function(knex) {
    return knex.schema.createTable('library', function (table) {
        table.increments('id')
        table.string('title')
        table.string('author')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('library')
};
