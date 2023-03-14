import { Component, ViewChild } from '@angular/core';
import {UserModel} from "../Models/user";
import {catchError, Observable, throwError} from "rxjs";
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import { UserServiceService } from '../Services/user-service.service ';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  @ViewChild('loginForm') loginForm!: NgForm;
  profileForm!:FormGroup;
  ListUsers! : Observable<Array<UserModel>>;
  ErrorMessage! : string;
 
  constructor(private userService: UserServiceService,private Fb:FormBuilder,private router: Router   ) {

  }

  ngOnInit() : void{
this.profileForm=this.Fb.group({

name: this.Fb.control("" ),
email: this.Fb.control("",[Validators.required, Validators.email]),
date: this.Fb.control(""),
password: this.Fb.control("",[Validators.required ]),
gender:this.Fb.control(""),
userType:this.Fb.control(""),
image:this.Fb.control(""),
address:this.Fb.control("",[Validators.required ])
});

 

  }
  onSubmit() {
    console.log(this.loginForm.value);
    // Do login here
  }

addUser(){
   
   

}
  Supprimer(p: UserModel) {

   // this.ListUsers=this.http.get<Array<UserModel>>("localhost:3000/users");

  }
add(){
let user= this.loginForm.value;
console.log(user);
this.userService.addUser(user).subscribe({

  next:value=>{
    //route
    alert('user est ajoute');
   // console.log(next);
    this.router.navigate(['/login']);
  },
    error:err=>{console.log(err)}
});
}
update(p: UserModel){}
drop(id:string){}


}
