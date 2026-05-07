import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit{
  private authService = inject(AuthService);
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);


  loginForm!: FormGroup;
  email = '';
  password = '';
  error = '';
  loading= false;


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

async onSubmitForm(): Promise<void> {
  if (this.loginForm.invalid) return;
  const { email, password } = this.loginForm.value;
  const success = await this.authService.login(email, password); // ← await
  if (success) {
    this.router.navigate(['/admin']);
  } else {
    this.error = 'Identifiants incorrects.';
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
