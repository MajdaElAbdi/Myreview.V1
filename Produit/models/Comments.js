const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({

    id_publication: { type: String, required: true },
    date_comment: { type: Date, required: true },
    contents: {type: String, required : true},
    images: {type : String, required :  false}
});

const Commentaire = mongoose.model('Commentaire', commentSchema);

module.exports = {Commentaire};















//module.exports = Product;













