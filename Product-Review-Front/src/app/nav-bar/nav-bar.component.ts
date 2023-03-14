import { Component } from '@angular/core';
import {ProduitServiceService} from "../Services/produit-service.service";
import {FormBuilder} from "@angular/forms";
import {VariablesSharedService} from "../Services/variables-shared.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(public shared:VariablesSharedService) {

  }

}
