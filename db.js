const config = require('./knexfile').development
const database = require('knex')(config)

// List the books to be read
function getBooksToRead (db = database) {
    return db('toread').select()
}

function finishBook (db = database) {
    return db('toread)')
    .where ('id', id)
    .del()
}


// Exporting the functions to be called elsewhere
module.exports = {
    getBooksToRead
}