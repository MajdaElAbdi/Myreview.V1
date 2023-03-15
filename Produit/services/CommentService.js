const produit = require("../models/produits").Produit;

const commentaire = require('../models/Comments').Commentaire;




const AddComment = async (comment) => {
    try {
        const newComment = new commentaire(comment);
        await newComment.save();
        console.log("commentaire suvegardé avec succès");
        return newComment;
    } catch (error) {
        console.error(error);
    }
};


const getComment = async (id) => {

    try {

        const comment = await commentaire.findById(id);
        return comment;
    } catch (error) {
        throw new Error(`Error retrieving comment with id ${id}: ${error}`);
    }
};



const getAllComments = async () => {
    try {
        const comment = await commentaire.find();
        return comment;
    } catch (error) {
        throw new Error(`Error retrieving all comments: ${error}`);
    }
};


async function findAllCommentByIdProduct(id_pub) {
    try { const comments = await commentaire.find({ id_publication: id_pub });
        console.log(comments);
    return comments;
    } catch (error) {
        throw new Error(`Error deleting comment with id ${id_pub}: ${error}`);
    }
}




const deleteComment = async (id) => {
    try {
        const comment = await commentaire.findByIdAndRemove(id);
        return comment;
    } catch (error) {
        throw new Error(`Error deleting comment with id ${id}: ${error}`);
    }
};

const updateComment = async (id, update) => {
    try {
        const comment = await commentaire.findByIdAndUpdate(id, update, { new: true });
        console.log(comment);
        return comment;
    } catch (error) {
        throw new Error(`Error updating comment with id ${id}: ${error}`);
    }
};



module.exports = {
    AddComment,
    getComment,
    getAllComments,
    deleteComment,
    updateComment,
    findAllCommentByIdProduct
};