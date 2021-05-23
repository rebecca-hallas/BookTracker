exports.seed = function(knex) {
  return knex('library').del()
    .then(function () {
      return knex('library').insert([
        {id: 1, title: 'A Life on Our Planet', author: 'David Attenborough' },
        {id: 2, title: 'Where the Crawdads Sing', author: 'Delia Owens'},
        {id: 3, title: 'Normal People', author: 'Sally Rooney'}
      ]);
    });
};
