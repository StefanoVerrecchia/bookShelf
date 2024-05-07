const { Controller } = require('express-toolkit');
const UserModel = require('./userModel.js');

const controller = new Controller({
    model : UserModel,
    name : 'users'
});

module.exports = controller;