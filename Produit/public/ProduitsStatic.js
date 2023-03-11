const Produit = require('../models/produits').Produit;


const product1 = new Produit({
    //id: 1,
    nom: 'Product 1',
    prix: 19.99,
    id_user: Math.floor(0+Math.random()*1000),
    image : "./images/maitre-Saitama-respect.JPG"
});

const product2 = new Produit({
   // id: 2,
    nom: 'Product 2',
    prix: 19.99,
    id_user: Math.floor(0+Math.random()*1000),
    image : "https://imgs.search.brave.com/r-ew_JjL_hQQf6cQgeYQhokaDEgnNR69pOvTWlfI_74/rs:fit:1024:768:1/g:ce/aHR0cHM6Ly9nZWVr/ZW1lbnQtdm90cmUu/ZnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDgvT25lLVB1/bmNoLU1hbi1pbHMt/ZGVjb3V2cmVudC1s/YS1tYWlzb24tZGUt/U2FpdGFtYS1lbi12/cmFpLTEwMjR4NzY4/LmpwZw"
});
const product3 = new Produit({
   // id: 3,
    nom: 'Product 3',
    prix: 19.99,
    id_user: Math.floor(0+Math.random()*1000)
});



module.exports =[
    product1,
    product2,
    product3
];