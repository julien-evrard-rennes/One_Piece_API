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

  constructor(private listePersoService: FusionPersonnageService,
  private jeuService : JeuService, 
  private router: Router) {}

  ngOnInit(): void {
    this.personnage = this.tiragePerso();
  }

   tiragePerso(): Personnage {
    this.jeuService.tiragePerso().subscribe(p => {
      this.personnage = p;
      console.log("Personnage tiré au sort :", p);
    });
    return this.personnage;
  }


}
