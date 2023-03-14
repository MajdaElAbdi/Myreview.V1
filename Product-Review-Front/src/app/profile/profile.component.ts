import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../Models/user';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
email!:any;
gender!:any;
name!:any;
dateOfBirth!:any;
user!:UserModel;
id!:any;
address!:any;
userType!:any;
constructor(private router: Router, public serviceProfile:ProfileService, private Fb: FormBuilder) { }

ngOnInit() : void{
  this.id=localStorage.getItem('id');
/*this.email=localStorage.getItem('email');
this.name=localStorage.getItem('name');
this.dateOfBirth=localStorage.getItem('dateOfBirth');
alert(this.dateOfBirth);
this.gender=localStorage.getItem('gender');*/
 
this.serviceProfile.getUser(this.id).subscribe({
  next: (data => {
    this.user = data;
    this.email=this.user.email;
  
    this.gender=this.user.gender;
    this.name=this.user.name;
    this.dateOfBirth=this.user.date;
    this.userType=this.user.userType;

  }), error: err => {
    console.log(err);
  }
});
console.log(this.user.address);

}


}
