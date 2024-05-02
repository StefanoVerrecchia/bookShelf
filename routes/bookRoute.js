const express = require('express');
const router = express.Router();

const controller = require('../controller/bookController.js');

//GET
router.route('/').
    get(controller.getAllBook);
router.route('/:id').
    get(controller.getSingleBook);

//POST
router.route('/').
    post(controller.createBook);

//PUT
router.route('/:id').
    put(controller.updateBook);

//DELETE
router.route('/:id').
    delete(controller.deleteBook);
router.route('/').
    delete(controller.deleteAllBook);

module.exports = router;