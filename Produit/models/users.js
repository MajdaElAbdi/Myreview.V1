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
userType: {
    type: String,
    enum : ['user','owner','admin'],
    default: 'user'
  },
date:  {
    type: Date,
    required: 'date please'
   //date de naissance
},
password: {
    type: String,
    required:true
   
},
address:String,
image:String

});

const User = mongoose.model('util', userSchema);

module.exports = {User};

