import { Component } from '@angular/core';

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

ngOnInit() : void{

this.email=localStorage.getItem('email');
this.name=localStorage.getItem('name');
this.dateOfBirth=localStorage.getItem('dateOfBirth');
alert(this.dateOfBirth);
this.gender=localStorage.getItem('gender');
}


}
