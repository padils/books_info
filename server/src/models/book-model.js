const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Book = new Schema(
  {
    name: {type: String},
    sheet: {type: String},
    rating: {type: String},
    imgId: {type: String},
  },
  {
    timestamps: false,
  }
)

module.exports = mongoose.model('book', Book)
