import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jeu-reponse-mot-melange',
  standalone: true,
  imports: [],
  templateUrl: './jeu-reponse-mot-melange.component.html',
  styleUrl: './jeu-reponse-mot-melange.component.scss'
})
export class JeuReponseMotMelangeComponent {
  score!: number;
  scoreTotal: number;
  texteResultat:string;
  reponse: string;
  tour:number;
  resultatCadre:string="resultat";

    constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.score = nav?.extras.state?.['score'] ?? 0;
    this.tour = nav?.extras.state?.['tour'] ?? 0;
    this.scoreTotal = nav?.extras.state?.['scoreTotal'] ?? 0;
    this.reponse = nav?.extras.state?.['reponse'] ?? ''; 
    this.texteResultat = nav?.extras.state?.['texteResultat'] ?? ''; 
  }

}
