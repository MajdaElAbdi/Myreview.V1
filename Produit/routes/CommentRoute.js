const express = require('express');
const router = express.Router();
const CommentaireService=require('../services/CommentService')




//Get ALL

router.get('/', async (req, res) => {
    try {
        const comment = await CommentaireService.getAllComments();
        res.json(comment);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/commentsbyProd/:id_prod', async (req, res) => {
    try {
        const idp=req.params.id_publication;
        const ListComments = await CommentaireService.findAllCommentByIdProduct(idp);
        res.json(ListComments);
    } catch (error) {
        res.status(500).send(error.message);
    }
});




router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const comment = await CommentaireService.getComment(req.params.id);
        res.json(comment);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


router.delete('/:id/delete', async  (req, res)=>{
    try{
        const comment = await CommentaireService.deleteComment(req.params.id);
        res.json(comment);
    }catch (error){
        res.status(500).send(error.message);
    }
});



router.put('/:id/update', async  (req, res)=>{
    try{
        const c = await CommentaireService.updateComment(req.params.id, req.body);
        res.json(c);
    }catch (error){
        res.status(500).send(error.message);
    }
});


router.post('/', async  (req, res)=>{
    try{
         CommentaireService.AddComment(req.body)
            .then(newComment => {
               return res.status(201).json(newComment);
            });
    }catch (error){
        res.status(500).send(error.message);
    }
});

module.exports = {router};
