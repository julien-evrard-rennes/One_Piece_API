import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Personnage } from '../../../models/Personnage';
import { JeuService } from '../../../services/jeu-service';


@Component({
  selector: 'app-jeu-age',
  standalone: true,
  imports: [],
  templateUrl: './jeu-age.component.html',
  styleUrl: './jeu-age.component.scss'
})
export class JeuAgeComponent  implements OnInit {
  private jeuService = inject(JeuService);
  private readonly router = inject(Router);
  private cdr = inject(ChangeDetectorRef);


  isLoading = true;
  personnage!: Personnage;
  personnage2!: Personnage;

  resultat!: string;
  reponse!: string;
  question!: string;
  texteResultat!: string;
  score = 0;
  scoreTotal = 0;
  tour =0;


  ngOnInit(): void {
      this.tirage();
    }

  tirage() {
    this.jeuService.tiragePersoAge().subscribe(p => {
      this.personnage = p;
      this.tour++;
      this.isLoading=false;
      this.question = this.formulationQuestion(p);
      this.cdr.detectChanges();
    });
      this.jeuService.tiragePersoAge().subscribe(p2 => {
      this.personnage2 = p2;
      this.cdr.detectChanges();
    });

  }
  
  formulationQuestion(personnage: Personnage): string {
    let phrase;
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
