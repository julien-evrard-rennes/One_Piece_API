import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  }

tiragePerso() {
    this.jeuService.tiragePerso().subscribe(p => {
      this.personnage = p;
      this.tour++;
      this.isLoading=false;
    });
    return this.personnage;
  }

  

}
