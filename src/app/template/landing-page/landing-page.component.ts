import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
    imports: [
    RouterLink,
    FormsModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent {

  userEmail: string = "moi@adressebidon.com";

  constructor(private router: Router) { }
  

onContinue() {
    this.router.navigateByUrl('listePersonnages');
}

onSubmitForm(): void {
  console.log(this.userEmail)
}

}


