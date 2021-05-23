# Library

## About

This is a command-line tool designed for bookworms. The tool allows users to keep track of the books they want to read. 

This tool utilises basic CRUD functionality (Create, Read, Update, Delete).

## Set Up

```
npm i knex sqlite 3
chmod +x Please
npx knex migrate:latest
npx knex seed:run
```

## Requests

This programme begins running in the 'Please' file (named so that when a request is made to the terminal, it is made politely!
All requests should begin with:

```
./Please
```

## List Books (Read)

To get a list of the books you want to read, make the following request:

```
./Please list
```

Example:

![listbooks](https://user-images.githubusercontent.com/77651862/119255894-2fa97500-bc12-11eb-8160-91da3f7855f4.png)


## Finish a Book (Delete)

If you've finished a book and want to remove it from your list, use the following syntax in your request:

```
./Please remove {book number}
```

For example, if you wanted to remove Book number 3 from your list:
![remove](https://user-images.githubusercontent.com/77651862/119256064-e0177900-bc12-11eb-9be7-553b142b8768.png)

## Edit a Book's Details (Update)

Accidentally made a typo? Did you mistakenly name David Attenborough's book 'A Life on Mars', instead of 'A Life on Our Planet'?
![typo](https://user-images.githubusercontent.com/77651862/119256221-c591cf80-bc13-11eb-83f9-1e9dcd7e983e.png)

No worries, use the following syntax in your request to edit the book details:

```
./Please edit {book number} {book title} {book author}
```

Please note that if the book title and/or author are more than one word, you will need to wrap them in quotes. For example:
![edit](https://user-images.githubusercontent.com/77651862/119256246-e9551580-bc13-11eb-8087-09ea1482c587.png)

## Add a New Book (Create)

Want to add a new book to your list? Use the following syntax in your request:

```
./Please add {book number} {book title} {book author}
```

Example:
![add](https://user-images.githubusercontent.com/77651862/119256276-0984d480-bc14-11eb-9634-3c2c9e642b7d.png)

