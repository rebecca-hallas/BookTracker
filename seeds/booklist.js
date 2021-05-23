
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('toread').del()
    .then(function () {
      // Inserts seed entries
      return knex('toread').insert([
        {id: 1, book: "'The Ballad of Songbirds and Snakes' by Suzanne Collins", done: false},
        {id: 2, book: "'Me' by Elton John", done: false},
        {id: 3, book: "'Normal People' by Sally Rooney", done: false}
      ]);
    });
};
