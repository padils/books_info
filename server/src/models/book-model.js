const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema({
    name:{type : String, required: true},
    sheet:{type : String, required: true},
    rating:{type : String, required: true},
},{
    timestamps : false
})

module.exports = mongoose.model('book',Book);