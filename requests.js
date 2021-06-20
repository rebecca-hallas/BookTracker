// Requiring the database functions file
const db = require ('./db')

module.exports = {
    list,
    remove,
    add,
    edit
}

function list() {
    return db.getBooks()
    .then(books => {
        listBookInfo(books)
        return null
    })
    .catch(err => {
        logError(err)
    })
    .finally(() => {
        db.end()
    })
}

function logError(err) {
    console.error('Uh oh, something has gone wrong. Please read the error message:', err.message)
}

function remove (id) {
    return db.finishBook(id)
    .then(() => {
        list()
        return null
    })
    .catch(err => {
        logError(err)
    })
    .finally(() => {
        db.end()
    })
}

function add (id, title, author) {
    return db.addNewBook(id, title, author)
    .then(() => {
        list()
        return null
    })
    .catch(err => {
        logError(err)
    })
    .finally(() => {
        db.end()
    })
}

function edit (id, title, author) {
    return db.editBookDetails(id, title, author)
    .then(() => {
        list()
        return null
    })
    .catch(err => {
        logError(err)
    })
    .finally(() => {
        db.end()
    })
}

