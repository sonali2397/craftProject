const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:false,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    message:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('Contact',contactSchema);