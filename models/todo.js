const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {type: String,required:true}
}, {timesstamps:true});
module.exports =mongoose.model('TodoSchema');