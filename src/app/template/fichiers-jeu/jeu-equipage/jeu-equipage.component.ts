import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Personnage } from '../../../models/Personnage';
import { JeuService } from '../../../services/jeu-service';
import { Groupe } from '../../../models/groupe';
import { PersonnageShort } from '../../../models/PersonnageShort';
import { FusionPersonnageService } from '../../../services/fusion-personnage-service';

@Component({
  selector: 'app-jeu-equipage',
  standalone: true,
  imports: [],
  templateUrl: './jeu-equipage.component.html',
  styleUrl: './jeu-equipage.component.scss'
})
export class JeuEquipageComponent implements OnInit {
  private jeuService = inject(JeuService);
  private fusionPersoService = inject(FusionPersonnageService)
  private readonly router = inject(Router);
  private cdr = inject(ChangeDetectorRef);


  isLoading = true;
  personnage!: Personnage;
  personnageShort!: PersonnageShort;
  capitaine!: PersonnageShort;
  groupe!: Groupe;
  tableauGroupes!: Groupe[];
  tableauPersos!: PersonnageShort[];

  nomDuGroupe!:string;
  typequestion!: string;
  annonce!:string;
  preposition!: string;
  resultat!: string;
  reponse!: string;
  texteResultat!: string;
  score = 0;
  scoreTotal = 0;
  tour=0;

  ngOnInit(): void {
      this.jeuService.tirageTableauEquipage().subscribe(tg => {
      this.tableauGroupes = tg;
      this.tableauPersos = this.jeuService.tirageTableauPersosJDE(tg)
      this.tirageGeneral();
      })
    }

 /** Première formule du tirage : a garder pour comprendre la logique de base
  * 
  *  tirage() {
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
  }*/ 
  /**
   * Détermine si la prochaine question sera sur un personnage ou un capitaine
   */
  tirageGeneral(){
    this.groupe = this.tableauGroupes[this.tour];
    console.log(this.groupe.id)
    const D3 = Math.floor(Math.random() * 3);
    if (this.groupe.capitaine.id !== null && this.groupe.capitaine.nom !=="" && D3 >1){
       this.typequestion="capitaine";
       this.tirageCapitaine()
    }
    else {
      this.typequestion="membre";
      this.tiragePerso()
    } 
  }

  /**
   * 
   */
    tirageCapitaine(){
      const D3 = Math.floor(Math.random() * 3);
      if (D3 == 0){
          this.personnageShort = this.tableauPersos[this.tour];
        } 
      else if (D3 == 1){
        this.personnageShort = this.groupe.capitaine;
        }
      else if (D3 == 2){
        let pif = Math.floor(Math.random() * this.groupe.membresListe.length);
        this.personnageShort = this.groupe.membresListe[pif];
      }
      this.fusionPersoService.getPersonnageById(this.personnageShort.id).subscribe({
          next: (p: Personnage) => {
            this.personnage = p; 
            this.lancementDeLaffichage();
          },
          error: (err) => console.error('Erreur récupération personnage:', err)
        });
  }

  /**
   * Tire un personnage et lance la question 
   */

   tiragePerso() {
      this.personnageShort = this.tableauPersos[this.tour];
          this.fusionPersoService.getPersonnageById(this.personnageShort.id).subscribe({
              next: (p: Personnage) => {
                this.personnage = p;
                this.lancementDeLaffichage()
              },
              error: (err) => console.error('Erreur récupération personnage:', err)
            });
     } 

  /**
   * Créer les éléments qui enclenchent le jeu comme l'affichage de la préposition
   * le passage à un tour suivant
   * l'affichage du nom du groupe en minuscule
   */

  lancementDeLaffichage(){
                this.annonce = this.jeuService.generateurPhraseAnnonce(this.groupe, this.typequestion); 
                this.tour++;
                this.isLoading=false;
                this.nomDuGroupe=this.jeuService.lowercaseFirstLetter(this.groupe.name);
                this.cdr.detectChanges();
  }

  /**
   * Lors de la réception du joueur calcule le score, l'affiche, affiche la réponse, 
   * il lance le prochain tour, sauf si on est au 10eme tour où il affiche le résultat du quizz.
   * @param reponse 
   */

  onClickButton(reponse: string): void {
    this.resultat = this.jeuService.comparerResultatEquipage(reponse, this.personnage, this.groupe, this.typequestion);
    this.texteResultat = this.jeuService.getTextResultatEquipage(this.resultat, reponse, this.personnage, this.groupe, this.typequestion);
    this.score = this.jeuService.getScore2(this.resultat);
    this.scoreTotal = this.score + this.scoreTotal;
    this.isLoading=true;
    if (this.tour<10) {
    this.tirageGeneral();
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
