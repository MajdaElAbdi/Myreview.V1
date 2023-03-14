import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = localStorage.getItem("isloggedIn"); // Vérifie si l'utilisateur est authentifié

    if (isAuthenticated==="true") {
      return true;
    } else {
      // Redirige l'utilisateur vers la page de connexion avec un paramètre "returnUrl" qui contient la route à laquelle il tentait d'accéder
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}}).then(r =>{
        console.log(r);
      });
       return false;
    }
  }

}
