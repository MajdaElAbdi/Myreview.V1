
export interface UserModel{
    // id: { type: String, required: true, unique: true },
    _id : string ;
    name :  string;
    email :  string;
    date :  Date;
    password:string;
    gender:string;
    address:string;
    userType:string
 
 }