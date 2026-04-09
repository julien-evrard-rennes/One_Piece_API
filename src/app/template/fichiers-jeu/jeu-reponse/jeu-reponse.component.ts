import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jeu-reponse',
  standalone: true,
  imports: [],
  templateUrl: './jeu-reponse.component.html',
  styleUrl: './jeu-reponse.component.scss'
})
export class JeuReponseComponent implements OnInit {
  score!: number;
  scoreTotal: number;
  texteResultat:string;
  reponse: string;
  tour:number;
  resultatCadre:string="resultat";
  pourcentage!:number;
  avisFinal!:string;
  jeu!:string;

    constructor(private readonly router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.score = nav?.extras.state?.['score'] ?? 0;
    this.tour = nav?.extras.state?.['tour'] ?? 0;
    this.scoreTotal = nav?.extras.state?.['scoreTotal'] ?? 0;
    this.reponse = nav?.extras.state?.['reponse'] ?? ''; 
    this.texteResultat = nav?.extras.state?.['texteResultat'] ?? '';
    this.jeu = nav?.extras.state?.['jeu'] ?? '';
  }

  ngOnInit(): void {
    this.getPourcentage();
    this.resultatCadre=this.getResultatCadre();
    console.log(this.resultatCadre);
    if (this.jeu=="equipage") {
    this.avisFinal=this.getAvisFinalEquipage(this.resultatCadre);
    }
    else if (this.jeu=="age") {
    this.avisFinal=this.getAvisFinalAge(this.resultatCadre);
    }
    else {
    this.avisFinal=this.getAvisFinal(this.resultatCadre);
    }
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

      getAvisFinalEquipage(resultatCadre: string): string {
        console.log(resultatCadre);
        if (this.resultatCadre=="resultat"){
          return "Bizarre"}
      if (resultatCadre=="resultatParfait"){
      return "Bravo ! Soit tu t'y connais vraiment bien en One Piece ! \n" +
      "Soit t'as découvert qu'il fallait répondre NON à la plupart des questions !"}
      else if (resultatCadre=="resultatCool"){
      return "Pas mal, mais vu que le jeu est méga-fastoche, \n" +
      "t'avais largement les moyens de faire 100% ."}
      else if (resultatCadre=="resultatMoyen"){
      return "Franchement, dis le moi...  \n" +
      "T'as appuyé sur les boutons au pif, c'est ça ?"}
      else if (resultatCadre=="resultatBof"){
      return "C'est dingue, le jeu est ultra-facile \n" +
      "... mais t'as quand même réussi à te vautrer."}
      else if (resultatCadre=="resultatPourri"){
      return "Bah alors, c'est quoi ce score ? \n" +
      "T'as pas compris le truc ?"}
      else if (resultatCadre=="resultatNul"){
      return "AUCUNE BONNE RÉPONSE ?\n" + 
      "Un conseil : Arrête d'appuyer sur 'OUI'. "}
      else {
      return "Ce message ne devrait pas s'afficher. Le programme doit avoir un bug."
      }
  }

        getAvisFinalAge(resultatCadre: string): string {
        console.log(resultatCadre);
          if (this.resultatCadre=="resultat"){
            return "Bizarre"}
        if (resultatCadre=="resultatParfait"){
        return "Bravo ! Tu connais visiblement à la perfection l'âge des personnages de One Piece ! \n" +
        "T'as fait le jeu avec un wiki d'ouvert dans l'onglet d'à côté, c'est ça ?"}
        else if (resultatCadre=="resultatCool"){
        return "Pas mal du tout, tu arrive bien à juger l'âge des différents personnages. \n" +
        "Mais le mieux ça serait de faire 100%"}
        else if (resultatCadre=="resultatMoyen"){
        return "C'est un peu plus de l'âge des personnages.  \n" +
        "T'arrive à différencier un personnage jeune d'un personnage vieux."}
        else if (resultatCadre=="resultatBof"){
        return "C'est pas fifou tout ça. \n" +
        "Visiblement va falloir que tu révise les personnages !"}
        else if (resultatCadre=="resultatPourri"){
        return "Houlalalalalala... \n" +
        "C'est franchement la catastrophe"}
        else if (resultatCadre=="resultatNul"){
        return "AUCUNE BONNE RÉPONSE ?\n" + 
        "Franchement, même en appuyant sur les touches au hasard t'aurai pu trouver  "}
        else {
        return "Ce message ne devrait pas s'afficher. Le programme doit avoir un bug."
      }
  }


}

