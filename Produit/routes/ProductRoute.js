const express = require('express');
const router = express.Router();
const  ProductsFetcher = require('../services/ProductService');



router.get('/', async (req, res) => {
    try {
        const product = await ProductsFetcher.getAllProducts();
        res.json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const product = await ProductsFetcher.getProduct(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


router.delete('/:id', async  (req, res)=>{
    try{
        const product = await ProductsFetcher.deleteProduct(req.params.id);
        res.json(product);
    }catch (error){
        res.status(500).send(error.message);
    }
});


router.post('/', async  (req, res)=>{
    try{
        const content=req.body;
        console.log(content);
        ProductsFetcher.saveProduct(content)
            .then(newProduit => {
                res.status(201).json(newProduit);

            });
    }catch (error){
        console.log(error.message);
        res.status(500).send(error.message);
    }
});

module.exports = {router};
