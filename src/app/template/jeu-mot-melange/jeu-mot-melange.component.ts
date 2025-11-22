import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personnage } from 'src/app/models/Personnage';
import { ApiPersoService } from 'src/app/services/api-persos-service';
import { FusionPersonnageService } from 'src/app/services/fusion-personnage-service';
import { JeuService } from 'src/app/services/jeu-service';

@Component({
  selector: 'app-jeu-mot-melange',
  standalone: true,
  imports: [],
  templateUrl: './jeu-mot-melange.component.html',
  styleUrl: './jeu-mot-melange.component.scss'
})
export class JeuMotMelangeComponent implements OnInit {

  personnage!: Personnage;
  tableauNom!: string[];
  tableauNomMel!: string[];
  tableauPrenom!: string[];
  tableauPrenomMel!: string[];

  constructor(private jeuService : JeuService, 
  private router: Router) {}

  ngOnInit(): void {
    this.tiragePerso();
    
  }

   tiragePerso()  {
    this.jeuService.tiragePerso().subscribe(p => {
      this.personnage = p;
      this.tableauNom =this.jeuService.getTableauDeLettre(this.personnage.nom);
      this.tableauNomMel= this.jeuService.melangerMot(this.tableauNom);
      this.tableauPrenom =this.jeuService.getTableauDeLettre(this.personnage.prenom);
      this.tableauPrenomMel= this.jeuService.melangerMot(this.tableauPrenom);
    });
    return this.personnage;
  }

}
