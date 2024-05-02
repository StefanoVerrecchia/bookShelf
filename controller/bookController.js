const Book = require('../model/bookModel.js');
const { Controller } = require('express-toolkit')

/* const controller = new Controller({
    model : Book,
    name : 'books'
}); */


exports.getAllBook = async (req, res) => {
    try {
        const data = await Book.find();

        console.log('DATA');
        console.log(data);

        res.json({ status: 'Success', data: data })
    } catch (error) {
        console.log(error);
        res.json({ status: 'Fail', data: error })

    }
};
exports.getSingleBook = async (req, res) => {
    try {
        console.log(req.params.id);
        const data = await Book.findById(req.params.id);


        res.json({ status: 'Success', data: data })
    } catch (error) {
        console.log(error);
        res.json({ status: 'Fail', data: error })

    }

};
exports.createBook = async (req, res) => {
    try {
        const data = await Book.create(req.body);
        res.json({ status: 'Success', data: data })

    } catch (error) {
        console.log(error);
        res.json({ status: 'Fail', data: error })

    }

};
exports.updateBook = async (req, res) => {
    try {
        await Book.findByIdAndUpdate(req.params.id,req.body);
        res.json({ status: 'Success'})
    } catch (error) {
        console.log(error);
        res.json({ status: 'Fail', data: error })
    }

};
exports.deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id,req.body);
        res.json({ status: 'Success'})
    } catch (error) {
        console.log(error);
        res.json({ status: 'Fail', data: error })

    }

};
exports.deleteAllBook = async (req, res) => {
    try {
        await Book.deleteMany({});
        res.json({ status: 'Success'})
    } catch (error) {
        console.log(error);
        res.json({ status: 'Fail', data: error })

    }

};