import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../Models/user';
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
constructor(private router: Router, public serviceProfile:ProfileService, private Fb: FormBuilder) { }

ngOnInit() : void{
  this.id=localStorage.getItem('id');
<<<<<<< HEAD
/*this.email=localStorage.getItem('email');
this.name=localStorage.getItem('name');
this.dateOfBirth=localStorage.getItem('dateOfBirth');
alert(this.dateOfBirth);
this.gender=localStorage.getItem('gender');*/

=======
 
 
 
>>>>>>> bf593e92dcc873b35ee5967ef23a0cfe9e080ebf
>>>>>>> 08d4d755508c1388a4404ecec1cf007949161b1e
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
<<<<<<< HEAD

=======
    this.ListProduits=this.produitService.getByUserId(this.id).pipe(catchError(err=>{
      this.ErrorMessage=err.message;
      return throwError(err);  }));
>>>>>>> 08d4d755508c1388a4404ecec1cf007949161b1e
  }), error: err => {
    console.log(err);
  }
});
console.log(this.user.address);

}
<<<<<<< HEAD
=======


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
>>>>>>> 08d4d755508c1388a4404ecec1cf007949161b1e


}
