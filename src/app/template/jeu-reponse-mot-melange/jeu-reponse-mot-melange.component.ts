import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jeu-reponse-mot-melange',
  standalone: true,
  imports: [],
  templateUrl: './jeu-reponse-mot-melange.component.html',
  styleUrl: './jeu-reponse-mot-melange.component.scss'
})
export class JeuReponseMotMelangeComponent implements OnInit  {
  score!: number;
  scoreTotal: number;
  texteResultat:string;
  reponse: string;
  tour:number;
  resultatCadre:string="resultat";
  pourcentage!:number;

    constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.score = nav?.extras.state?.['score'] ?? 0;
    this.tour = nav?.extras.state?.['tour'] ?? 0;
    this.scoreTotal = nav?.extras.state?.['scoreTotal'] ?? 0;
    this.reponse = nav?.extras.state?.['reponse'] ?? ''; 
    this.texteResultat = nav?.extras.state?.['texteResultat'] ?? ''; 
  }

  ngOnInit(): void {
    this.getPourcentage();
    this.resultatCadre=this.getResultatCadre()
  }

   getPourcentage() : void {
    this.pourcentage = (this.scoreTotal /(this.tour*10)) *100
    }

    getResultatCadre(): string{
      if(this.pourcentage==100){
        return "resultatParfait"
      }
      else if (this.pourcentage>=75){
        return "resultatCool"
      }
      else if (this.pourcentage>=50){
        return "resultatMoyen"
      }
      else if (this.pourcentage>=25){
        return "resultatBof"
      }
      else if (this.pourcentage=0){
        return "resultatPourri"
      }
      else{
        return "resultatNormal"
      }
    }

}
