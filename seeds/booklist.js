exports.seed = function(knex) {
  return knex('library').del()
    .then(function () {
      return knex('library').insert([
        {id: 1, title: 'The Ballad of Songbirds and Snakes', author: 'Suzanne Collins' },
        {id: 2, title: 'Me', author: 'Elton John'},
        {id: 3, title: 'Normal People', author: 'Sally Rooney'}
      ]);
    });
};
