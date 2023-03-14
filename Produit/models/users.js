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
adress : String,
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
   
}

});

const User = mongoose.model('userrrr', userSchema);

module.exports = {User};

