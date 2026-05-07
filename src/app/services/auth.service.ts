import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthService {

  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  async login(email: string, password: string): Promise<boolean> {
    const hashedInput = await this.hash(password);
    
    if (email === environment.ADMIN_EMAIL && 
        hashedInput === environment.ADMIN_PASSWORD_HASH) {
      localStorage.setItem('admin_token', btoa(email + Date.now()));
      this.isLoggedIn$.next(true);
      return true;
    }
    return false;
  }

  private async hash(value: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(value);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
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