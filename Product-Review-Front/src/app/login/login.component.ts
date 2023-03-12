import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../Models/user';
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;




  
  constructor(private loginService: LoginServiceService,private Fb:FormBuilder  ) {

  }

  ngOnInit() : void{
this.loginForm=this.Fb.group({

 
email: this.Fb.control("",[Validators.required, Validators.email]),
 
password: this.Fb.control("")
 

});

 

  }
 error:number=0;
 userLog!:UserModel;
 
 connecct(){




 }
 sinscire(){



 }
 connect(){}
}
