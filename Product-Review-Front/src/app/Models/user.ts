
export interface UserModel{
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
 }