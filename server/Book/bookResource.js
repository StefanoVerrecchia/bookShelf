
const { Resource } = require('express-toolkit')
const Book = require('./bookModel.js');
const User = require('../User/userModel.js');
const jwt = require('jsonwebtoken');

const BookResource = new Resource({
    name: 'books',
    model: Book
});

BookResource.registerHook('pre:create', async (req, res, next) => {
    try{
        const token = req.get('authorization');
        const decodedToken = jwt.verify(token, process.env.SECRET);
        if (!decodedToken.id) {
            return response.status(401).json({ error: 'token invalid' })
        }
        const user = await User.findById(decodedToken.id)
        req.body.user = user._id;
        next();
    }catch(error){
        console.log('error ---> ' , error);
        return res.status(401).json({ error: error })
    }
});
module.exports = BookResource;