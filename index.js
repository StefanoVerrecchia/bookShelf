const express = require('express');
const mongoose = require('mongoose');
const { Resource } = require('express-toolkit')

const Book = require('./model/bookModel.js');

const app = express();


app.use(express.json());

const BookResource = new Resource({
    name: 'books',
    model: Book
  });

app.get('/', (req,res)=>{res.send('HOME')});
BookResource.mount('/v1/books', app)


mongoose.connect('mongodb+srv://stefanoverrecchia96:bTm9rpUH0Fyg5z18@cluster0.yhq40ar.mongodb.net/BookShelf')
    .then(console.log('CONNESSO AL DB'))
    .catch(err => console.log(err));

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});