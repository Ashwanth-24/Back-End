
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    contact:{type:Number}
});

module.exports = mongoose.model("Users" , UserSchema);  