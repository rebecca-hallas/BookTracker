const config = require('./knexfile').development
const database = require('knex')(config)

// List the books to be read
function getBooksToRead (db = database) {
    return db('toread').select()
}

function close (db = database) {
    db.destroy()
  }

function finishBook (id, db = database) {
    return db('toread')
    .where ('id', id)
    .del()
}

function addNewBook (id, bookInfo, db = database) {
    return db('toread')
    .insert({ id: id, book: bookInfo, done: 0 })
    .into('toread')
    .then(() => {
        console.log('You have added:', bookInfo)
    })
}

function editBookDetails (id, editedBook, db = database) {
    return db('toread')
    .where({ id: id})
    .update({ book: editedBook })
    .then(() => {
        console.log('Your new book details are:', 'Book', id + ':', editedBook)
    })
}

// Exporting the functions to be called elsewhere
module.exports = {
    getBooksToRead,
    close,
    finishBook,
    addNewBook,
    editBookDetails
}