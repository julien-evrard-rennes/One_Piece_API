import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router) { }

  onChoixMystere() {
    this.router.navigateByUrl('jeuMelange');
}

  onChoixPrime() {
    this.router.navigateByUrl('jeuEquipage');
}


}

