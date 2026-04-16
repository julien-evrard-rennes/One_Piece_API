import { Injectable } from "@angular/core";
import { Router, UrlTree } from "@angular/router";
import { AuthService } from "./app/services/auth.service";
import { Observable } from "rxjs/internal/Observable";
import { filter, map, take } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
  return this.authService.isAuthenticated().pipe(
    filter(auth => auth !== null), // attendre que l'état soit connu
    take(1),
    map(isAuth => isAuth ? true : this.router.createUrlTree(['/login']))
  );
}

}