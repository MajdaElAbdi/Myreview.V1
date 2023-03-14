const mongoose = require("mongoose");
//const {Types} = require("mongoose");
const produit = require('../models/produits').Produit;




const saveProduct = async (product) => {
    try {
        const newProduct = new produit(product);
        await newProduct.save();
        console.log("Product saved successfully!");
        return newProduct;
    } catch (error) {
        console.error(error);
    }
};


const getProduct = async (id) => {

    try {

        const product = await produit.findById(id);
        return product;
    } catch (error) {
        throw new Error(`Error retrieving product with id ${id}: ${error}`);
    }
};



const getAllProducts = async () => {
    try {
        const products = await produit.find({});
        return products;
    } catch (error) {
        throw new Error(`Error retrieving all products: ${error}`);
    }
};

const deleteProduct = async (id) => {
    try {
        const product = await produit.findByIdAndRemove(id);
        return product;
    } catch (error) {
        throw new Error(`Error deleting product with id ${id}: ${error}`);
    }
};

const updateProduct = async (id, update) => {
    try {
        const product = await produit.findByIdAndUpdate(id, update, { new: true });
        return product;
    } catch (error) {
        throw new Error(`Error updating product with id ${id}: ${error}`);
    }
};



module.exports = {
    saveProduct,
    getProduct,
    getAllProducts,
    deleteProduct,
    updateProduct

};