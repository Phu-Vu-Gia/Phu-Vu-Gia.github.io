/**
* RMIT University Vietnam
* Course: COSC3060 Web Programming Studio
* Semester: 2025B
* Assessment: Fullstack in-class Lab Test
* Author: Vu Gia Phu
* ID: s4132254
* Acknowledgement: Acknowledge the resources that you use here.
*/

// Declare packages used for this server file
const express = require('express');
require('dotenv').config();
require('./db/mongoose');
const path = require('path');

// Setup server
const app = express();

// Serve static files
app.use(express.static("public"));

// Parse form data
app.use(express.urlencoded({ extended: false }));

// View Templating
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views", "partials"));

// Import Book model
const { Book } = require('./db/bookModel');

/** Routes */
// Homepage endpoint that when accessed will produce a random reading list for a week
app.get('/', async function (req, res) {
    try {
        const books = await Book.find({});
        
        // function to get one random book from a filtered list
        const getRandomByCategory = (category) => {
            const filtered = books.filter(book => book.category === category);
            return filtered.length > 0 ? filtered[Math.floor(Math.random() * filtered.length)] : null;
        }

        // select one random book to display for each category
        const displayedBooks = [
            getRandomByCategory('TEXTBOOK'),
            getRandomByCategory('PHILOSOPHY'),
            getRandomByCategory('NOVEL')
        ].filter(book => book !== null);

        res.render('list', { books: displayedBooks });
    } catch (err) {
        console.error(err);
        res.status(500).render('list', { books: [] });;
    }
}) 

// POST endpoint - Refresh to get a random reading books
app.post('/', async function (req, res) {
    try {
        const books = await Book.find({});
        
        // function to get one random book from a filtered list
        const getRandomByCategory = (category) => {
            const filtered = books.filter(book => book.category === category);
            return filtered.length > 0 ? filtered[Math.floor(Math.random() * filtered.length)] : null;
        }

        // select one random book to display for each category
        const displayedBooks = [
            getRandomByCategory('TEXTBOOK'),
            getRandomByCategory('PHILOSOPHY'),
            getRandomByCategory('NOVEL')
        ].filter(book => book !== null);

        res.render('list', { books: displayedBooks });
    } catch (err) {
        console.error(err);
        res.status(500).render('list', { books: [] });;
    }
})

// Book endpoint that when accessed will show detail information about a book and related books found in the database
app.get('/book/:title', async function (req, res) {
    try {
        const bookTitle = req.params.title;
        const allBooks = await Book.find({});
        const displayedBook = allBooks.find(b => b.title === bookTitle);
        
        res.render('book', { displayedBook, books: allBooks });
    } catch (err) {
        console.error(err);
        res.render('book', { displayedBook: null, books: [] });
    }
});

// Port number
const port = process.env.PORT;

// Start the server
app.listen(port, () => {
    console.log(`Server started and is running on: http://localhost:${port}`);
});