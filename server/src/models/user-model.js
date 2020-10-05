const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    email:{type : String, required: true,unique:true},
    password:{type : String, required: true},
    login:{type : Boolean, required: true},
    
},{
    timestamps : false
})

module.exports = mongoose.model('user',User);