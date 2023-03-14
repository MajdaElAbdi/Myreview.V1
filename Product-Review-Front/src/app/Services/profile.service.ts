import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  BackenURL : string = "http://localhost:3007";

  constructor(private http : HttpClient) {

  }


  
 
 
public getUser(id : string):Observable<UserModel>{
    return this.http.get<UserModel>(this.BackenURL+"/users/"+id);
} }