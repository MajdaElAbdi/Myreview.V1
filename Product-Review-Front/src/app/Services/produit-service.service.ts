import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProduitModel} from "../Models/produit";
import {CommentModel} from "../Models/Comment";

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
BackenURL : string = "http://localhost:3007";

  constructor(private http : HttpClient) {

  }

  public getAllproducts() : Observable<Array<ProduitModel>>{
    return this.http.get<Array<ProduitModel>>(this.BackenURL+"/produits");
  }


  public getAllcomments() :  Observable<Array<CommentModel>>{
    return this.http.get<Array<CommentModel>>(this.BackenURL+"/commentaires");
  }

  public getAllCommentsForP(id_product : string) : Observable<Array<CommentModel>>{
    return this.http.get<Array<CommentModel>>(this.BackenURL+"/commentsbyProd/"+id_product);
  }

  public getById(id_product : string) : Observable<ProduitModel>{
    return this.http.get<ProduitModel>(this.BackenURL+"/produits/"+id_product);
  }

  public SaveComment(comment: CommentModel) : Observable<CommentModel>{
    return this.http.post<CommentModel>(this.BackenURL+"/commentaires",comment);
  }


}
