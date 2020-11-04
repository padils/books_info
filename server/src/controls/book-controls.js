const fs = require('fs')

const Book = require('../models/book-model')
const Img = require('../models/img-model')

createBook = async (req, res) => {
  const body = req.body
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a book',
    })
  }
  const book = new Book(body)

  if (!book.name) {
    return res.status(400).json({success: false, message: ' название'})
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
      return res.status(400).json({
        success: false,
        error,
        message: 'Book not created!',
      })
    })
}

getBook = async (req, res) => {
  await Book.find({}, (err, books) => {
    let data = books.map((i) => ({
      name: i.name,
      rating: i.rating,
      sheet: i.sheet,
      imgUrl: i.imgId ? `http://localhost:3000/api/img/${i.imgId}` : ``,
      _id: i._id,
    }))
    if (err) {
      return res.status(400).json({success: false, error: err})
    }
    if (!books) {
      return res.status(400).json({success: false, message: 'no data'})
    }

    return res.status(200).json({success: true, data})
  }).catch((e) => console.log('no data'))
}

deleteBook = async (req, res) => {
  let imgId
  await Book.findOneAndDelete({_id: req.params.id}, (err, books) => {
    if (err) {
      return res.status(400).json({success: false, error: err})
    }
    if (!books) {
      return res.status(400).json({success: false, error: 'Books not found'})
    }
    imgId = books.imgId
  }).catch((e) => console.log(e))
  if (imgId) {
    await Img.findByIdAndDelete({_id: imgId}, (err, res) => {
      fs.unlinkSync(res.imgPath)
    })
  }
  res.status(200).json({success: true, message: `delete book`})
}

updateBook = async (req, res) => {
  const body = req.body

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
