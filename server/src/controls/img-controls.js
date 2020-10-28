const fs = require('fs')
const Book = require('../models/book-model')

createImg = async (req, res) => {
  await Book.findOne({_id: req.params.id}, (err, book) => {
    try {
      book.imgPath = req.file.path
      book.imgUrl = `http://localhost:3000/api/img/${book._id}`
      book
        .save()
        .then(() => {
          return res.status(200).json({
            success: true,
            id: book._id,
            message: 'img create!',
          })
        })
        .catch((error) => {
          return res.status(404).json({
            error,
            message: 'img not create!',
          })
        })
    } catch (e) {
      return res.status(404).json({
        error: e,
        message: 'что-то не так',
      })
    }
  })
}

updateImg = async (req, res) => {}

getImg = async (req, res) => {
  let path
  await Book.findOne({_id: req.params.id}, (err, res) => {
    path = res.imgPath
  })
  let file = fs.readFileSync(path, (err, result) => {
    res.end(result)
  })
  res.end(file)
}

deleteImg = async (req, res) => {
  await Book.findOne({_id: req.params.id}, (err, books) => {
    if (err) {
      return res.status(400).json({success: false, error: err})
    }
    if (!books.imgPath) {
      return res.status(400).json({success: false, error: 'img not found'})
    }
    fs.unlinkSync(books.imgPath)
    return res.status(200).json({success: true, message: 'img delete'})
  }).catch((e) => console.log(e))
}

module.exports = {createImg, updateImg, getImg, deleteImg}
