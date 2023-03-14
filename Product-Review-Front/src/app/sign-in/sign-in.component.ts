import { Component } from '@angular/core';
import {UserModel} from "../Models/user";
import {catchError, Observable, throwError} from "rxjs";
 
import {HttpClient} from "@angular/common/http";
import { UserServiceService } from '../Services/user-service.service ';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  profileForm!:FormGroup;
  ListUsers! : Observable<Array<UserModel>>;
  ErrorMessage! : string;
 
  constructor(private userService: UserServiceService,private Fb:FormBuilder  ) {

  }

  ngOnInit() : void{
this.profileForm=this.Fb.group({

name: this.Fb.control("" ),
email: this.Fb.control("",[Validators.required, Validators.email]),
date: this.Fb.control(""),
password: this.Fb.control("",[Validators.required ]),
genre:this.Fb.control("")

});

 

  }

addUser(){
   
   

}
  Supprimer(p: UserModel) {

   // this.ListUsers=this.http.get<Array<UserModel>>("localhost:3000/users");

  }
add(){
let user= this.profileForm.value;
 
this.userService.addUser(user).subscribe({

  next:value=>{
    //route
    alert('user est ajoute')},
    error:err=>{console.log(err)}
});
}
update(p: UserModel){}
drop(id:string){}


}
