// Requiring the database functions file
const db = require ('./db')


module.exports = {
    listBooks,
    deleteBook,
    addBook,
    editBook
}

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
        console.info(`Book ${book.id}: ${book.book}`)
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

function addBook(id, bookInfo) {
    return db.addNewBook(id, bookInfo)
    .then(() => {
        confirmAddedBook()
        return null
    })
    .catch(err => {
        logError(err)
    })
    .finally(() => {
        db.close()
    })
}

function confirmAddedBook() {
    console.log('Happy Reading!')
}

function editBook(id, editedBook) {
    return db.editBookDetails(id, editedBook)
    .then(() => {
        return null
    })
    .catch(err => {
        logError(err)
    })
    .finally(() => {
        db.close()
    })
}

