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
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { AdministrationComponent } from './administration/administration.component';
import {AuthGuard} from "./auth.guard";



const routes: Routes =[
  { path: "produits", component:ProduitsComponent},
  { path: "users", component:UsersComponent, canActivate: [AuthGuard]},
  {path: "login", component:LoginComponent},
  {path: "signin", component:SignInComponent},
  {path: "profile", component:ProfileComponent, canActivate: [AuthGuard]},
  {path: "administration", component:AdministrationComponent, canActivate: [AuthGuard]},
  {path:'' ,redirectTo:'/login',pathMatch:'full'},
  { path: '**', redirectTo: '/produits' }
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProduitsComponent,
    UsersComponent,
    LoginComponent,
    SignInComponent,
    ProfileComponent,
    AdministrationComponent
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
