const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    author: {
        type: String,
        required: true,

    },
    publicationDate: {
        type: String,
        required: true,

    }
});

const Book = mongoose.model('books',schema);
module.exports = Book;