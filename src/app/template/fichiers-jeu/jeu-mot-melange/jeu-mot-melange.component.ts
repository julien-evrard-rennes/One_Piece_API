import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Personnage } from '../../../models/Personnage';
import { JeuService } from '../../../services/jeu-service';

@Component({
  selector: 'app-jeu-mot-melange',
  standalone: true,
    imports: [
    FormsModule,
  ],
  templateUrl: './jeu-mot-melange.component.html',
  styleUrl: './jeu-mot-melange.component.scss'
})
export class JeuMotMelangeComponent implements OnInit {

  isLoading = true;
  personnage!: Personnage;
  tableauNom!: string[];
  tableauNomMel!: string[];
  tableauPrenom!: string[];
  tableauPrenomMel!: string[];
  reponseNom!: string;

  texteResultat!: string;
  resultat!: string;
  reponse!: string;
  score: number = 0;
  scoreTotal: number = 0;
  tour: number =0;

  constructor(private  jeuService : JeuService, 
    private readonly router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.tiragePerso();
  }

   tiragePerso() {
    this.jeuService.tiragePerso().subscribe(p => {
      this.personnage = p;
      this.tableauNom =this.jeuService.getTableauDeLettre(this.personnage.nom);
      this.tableauNomMel= this.jeuService.melangerMot(this.tableauNom);
      this.tableauPrenom =this.jeuService.getTableauDeLettre(this.personnage.prenom);
      this.tableauPrenomMel= this.jeuService.melangerMot(this.tableauPrenom);
      this.tour++;
      this.isLoading=false;
      this.cdr.detectChanges();
    });
    return this.personnage;
  }

  onSubmitForm(form : NgForm): void {
  console.log(form.value);
  this.resultat = this.jeuService.comparerResultat(this.reponseNom, this.personnage);
  this.texteResultat = this.jeuService.getTextResultat(this.resultat);
  this.reponse = this.personnage.nom_complet;
  this.score = this.jeuService.getScore(this.resultat);
  this.scoreTotal = this.score + this.scoreTotal;
  this.reponseNom = "";
  if (this.tour<10) {
    this.tiragePerso();
    }
  else {
    this.router.navigateByUrl('jeuReponse', {
  state: { 
        score: this.score,
        texteResultat: this.texteResultat,
        reponse : this.reponse,
        scoreTotal: this.scoreTotal,
        tour:this.tour,
        jeu:"melange"
   }
      });
    }
  }


}
