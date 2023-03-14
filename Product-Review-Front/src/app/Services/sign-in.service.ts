import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../Models/user";
@Injectable({
  providedIn: 'root'
})
export class SignInService {
  BackenURL : string = "http://localhost:3007";

  constructor(private http : HttpClient) {

  }

 
 
 
 

public addUser(user : UserModel) :Observable<UserModel>{
  return this.http.post<UserModel>(this.BackenURL+"/users",user);
}
 
 
 
}

