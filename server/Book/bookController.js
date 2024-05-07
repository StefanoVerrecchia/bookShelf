const Book = require('./bookModel.js');
const { Controller } = require('express-toolkit')

const controller = new Controller({
    model : Book,
    name : 'books'
});
module.exports = controller;
/* 
exports.getAllBook = async (req, res) => {
    try {
        const data = await Book.find();
        if (req.query.title) {
            const title = req.query.title.replace('[', '').replace(']', '');
            console.log(title);
            const regex = new RegExp(title, 'i');
            const data = await Book.find({ title: regex }).exec();
            res.json({ status: 'Success', data: data })
            return;
        }

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
        await Book.findByIdAndUpdate(req.params.id, req.body);
        res.json({ status: 'Success' })
    } catch (error) {
        console.log(error);
        res.json({ status: 'Fail', data: error })
    }

};
exports.deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id, req.body);
        res.json({ status: 'Success' })
    } catch (error) {
        console.log(error);
        res.json({ status: 'Fail', data: error })

    }

};
exports.deleteAllBook = async (req, res) => {
    try {
        await Book.deleteMany({});
        res.json({ status: 'Success' })
    } catch (error) {
        console.log(error);
        res.json({ status: 'Fail', data: error })

    }

}; */