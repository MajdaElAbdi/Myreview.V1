import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesSharedService {

  profil:string="user";
  Afficheprofile:boolean=false;

  constructor() { }
}
