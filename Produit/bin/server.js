const express = require('express');
const mongoose = require('mongoose');
const connexion=require('../DAO/connexion').db;
const cors = require('cors');



const  saveProduct = require('../services/ProductService').saveProduct;
//const  saveComment = require('../services/CommentService').AddComment;
const staticProducts = require('../public/ProduitsStatic');
//const staticComments = require('../public/CommentairesStatic');
const Product = require('../models/produits').Produit;

const router = express.Router();
const app = express();
const bodyParser = require("body-parser")
const commentRouter=require('../routes/CommentRoute').router;
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
app.use('/commentaires',commentRouter);


connexion.once('open', async () => {
    console.log('Connected to MongoDB');
    // Effacer les données existantes avant d'insérer de nouvelles données
    //await connexion.dropDatabase();

    // Enregistrer les produits statiques
   /* staticProducts.forEach(async (Data) => {
         const product = new Product(Data);
         await saveProduct(product);
     });*/

});

//connexion.once('',)
app.listen(port, ()=> { console.log(`Server is running on http://localhost:${port}`)});
 
