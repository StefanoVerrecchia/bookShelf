const User = require('./userModel.js');
const { Resource } = require('express-toolkit')
const bcrypt = require('bcrypt')
const UserResource = new Resource({
    name: 'User',
    model: User
});


UserResource.registerHook('pre:create', async (req, res, next) => {
    console.log('body --> ', req.body);
    req.body.passwordHash = await bcrypt.hash(req.body.passwordHash, 10);
    next();
});
module.exports = UserResource;