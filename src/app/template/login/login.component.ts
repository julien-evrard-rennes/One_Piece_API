import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  email = '';
  password = '';
  error = '';
  loading= false;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private formBuilder : FormBuilder) {}


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]  
    });
      // Si déjà connecté, on redirige directement
  this.authService.isAuthenticated().pipe(take(1)).subscribe(isAuth => {
    if (isAuth) this.router.navigate(['/admin']);
  });
  }

  async onSubmitForm(): Promise<void>{
    if (this.loginForm.invalid) return;

    this.loading = true;
    this.error = '';

    const { email, password } = this.loginForm.value;

    try {
      await this.authService.login(email, password);
      this.router.navigate(['/admin']);
    } catch (e) {
      this.error = 'Identifiants incorrects. Vérifiez votre email et mot de passe.';
    } finally {
      this.loading = false;
    }
  }

    get emailInvalid(): boolean {
    const ctrl = this.loginForm.get('email');
    return !!(ctrl?.invalid && ctrl?.touched);
  }

  get passwordInvalid(): boolean {
    const ctrl = this.loginForm.get('password');
    return !!(ctrl?.invalid && ctrl?.touched);
  }

}
