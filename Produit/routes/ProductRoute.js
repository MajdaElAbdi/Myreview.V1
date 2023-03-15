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


router.get('/user/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const product = await ProductsFetcher.getProductByOwner(req.params.id);
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
        ProductsFetcher.saveProduct(req.body)
            .then(newProduct => {
                res.status(201).json(newProduct);
            });
    }catch (error){
        res.status(500).send(error.message);
    }
});


router.put('/:id/update', async  (req, res)=>{
    try{
        const c = await ProductsFetcher.updateProduct(req.params.id, req.body);
        res.json(c);
    }catch (error){
        res.status(500).send(error.message);
    }
});

module.exports = {router};
