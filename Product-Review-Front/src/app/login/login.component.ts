import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { UserModel } from '../Models/user';
import { LoginServiceService } from '../Services/login-service.service';
import { UserServiceService } from '../Services/user-service.service ';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm !: UserModel;
  public loggedUser: string = '';
  public isloggedIn: Boolean = false;
  public isAdmin: Boolean = false;
  public role: string | undefined;
  loginForm!: FormGroup;
  public error: number = 0;
  ErrorMessage: any;
  user!: UserModel;
  date!:Date;





  constructor(private router: Router, public serviceLogin: LoginServiceService, private Fb: FormBuilder, private shared:VariablesSharedService) { }

  ngOnInit(): void {

    this.loginForm = this.Fb.group({


      email: this.Fb.control("" ),

      password: this.Fb.control("" )

    });

  }

  SignIn() :boolean{

    this.userForm = this.loginForm.value;
    let validUser: boolean = false;


    this.serviceLogin.getByEmail(this.userForm.email).subscribe({
      next: (data => {
        this.user = data[0];
        //console.log(this.user.email);

      }), error: err => {
        console.log(err);
      }
    });

    if (this.user) console.log(this.user);
    if (this.user != null) {

      if (this.user.email === this.userForm.email && this.user.password == this.userForm.password) {
        validUser = true;
        //alert(validUser);
        this.loggedUser = this.userForm.email;
        this.isloggedIn = true;
        this.role = this.userForm.userType;
        if (this.role === "admin") {
          this.isAdmin = true;
          localStorage.setItem('isAdmin', String(this.isAdmin));
        }
        else { 
          this.isAdmin = false; 
        localStorage.setItem('isAdmin', String(this.isAdmin)); 
        }
       // alert("on est ici frère");
        localStorage.setItem('id', String(this.user._id));
        localStorage.setItem('name', String(this.user.name));
        localStorage.setItem('email', this.user.email);
        localStorage.setItem('gender', this.user.gender);
       // let date=this.user.date.getFullYear.toString()+'/'+this.user.date.getMonth.toString()+'/'+this.user.date.getDay.toString();
       
       this.date=this.user.date
     
        localStorage.setItem('dateOfBirth',this.user.date.getFullYear.toString() );
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
        this.router.navigate(['produits']);

       /* name: this.Fb.control("" ),
email: this.Fb.control("",[Validators.required, Validators.email]),
date: this.Fb.control(""),
password: this.Fb.control("",[Validators.required ]),
genre:this.Fb.control("")*/
      }

    }
    return validUser;
  }


    //return validUser;

    onLoggedin() {
    if(localStorage.getItem("isloggedIn")==="true" && localStorage.getItem("isloggedIn")==="true"){
      this.router.navigate(['produits']);
    }
      let isValidUser: Boolean = this.SignIn(this.userLog);
      //alert(this.isloggedIn);
      if (isValidUser == false)
        this.error = 1;


      else if (isValidUser && this.isAdmin) {
        this.error = 0; console.log("admiiiiin");
        this.router.navigate(['acceuiladmin']);
      }
      else if (isValidUser && this.role === "user") {
        this.error = 0;
        this.shared.profil="user";
        localStorage.setItem('role', String(this.shared.profil));
        this.shared.Afficheprofile=true;
        this.router.navigate(['produits']);
      }
      else if (isValidUser && this.role === "owner") {
        this.error = 0;
        this.shared.profil="owner";
        localStorage.setItem('role', String(this.shared.profil));
        this.shared.Afficheprofile=true;
        this.router.navigate(['produits']);
      }
    }
    sinscire() { this.router.navigate(['sign-in']); }


  }
