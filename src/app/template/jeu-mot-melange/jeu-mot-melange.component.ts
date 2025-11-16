import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonnageAPI } from 'src/app/models/PersonnageApi';
import { ApiPersoService } from 'src/app/services/api-persos-service';
import { JeuService } from 'src/app/services/jeu-service';

@Component({
  selector: 'app-jeu-mot-melange',
  standalone: true,
  imports: [],
  templateUrl: './jeu-mot-melange.component.html',
  styleUrl: './jeu-mot-melange.component.scss'
})
export class JeuMotMelangeComponent {

  personnage!: PersonnageAPI;

  constructor(private listeApiPersoService: ApiPersoService,
  private jeuService : JeuService, 
  private router: Router) {}

  ngOnInit(): void {
    this.personnage = this.jeuService.tiragePerso();
  }

}
