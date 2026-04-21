import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthService {

  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  login(email: string, password: string): boolean {
    // Les vrais identifiants sont dans environment, jamais dans le code
    const validEmail    = environment.ADMIN_EMAIL;
    const validPassword = environment.ADMIN_PASSWORD;

    if (email === validEmail && password === validPassword) {
      localStorage.setItem('admin_token', btoa(email + Date.now()));
      this.isLoggedIn$.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('admin_token');
    this.isLoggedIn$.next(false);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

    checkSession(): void {
    const token = localStorage.getItem('admin_token');
    this.isLoggedIn$.next(!!token);
  }
}