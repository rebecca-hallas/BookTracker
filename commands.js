// Requiring the database functions file
const db = require ('./db')

// List all of the books to be read
function listBooks() {
    return db.getBooksToRead()
    .then(books => {
        printBooks(books)
        return null
    })
    .catch(err => {
        logError(err)
    })
    .finally(() => {
        db.close()
    })
}

function printBooks (books) {
    books.forEach(book => {
        console.info(`${book.id}: ${book.book}`)
    })
}

function logError(err) {
    console.error('Whoops! Something went wrong!', err.message)
}

// Delete a book
function deleteBook (id) {
    return db.finishBook(id)
    .then(toread => {
        confirmFinished()
        return null
    })
    .catch(err => {
        logError(err)
    })
    .finally(() => {
        db.close()
    })
}

function confirmFinished() {
    console.log('You have finished this book. It has been removed from your list of books to read.')
}

module.exports = {
    listBooks,
    deleteBook
}