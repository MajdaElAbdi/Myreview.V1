const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    //category: { type: Schema.Types.ObjectId, ref: "Category" },
    category : String,
    //owner: { type: Schema.Types.ObjectId, ref: "Owner" },
    owner : String,//
    title: String,
    description: String,
    photo: String,
    price: Number,
    stockQuantity: Number,
    //reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }]
    reviews : String ,
    raiting : Number//id_publication
});

const Produit = mongoose.model('Produit', productSchema);

module.exports = {Produit};















//module.exports = Product;













