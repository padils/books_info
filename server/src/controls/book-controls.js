const fs = require('fs')

const Book = require('../models/book-model')

createBook = async (req, res) => {
  const body = req.body
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a book',
    })
  }

  const book = new Book(body)

  if (!book) {
    return res.status(400).json({success: false, error: err})
  }

  book
    .save()
    .then(() => {
      return res.status(200).json({
        success: true,
        id: book._id,
        item: book,
        message: 'book created!',
      })
    })
    .catch((error) => {
      return req.status(400).json({
        success: false,
        error,
        message: 'Book not created!',
      })
    })
}

getBook = async (req, res) => {
  await Book.find({}, (err, books) => {
    if (err) {
      return res.status(400).json({success: false, error: err})
    }
    if (!books.length) {
      return res.status(200).json({success: true, message: 'no data'})
    }

    return res.status(200).json({success: true, data: books})
  }).catch((e) => console.log('no data'))
}

deleteBook = async (req, res) => {
  await Book.findOne({_id: req.params.id}, (err, res) => {
    if (res.imgPath) {
      fs.unlinkSync(res.imgPath)
    }
  })

  await Book.findOneAndDelete({_id: req.params.id}, (err, books) => {
    if (err) {
      return res.status(400).json({success: false, error: err})
    }
    if (!books) {
      return res.status(400).json({success: false, error: 'Books not found'})
    }
    return res.status(200).json({success: true, data: books})
  }).catch((e) => console.log(e))
}

updateBook = async (req, res) => {
  const body = req.body.data

  if (!body) {
    return res.status(400).json({success: false, error: 'not Data'})
  }

  Book.findOne({_id: req.params.id}, (err, book) => {
    if (err) {
      return res.status(400).json({success: false, error: err})
    }

    book.name = body.name
    book.time = body.time
    book.rating = body.rating

    book
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: book._id,
          message: 'book updated!',
        })
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: 'book not updated!',
        })
      })
  })
}

module.exports = {createBook, getBook, deleteBook, updateBook}
