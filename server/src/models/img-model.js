const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Img = new Schema(
  {
    imgUrl: {type: String},
    imgPath: {type: String},
    id: {type: String},
  },
  {
    timestamps: false,
  }
)

module.exports = mongoose.model('img', Img)
