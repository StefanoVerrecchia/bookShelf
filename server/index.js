const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserResource = require('./User/userResource.js');
const BookResource = require('./Book/bookResource.js');
const loginRouter = require('./User/login.js');

const dotenv = require('dotenv');
    dotenv.config({ path: './config.env' });
const DATABASE = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
const app = express();

app.use(cors());
app.use(express.json());
app.use('/v1/login', loginRouter);
app.get('/', (req, res) => { res.send('HOME') });

BookResource.mount('/v1/books', app)
UserResource.mount('/v1/user', app)



//DB CONNECTION
mongoose.connect(DATABASE)
    .then(console.log('CONNESSO AL DB'))
    .catch(err => console.log(err));

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});