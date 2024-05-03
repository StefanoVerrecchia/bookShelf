const { buildRouter } = require('express-toolkit')
const booksController = require('../controller/bookController.js');
module.exports = buildRouter({
    controller: booksController,
    options: {} // See expressJS router options
})