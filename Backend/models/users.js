const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    Contact:Number,
    age: Number,
    gender:String,
    skill:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("User",usersSchema);
