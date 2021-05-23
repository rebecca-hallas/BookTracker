const config = require('./knexfile').development
const database = require('knex')(config)

function getBooks (db = database) {
    return db('library').select()
}

function end (db = database) {
    db.destroy()
}

function finishBook (id, db = database) {
    return db('library')
    .select()
    .where ('id', id)
    .del()
    .then(() => {
        console.log(`You have finished Book ${id}. It has been removed from your library. Your list of books to read is now:`)
    })
}

function addNewBook (id, title, author, db = database) {
    return db('library')
    .insert({ id: id, title: title, author: author })
    .into('library')
    .then(() => {
        console.log(`You have added Book ${id}: ${title} by ${author}. Your list of books to read is now:`)
    })
}

function editBookDetails (id, title, author, db = database) {
    return db('library')
    .where({ id: id})
    .update({ title: title, author: author })
    .then(() => {
        console.log(`You have updated Book ${id}: '${title}' by ${author}. Your list of books to read is now:`)
    })
}

// Exporting the functions to be called elsewhere
module.exports = {
    getBooks,
    end,
    finishBook,
    addNewBook,
    editBookDetails
}