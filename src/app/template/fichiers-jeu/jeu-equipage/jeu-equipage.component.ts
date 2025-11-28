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

    constructor(private jeuService : JeuService, 
    private router: Router) {}


    ngOnInit(): void {
      this.tiragePerso();
      this.tirageGroupe();
    }

tiragePerso() {
    this.jeuService.tiragePerso().subscribe(p => {
      this.personnage = p;
    })
  }

  tirageGroupe(){
    this.jeuService.tirageGroupe().subscribe(g => {
      this.groupe = g;
      console.log(this.groupe);
      this.tour++;
      this.isLoading=false;
      this.nomDuGroupe=this.jeuService.lowercaseFirstLetter(this.groupe.name);
    });
  }

  

}
