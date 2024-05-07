const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique : true
    },
    name : {
        type: String,
        required: true,
    },
    passwordHash : {
        type: String,
        required: true,
    },
    books: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'books'
        }
      ],
});
const User = mongoose.model('User', userSchema)

module.exports = User