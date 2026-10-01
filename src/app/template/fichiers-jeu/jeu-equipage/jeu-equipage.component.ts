import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Personnage } from '../../../models/Personnage';
import { JeuService } from '../../../services/jeu-service';
import { Groupe } from '../../../models/groupe';
import { PersonnageShort } from '../../../models/PersonnageShort';
import { FusionPersonnageService } from '../../../services/fusion-personnage-service';
import { FusionGroupeService } from '../../../services/fusion-groupe-service';

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
  groupe!: Groupe;
  tableauGroupes!: Groupe[];
  tableauPersos!: PersonnageShort[];

  nomDuGroupe!:string;
  annonce!:string;
  preposition!: string;
  resultat!: string;
  reponse!: string;
  texteResultat!: string;
  score = 0;
  scoreTotal = 0;
  tour=0;

  ngOnInit(): void {
      this.nouveauTirage();
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

  nouveauTirage() {
  if (this.tour == 0) {
    this.jeuService.tirageTableauEquipage().subscribe(tg => {
      this.tableauGroupes = tg;
      console.log(tg);
      this.groupe = this.tableauGroupes[0];

      this.tableauPersos = this.jeuService.tirageTableauPersosJDE(tg)
            this.personnageShort = this.tableauPersos[0];
            this.fusionPersoService.getPersonnageById(this.personnageShort.id).subscribe({
                next: (p: Personnage) => {
                  this.personnage = p;
                  this.annonce = this.jeuService.generateurPhraseAnnonce(this.groupe);
                  this.tour++;
                  if (this.groupe.preposition !== null && this.groupe.preposition !== ""){
                    this.preposition = this.groupe.preposition
                    } else
                    {
                      this.preposition = "de"
                    };
                  this.nomDuGroupe=this.jeuService.lowercaseFirstLetter(this.groupe.name);
                  this.isLoading=false;
                  this.cdr.detectChanges();
                },
                error: (err) => console.error('Erreur récupération', err)
        })
      })
    }
     else {
      this.groupe = this.tableauGroupes[this.tour];
      this.personnageShort = this.tableauPersos[this.tour];
          this.fusionPersoService.getPersonnageById(this.personnageShort.id).subscribe({
              next: (p: Personnage) => {
                this.personnage = p;
                this.annonce = this.jeuService.generateurPhraseAnnonce(this.groupe); 
                this.tour++;
                if (this.groupe.preposition !== null && this.groupe.preposition !== ""){
                    this.preposition = this.groupe.preposition
                    } else
                    {
                      this.preposition = "de"
                    };
                  this.nomDuGroupe=this.jeuService.lowercaseFirstLetter(this.groupe.name);
                this.isLoading=false;
                this.nomDuGroupe=this.jeuService.lowercaseFirstLetter(this.groupe.name);
                this.cdr.detectChanges();
              },
              error: (err) => console.error('Erreur récupération personnage:', err)
            });
     }
  }  


  onClickButton(reponse: string): void {
    this.resultat = this.jeuService.comparerResultatEquipage(reponse, this.personnage, this.groupe);
    this.texteResultat = this.jeuService.getTextResultatEquipage(this.resultat, reponse, this.personnage, this.groupe);
    this.score = this.jeuService.getScore2(this.resultat);
    this.scoreTotal = this.score + this.scoreTotal;
    this.isLoading=true;
    if (this.tour<10) {
    this.nouveauTirage();
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
