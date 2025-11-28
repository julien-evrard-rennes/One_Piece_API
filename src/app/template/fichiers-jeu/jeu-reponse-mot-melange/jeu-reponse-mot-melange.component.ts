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
  avisFinal!:string;

    constructor(private readonly router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.score = nav?.extras.state?.['score'] ?? 0;
    this.tour = nav?.extras.state?.['tour'] ?? 0;
    this.scoreTotal = nav?.extras.state?.['scoreTotal'] ?? 0;
    this.reponse = nav?.extras.state?.['reponse'] ?? ''; 
    this.texteResultat = nav?.extras.state?.['texteResultat'] ?? ''; 
  }

  ngOnInit(): void {
    this.getPourcentage();
    this.resultatCadre=this.getResultatCadre();
    console.log(this.resultatCadre);
    this.avisFinal=this.getAvisFinal(this.resultatCadre);
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
      else if (this.pourcentage<25){
        return "resultatPourri"
      }
      else if (this.pourcentage==0){
        return "resultatNul"
      }
      else{
        return "resultatNormal"
      }
    }



      getAvisFinal(resultatCadre: string): string {
        console.log(resultatCadre);
        if (this.resultatCadre=="resultat"){
          return "Bizarre"}
        if (resultatCadre=="resultatParfait"){
        return "Bravo ! Tu connais visiblement à la perfection les personnages de One Piece ! \n" +
        "Ou alors, c'est un énorme coup de pot !"}
        else if (resultatCadre=="resultatCool"){
        return "Ok, tu as retrouvé une grande majorité des personnages. \n" +
        "Mais ne te la pète pas trop : l'idéal c'est le 100%"}
        else if (resultatCadre=="resultatMoyen"){
        return "C'est franchement moyen tout ça.  \n" +
        "Bon, au moins t'as retrouvé la moitié des personnages.."}
        else if (resultatCadre=="resultatBof"){
        return "Tu as retrouvé un peu moins de la moitié des personnages. \n" +
        "Y a vraiment pas de quoi se vanter !"}
        else if (resultatCadre=="resultatPourri"){
        return "Et bah dis donc, c'est quoi ce score ? \n" +
        "Tu connais le manga au moins ?"}
        else if (resultatCadre=="resultatNul"){
        return "AUCUNE BONNE RÉPONSE ?\n" + 
        "Rassure moi, tu en a fait exprès, c'est ça ?  "}
        else {
        return "Ce message ne devrait pas s'afficher. Le programme doit avoir un bug."
      }


  }


}
