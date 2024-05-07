const { buildRouter } = require('express-toolkit');

const userController = require('./userController.js');
module.exports = buildRouter({
    controller: userController,
    options: {} // See expressJS router options
})