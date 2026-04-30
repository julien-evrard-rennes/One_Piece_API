import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-choix-jeu',
  standalone: true,
  imports: [
    RouterLink,
    ],
  templateUrl: './choix-jeu.component.html',
  styleUrl: './choix-jeu.component.scss'
})
export class ChoixJeuComponent{
  private router = inject(Router);


  onChoixMystere() {
    this.router.navigateByUrl('jeuMelange');
}

  onChoixPrime() {
    this.router.navigateByUrl('jeuEquipage');
}

  onChoixAge() {
    this.router.navigateByUrl('jeuAge');
}


}

