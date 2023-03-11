import { Component } from '@angular/core';
import {ProduitModel} from "../Models/produit";
import {catchError, Observable, throwError} from "rxjs";
import {ProduitServiceService} from "../Services/produit-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {

ListProduits! : Observable<Array<ProduitModel>>;

ErrorMessage! : string;

  constructor(private produitService: ProduitServiceService,private  http: HttpClient) {

  }

  ngOnInit() : void{


    this.ListProduits=this.produitService.getAllproducts().pipe(catchError(err=>{
      this.ErrorMessage=err.message;
      return throwError(err);
    }));





  }


  Supprimer(p: ProduitModel) {

    this.ListProduits=this.http.get<Array<ProduitModel>>("localhost:3000/produits");

  }
}
