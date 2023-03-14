import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { CommentModel } from '../Models/Comment';
import { ProduitModel } from '../Models/produit';
import { UserModel } from '../Models/user';
import { ProduitServiceService } from '../Services/produit-service.service';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
email!:any;
gender!:any;
name!:any;
dateOfBirth!:any;
user!:UserModel;
id!:any;
address!:any;
image!:any;
userType!:any;
age!:any;
ListProduits! : Observable<Array<ProduitModel>>;
  ErrorMessage: any;
  ListCommentaires!: Observable<Array<CommentModel>>;

  @ViewChild('commentTextarea') commentTextarea!: ElementRef;

 
  showCommentBox: boolean = false;
  comments!: CommentModel;
  showEmojiBox: any;
  emojis: any;
  showComments!: boolean;
  FormTextArea!: FormGroup;
  TextAreaContents!: string;

  TextAreacommentaire!: string;

  comment = new CommentModel();
constructor(private router: Router,private produitService: ProduitServiceService, public serviceProfile:ProfileService, private Fb: FormBuilder) { }
 

ngOnInit() : void{
  this.id=localStorage.getItem('id');
 
 
 
this.serviceProfile.getUser(this.id).subscribe({
  next: (data => {
    this.user = data;
    this.email=this.user.email;
  
    this.gender=this.user.gender;
    this.name=this.user.name;
    this.dateOfBirth=this.user.date;
    this.userType=this.user.userType;
    this.image=this.user.image;
    this.address=this.user.address;
    const bdate = new Date(this.dateOfBirth);
    const timeDiff = Math.abs(Date.now() - bdate.getTime() );
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    this.ListProduits=this.produitService.getByUserId(this.id).pipe(catchError(err=>{
      this.ErrorMessage=err.message;
      return throwError(err);  }));
  }), error: err => {
    console.log(err);
  }
});
 



 

this.FormTextArea = this.Fb.group({
  contents: this.Fb.control("")
});
if (this.ListCommentaires)
  alert("les commentaires sont là");
}

Supprimer(p: ProduitModel) { }

openCommentBox(id_product: string) {
this.showCommentBox = true;
this.showComments = true;
this.ChargerComments(id_product);
}

closeCommentBox() {
this.showCommentBox = false;
this.showComments = false;
this.commentTextarea.nativeElement.value = '';

}
 

redimensionnerTextarea() {}

toggleEmojiBox() {}

ajouterEmoji(emoji: any) {}

chargerPhoto() {}

async envoyerCommentaire(id_prod: string) {

this.comment.id_publication = id_prod;
this.comment.contents = this.TextAreacommentaire;
this.comment.date_comment = new Date();
this.comment.images = ""

//alert(this.comment.contents);
console.log(this.comment);
let comm: CommentModel;
//Ajoutez le commentaire à la base de données
this.produitService.SaveComment(this.comment).subscribe({
  next: (data => {
    comm = data;
    console.log(comm);
  }),
  error: err => {
    console.log(err);
  }
});
// Réinitialisez la zone de texte
this.TextAreacommentaire = '';

// Chargez tous les commentaires pour ce produit
this.ListCommentaires = await this.produitService.getAllcomments();

// Affichez tous les commentaires dans la zone de commentaires
this.showComments = true;

const commentList = document.getElementById(`commentList-${id_prod}`);
if (commentList) {
  commentList.scrollTop = commentList.scrollHeight;

}

this.closeCommentBox();


}

ChargerComments(id_product: string) {

this.ListCommentaires = this.produitService.getAllcomments().pipe(catchError(err => {
  this.ErrorMessage = err.message;
  return throwError(err);
}));

}

highlightStar(id_p: string, index: number) {
for (let i = 1; i <= 5; i++) {
  let star = document.getElementById('star-' + i + '-' + id_p);
  if (star) {
    if (i <= index) {
      star.classList.add("highlighted");
    } else {
      star.classList.remove("highlighted");
    }
  }
}
}

resetStars1() {
const stars = document.querySelectorAll(".rating-stars i");
stars.forEach(star => {
  star.classList.remove("highlighted");
});
}

resetStars(productId: string, rating: number) {
for (let i = 1; i <= 5; i++) {
  const stars = document.querySelectorAll(`#star-${i}-${productId}`);
  stars.forEach((star) => {
    if (i > rating) {
      star.classList.remove('highlighted');
      star.classList.remove('clicked');
    } else {
      star.classList.add('clicked');
    }
  });
}
}

rateProduct(p: ProduitModel, note: number) {
p.raiting = note;
}


update( ){}
voirPublications(){
  this.ListProduits=this.produitService.getByUserId(this.id).pipe(catchError(err=>{
    this.ErrorMessage=err.message;
    return throwError(err);

  }));

}
}
