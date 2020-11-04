const fs = require('fs')
const Img = require('../models/img-model')
const Book = require('../models/book-model')

createImg = async (req, res) => {
  //update
  let imgId
  await Book.findOne({_id: req.params.id}, (err, book) => {
    imgId = book.imgId
  })
  if (imgId) {
    await Img.findOneAndDelete({_id: imgId}, (err, img) => {
      fs.unlinkSync(img.imgPath)
    })
  }

  try {
    const img = new Img({
      imgPath: ``,
      imgUrl: ``,
    })
    img.imgPath = req.file.path
    img.imgUrl = `http://localhost:3000/api/img/${img._id}`
    img
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: img._id,
          message: 'img create!',
        })
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: 'img not create!',
        })
      })
    await Book.findOne({_id: req.params.id}, (err, book) => {
      book.imgId = img._id
      book.save()
    })
  } catch (e) {
    return res.status(404).json({
      error: e,
      message: 'что-то не так',
    })
  }
}

updateImg = async (req, res) => {}

getImg = async (req, res) => {
  let path
  await Img.findOne({_id: req.params.id}, (err, res) => {
    path = res.imgPath
  })
  let file = fs.readFileSync(path, (err, result) => {
    res.end(result)
  })
  res.end(file)
}

deleteImg = async (req, res) => {
  await Img.findOne({_id: req.params.id}, (err, Imgs) => {
    if (err) {
      return res.status(400).json({success: false, error: err})
    }
    if (!Imgs.imgPath) {
      return res.status(400).json({success: false, error: 'img not found'})
    }
    fs.unlinkSync(Imgs.imgPath)
    return res.status(200).json({success: true, message: 'img delete'})
  }).catch((e) => console.log(e))
}

module.exports = {createImg, updateImg, getImg, deleteImg}
