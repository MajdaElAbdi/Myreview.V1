import { Component } from '@angular/core';
import {UserModel} from "../Models/user";
import {catchError, Observable, throwError} from "rxjs";
import {ProduitServiceService} from "../Services/produit-service.service";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
add(){}
update(){}
drop(){}


}
