import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
email!:any;
role!:any;
ngOnInit() : void{

this.email=localStorage.getItem('loggedUser');

console.log("this.email");
console.log(this.email);
this.role=localStorage.getItem('Role');


}


}
