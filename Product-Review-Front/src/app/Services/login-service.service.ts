import { Injectable } from '@angular/core';
 
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../Models/user";
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  BackenURL : string = "http://localhost:3007";

  constructor(private http : HttpClient) {

  }


  public getAllusers() : Observable<Array<UserModel>>{
    return this.http.get<Array<UserModel>>(this.BackenURL+"/users");
  }
/*
  public postUser() : Observable<UserModel>{
    return this.http.post<UserModel>(this.BackenURL+"/users");
  }
*/
 
public getUser(id : string) :Observable<UserModel>{
    return this.http.get<UserModel>(this.BackenURL+"/users/"+id);
}
public getByEmail(mail : string) :Observable<Array<UserModel>>{{
  
  return this.http.get<Array<UserModel>>(this.BackenURL+"/users/email/"+mail);
}}}
 
 


