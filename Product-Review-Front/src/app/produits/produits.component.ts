import {Component, ElementRef, ViewChild} from '@angular/core';
import {ProduitModel} from "../Models/produit";
import {catchError, Observable, throwError} from "rxjs";
import {ProduitServiceService} from "../Services/produit-service.service";
import {HttpClient} from "@angular/common/http";
import {CommentModel} from "../Models/Comment";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Comment} from "@angular/compiler";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})

export class ProduitsComponent {

ListProduits! : Observable<Array<ProduitModel>>;
ListCommentaires! : Observable<Array<CommentModel>>;

  @ViewChild('commentTextarea') commentTextarea!: ElementRef;

ErrorMessage! : string;
  showCommentBox : boolean = false;
  comments!:CommentModel;
  showEmojiBox: any;
  emojis: any;
  showComments!: boolean;
FormTextArea!: FormGroup;
TextAreaContents!:string;

  TextAreacommentaire!: string;

  comment =new CommentModel();

  constructor(private produitService: ProduitServiceService,private  Fb:FormBuilder) {

  }

  ngOnInit() : void{


    this.ListProduits=this.produitService.getAllproducts().pipe(catchError(err=>{
      this.ErrorMessage=err.message;
      return throwError(err);

    }));

    /*this.produitService.getById("640eff778f4fd0fb94dc0b73").subscribe({
      next: (data => {
        this.product = data;
      }),
      error: err => {
        this.ErrorMessage = err;
      }
    });*/


      this.FormTextArea =this.Fb.group({
        contents : this.Fb.control("")
      });

      if(this.ListCommentaires)
        alert("les commentaires sont là");



  }


  Supprimer(p: ProduitModel) {



  }


  openCommentBox(id_product:string) {
    this.showCommentBox = true;
    this.showComments = true;
    this.ChargerComments(id_product);
  }

  closeCommentBox() {
    this.showCommentBox = false;
    this.showComments=false;
    this.commentTextarea.nativeElement.value = '';

  }


  // Définissez une fonction pour redimensionner automatiquement le textarea

 redimensionnerTextarea() {
    /* setTimeout(() => {
      const textarea = document.getElementsByTagName('textarea')[0];
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }, 10);*/

  }



  toggleEmojiBox() {

  }

  ajouterEmoji(emoji: any) {

  }

  chargerPhoto() {

  }

  async envoyerCommentaire( id_prod : string) {

    // Récupérez le contenu du commentaire à partir de la zone de texte
    /*const commentaire ={
      id_publication :id_prod,
      date_comment : new Date(),
      contents:this.TextAreacommentaire,
      images : ""
    };*/

     this.comment.id_publication=id_prod;
     this.comment.contents=this.TextAreacommentaire;
     this.comment.date_comment=new Date();
     this.comment.images=""

 //alert(this.comment.contents);
 console.log(this.comment);
    let comm:CommentModel;
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
 // alert(commentaire.contents);


    /*
    // Réinitialisez la zone de texte
    this.commentTextarea.nativeElement.value = '';

    // Chargez tous les commentaires pour ce produit
    this.ListCommentaires = await this.produitService.getAllCommentsForP(id_prod);

    // Affichez tous les commentaires dans la zone de commentaires
    this.showComments = true;

    const commentList = document.getElementById(`commentList-${id_prod}`);
    if (commentList) {
      commentList.scrollTop = commentList.scrollHeight;

    }

    this.closeCommentBox();

    */
  }

  ChargerComments(id_product : string) {

    this.ListCommentaires=this.produitService.getAllCommentsForP(id_product).pipe(catchError(err=>{
      //console.log(this.ListCommentaires);
      console.log(id_product);
      this.ErrorMessage=err.message;
      return throwError(err);
    }));

  }

  highlightStar(id_p:string, index: number) {
    for (let i = 1; i <= 5; i++) {
      let star = document.getElementById( 'star-'+i+'-'+ id_p );
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

  rateProduct(p:ProduitModel, note:number){
    p.raiting=note;
  }

}
