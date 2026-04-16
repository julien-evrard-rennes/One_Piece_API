import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async onSubmit() {
    try {
      await this.authService.login(this.email, this.password);
      this.router.navigate(['/admin']);
    } catch (e) {
      this.error = 'Identifiants incorrects.';
    }
  }

  onSubmitForm(): void{
  this.router.navigateByUrl('accueil');
}

}
