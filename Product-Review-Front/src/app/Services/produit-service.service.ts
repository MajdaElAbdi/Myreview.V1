import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProduitModel} from "../Models/produit";

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




}
