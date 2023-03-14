const Produit = require('../models/produits').Produit;


const product1 = new Produit({
    category : "vetement",
    owner: "user1",
    title : "Pull swift",
    description : " un short de tottenham",
    photo : "https://imgs.search.brave.com/r-ew_JjL_hQQf6cQgeYQhokaDEgnNR69pOvTWlfI_74/rs:fit:1024:768:1/g:ce/aHR0cHM6Ly9nZWVr/ZW1lbnQtdm90cmUu/ZnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDgvT25lLVB1/bmNoLU1hbi1pbHMt/ZGVjb3V2cmVudC1s/YS1tYWlzb24tZGUt/U2FpdGFtYS1lbi12/cmFpLTEwMjR4NzY4/LmpwZw",
    price: 19.99,
    stockQuantity:7,
    reviews :  Math.floor(0+Math.random()*1000)
});


const product2 = new Produit({
    category : "bijoux",
    owner: "user2",
    title : "Collier or",
    description : "Collier en or 24 k",
    photo : "https://imgs.search.brave.com/r-ew_JjL_hQQf6cQgeYQhokaDEgnNR69pOvTWlfI_74/rs:fit:1024:768:1/g:ce/aHR0cHM6Ly9nZWVr/ZW1lbnQtdm90cmUu/ZnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDgvT25lLVB1/bmNoLU1hbi1pbHMt/ZGVjb3V2cmVudC1s/YS1tYWlzb24tZGUt/U2FpdGFtYS1lbi12/cmFpLTEwMjR4NzY4/LmpwZw",
    price: 19.99,
    stockQuantity:7,
    reviews :  Math.floor(0+Math.random()*1000)
  });


const product3 = new Produit({
    category : "voitures",
    owner: "user1",
    title : "lamboo",
    description : " Explose la puissance",
    photo : "https://imgs.search.brave.com/r-ew_JjL_hQQf6cQgeYQhokaDEgnNR69pOvTWlfI_74/rs:fit:1024:768:1/g:ce/aHR0cHM6Ly9nZWVr/ZW1lbnQtdm90cmUu/ZnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDgvT25lLVB1/bmNoLU1hbi1pbHMt/ZGVjb3V2cmVudC1s/YS1tYWlzb24tZGUt/U2FpdGFtYS1lbi12/cmFpLTEwMjR4NzY4/LmpwZw",
    price: 19.99,
    stockQuantity:7,
    reviews :  Math.floor(0+Math.random()*1000)
});


const product4 = new Produit({
    category : "vetement",
    owner: "user6",
    title : "Jean Slim",
    description : " chemise d'été",
    photo : "https://imgs.search.brave.com/r-ew_JjL_hQQf6cQgeYQhokaDEgnNR69pOvTWlfI_74/rs:fit:1024:768:1/g:ce/aHR0cHM6Ly9nZWVr/ZW1lbnQtdm90cmUu/ZnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDgvT25lLVB1/bmNoLU1hbi1pbHMt/ZGVjb3V2cmVudC1s/YS1tYWlzb24tZGUt/U2FpdGFtYS1lbi12/cmFpLTEwMjR4NzY4/LmpwZw",
    price: 19.99,
    stockQuantity:7,
    reviews :  Math.floor(0+Math.random()*1000)
});


const product5 = new Produit({
    category : "cuisine",
    owner: "user7",
    title : "gazinière",
    description : " gazinière four",
    photo : "https://imgs.search.brave.com/r-ew_JjL_hQQf6cQgeYQhokaDEgnNR69pOvTWlfI_74/rs:fit:1024:768:1/g:ce/aHR0cHM6Ly9nZWVr/ZW1lbnQtdm90cmUu/ZnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDgvT25lLVB1/bmNoLU1hbi1pbHMt/ZGVjb3V2cmVudC1s/YS1tYWlzb24tZGUt/U2FpdGFtYS1lbi12/cmFpLTEwMjR4NzY4/LmpwZw",
    price: 19.99,
    stockQuantity:7,
    reviews :  Math.floor(0+Math.random()*1000)
});



module.exports =[
    product1,
    product2,
    product3,
    product4,
    product5

];