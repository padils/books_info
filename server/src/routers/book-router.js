const express = require('express');

const BookControls = require('../controls/book-controls');

const router = express.Router();


router.get('/books',BookControls.getBook)
router.post('/book',BookControls.createBook)
router.delete('/book/:id',BookControls.deleteBook)
router.put('/book/:id',BookControls.updateBook)

module.exports =router