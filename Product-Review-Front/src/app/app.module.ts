import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule, Routes} from "@angular/router";
import { ProduitsComponent } from './produits/produits.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';


const routes: Routes =[
  { path: "produits", component:ProduitsComponent},
  { path: "users", component:UsersComponent},
  {path: "login", component:LoginComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProduitsComponent,
    UsersComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
