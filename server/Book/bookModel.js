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

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Book = mongoose.model('books',schema);
module.exports = Book;