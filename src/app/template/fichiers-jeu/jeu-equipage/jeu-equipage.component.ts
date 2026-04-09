import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Groupe } from 'src/app/models/groupe';
import { Personnage } from 'src/app/models/Personnage';
import { JeuService } from 'src/app/services/jeu-service';

@Component({
  selector: 'app-jeu-equipage',
  standalone: true,
  imports: [],
  templateUrl: './jeu-equipage.component.html',
  styleUrl: './jeu-equipage.component.scss'
})
export class JeuEquipageComponent implements OnInit {

  isLoading = true;
  personnage!: Personnage;
  groupe!: Groupe;

  nomDuGroupe!:string;
  resultat!: string;
  reponse!: string;
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
    this.jeuService.tiragePerso().subscribe(p => {
      this.personnage = p;
      this.tour++;
      this.isLoading=false;
    });
      this.jeuService.tirageGroupe().subscribe(g => {
      this.groupe = g;
      this.nomDuGroupe=this.jeuService.lowercaseFirstLetter(this.groupe.name);
    });
  }


  onClickButton(reponse: string): void {
    this.resultat = this.jeuService.comparerResultatEquipage(reponse, this.personnage, this.groupe);
    console.log (reponse + ' ' + this.resultat)
    this.texteResultat = this.jeuService.getTextResultatEquipage(this.resultat, reponse, this.personnage, this.groupe);
    console.log (this.texteResultat);
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
        jeu:"equipage"
   }
    });
  }

  }
}
