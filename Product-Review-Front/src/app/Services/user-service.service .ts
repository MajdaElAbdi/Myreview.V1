import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../Models/user";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
BackenURL : string = "http://localhost:3007";

  constructor(private http : HttpClient) {

  }


  

  public getAllproducts() : Observable<Array<UserModel>>{
    return this.http.get<Array<UserModel>>(this.BackenURL+"/users/id");
  }




}
