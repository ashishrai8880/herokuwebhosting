const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        required : true , 
        type : String
    },
    email : {
        required : true ,
        type : String ,
        unique : true 
    },
    password : {
        required : true , 
        type : String 
    }

})

// Creating collection to the database
const User = mongoose.model("User" , userSchema);

module.exports = User ;