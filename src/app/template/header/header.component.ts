import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, AsyncPipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,   // ← règle routerLink, routerLinkActive, routerLinkActiveOptions
    CommonModule,   // ← règle *ngIf
    AsyncPipe,      // ← règle le pipe | async
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  constructor(
    private router : Router,
    public authService: AuthService
  ){ }

  ngOnInit(): void { 
  }

  onCreation() : void {
    this.router.navigateByUrl("/creer");
  }

  logout(): void {
    this.authService.logout(); 
    this.router.navigate(['/login']);
  }

}
