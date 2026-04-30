import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Personnage } from '../../../models/Personnage';
import { JeuService } from '../../../services/jeu-service';
import { Groupe } from '../../../models/groupe';

@Component({
  selector: 'app-jeu-equipage',
  standalone: true,
  imports: [],
  templateUrl: './jeu-equipage.component.html',
  styleUrl: './jeu-equipage.component.scss'
})
export class JeuEquipageComponent implements OnInit {
  private jeuService = inject(JeuService);
  private readonly router = inject(Router);
  private cdr = inject(ChangeDetectorRef);


  isLoading = true;
  personnage!: Personnage;
  groupe!: Groupe;

  nomDuGroupe!:string;
  resultat!: string;
  reponse!: string;
  texteResultat!: string;
  score = 0;
  scoreTotal = 0;
  tour =0;


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
      this.cdr.detectChanges();
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
