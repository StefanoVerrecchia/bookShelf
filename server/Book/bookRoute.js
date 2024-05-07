const { buildRouter } = require('express-toolkit')
const booksController = require('./bookController.js');
module.exports = buildRouter({
    controller: booksController,
    options: {} // See expressJS router options
})