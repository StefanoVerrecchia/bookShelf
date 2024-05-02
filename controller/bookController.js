const Book = require('../model/bookModel.js');
const { Controller } = require('express-toolkit')

const controller = new Controller({
    model : Book,
    name : 'books'
});
module.exports = controller;
