const express = require('express');
const cors = require('cors');

const   dotenv = require('dotenv');
        dotenv.config({ path: './config.env' });
const   DATABASE = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

const mongoose = require('mongoose');
const { Resource } = require('express-toolkit')
const Book = require('./model/bookModel.js');

const app = express();

app.use(cors());
app.use(express.json());

const BookResource = new Resource({
    name: 'books',
    model: Book
  });

app.get('/', (req,res)=>{res.send('HOME')});
BookResource.mount('/v1/books', app)


mongoose.connect(DATABASE)
    .then(console.log('CONNESSO AL DB'))
    .catch(err => console.log(err));

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});