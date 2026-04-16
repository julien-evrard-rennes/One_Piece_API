import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {

  private isLoggedIn$ = new BehaviorSubject<boolean>(false);
    supabase: any;

  // Supabase
  async login(email: string, password: string) {
    const { error } = await this.supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    this.isLoggedIn$.next(true);
  }

  async logout() {
    await this.supabase.auth.signOut();
    this.isLoggedIn$.next(false);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }
}