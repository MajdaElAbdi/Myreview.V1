const express = require('express');
const mongoose = require('mongoose');
const connexion=require('../DAO/connexion').db;
const cors = require('cors');
 
 
const router = express.Router();
const app = express();
const bodyParser = require("body-parser")
  
// New app using express module
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
const port = process.env.PORT || 3007;
 
const productRouter=require('../routes/ProductRoute');
const userRouter=require('../routes/UserRoute');
 
app.use(cors());


app.use('/produits',productRouter.router);
app.use('/users',userRouter.router);


//connexion.once('',)
app.listen(port, ()=> { console.log(`Server is running on http://localhost:${port}`)});
 
