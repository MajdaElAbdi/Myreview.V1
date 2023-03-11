const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
   // id: { type: String, required: true, unique: true },
   name : {
    type : String,
    required: true
},
email : {
    type: String,
    required: true,
    unique: true
},
gender : String,
status : String,
date:  {
    type: Date,
    required: 'date please'
   
},
password: {
    type: String,
    required:true
   
}

});

const User = mongoose.model('user8', userSchema);

module.exports = {User};

