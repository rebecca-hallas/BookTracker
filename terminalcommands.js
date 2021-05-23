// Requiring the database functions file
const db = require ('./db')

module.exports = {
    listBooks,
    remove,
    add,
    edit
}

function listBooks() {
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

function listBookInfo (books) {
    books.forEach(book => {
        console.info(`Book ${book.id}: '${book.title}' by ${book.author}`)
    })
}

function logError(err) {
    console.error('Whoops! Something went wrong!', err.message)
}

function remove (id) {
    return db.finishBook(id)
    .then(() => {
        listBooks()
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
        listBooks()
        return null
    })
    .catch(err => {
        logError(err)
    })
    .finally(() => {
        db.end()
    })
}

function edit(id, title, author) {
    return db.editBookDetails(id, title, author)
    .then(() => {
        return null
    })
    .catch(err => {
        logError(err)
    })
    .finally(() => {
        db.end()
    })
}

