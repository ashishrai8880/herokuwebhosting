const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/News').then(()=>{
    console.log("Connected to the database successfully");
}).catch((error)=>{
    console.log("Not connected to the database due to : "+error);
})