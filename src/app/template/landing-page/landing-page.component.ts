import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
    imports: [
    FormsModule,
    ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent {
  private router = inject(Router);

  

onContinue() {
    this.router.navigateByUrl('choixJeu');
}


}


