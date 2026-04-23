import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personnage } from 'src/app/models/Personnage';
import { JeuService } from 'src/app/services/jeu-service';


@Component({
  selector: 'app-jeu-age',
  standalone: true,
  imports: [],
  templateUrl: './jeu-age.component.html',
  styleUrl: './jeu-age.component.scss'
})
export class JeuAgeComponent  implements OnInit {

  isLoading = true;
  personnage!: Personnage;
  personnage2!: Personnage;

  resultat!: string;
  reponse!: string;
  question!: string;
  texteResultat!: string;
  score: number = 0;
  scoreTotal: number = 0;
  tour: number =0;

    constructor(private  jeuService : JeuService, 
    private readonly router: Router) {}


  ngOnInit(): void {
      this.tirage();
    }

  tirage() {
    this.jeuService.tiragePersoAge().subscribe(p => {
      this.personnage = p;
      this.tour++;
      this.isLoading=false;
      this.question = this.formulationQuestion(p);
    });
      this.jeuService.tiragePersoAge().subscribe(p2 => {
      this.personnage2 = p2;
    });
  }
  
  formulationQuestion(personnage: Personnage): string {
    let phrase = '';
    if (personnage.sexe == 'f'){
      if (personnage.id % 2 == 0){ 
        phrase = " est-elle plus agée que "}
        else phrase = " est-elle plus jeune que "
    }
    else if(personnage.id % 2 == 0){
      phrase = " est-il plus âgé que "
    }
    else phrase = " est-il plus jeune que "
    return phrase 
  }

   onClickButton(reponse: string): void {
    this.resultat = this.jeuService.comparerResultatAge(reponse, this.personnage, this.personnage2);
    this.texteResultat = this.jeuService.getTextResultatAge(this.resultat, this.personnage, this.personnage2);
    this.score = this.jeuService.getScore2(this.resultat);
    this.scoreTotal = this.score + this.scoreTotal;
    if (this.tour<10) {
    this.tirage();
    }
    else {
      this.router.navigateByUrl('jeuReponse', {
        state: { 
        score: this.score,
        texteResultat: this.texteResultat,
        reponse : this.reponse,
        scoreTotal: this.scoreTotal,
        tour:this.tour,
        jeu:"age"
   }
    });
  }

}
}
