import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { PersonnageAPI } from 'src/app/models/PersonnageApi';
import { ApiPersoService } from 'src/app/services/api-persos-service';
import { MockGroupeService } from 'src/app/services/mock-groupe-service';

@Component({
  selector: 'app-fiche-personnage-api',
  standalone: true,
  imports: [],
  templateUrl: './fiche-personnage-api.component.html',
  styleUrl: './fiche-personnage-api.component.scss'
})
export class FichePersonnageApiComponent {

  personnage!: PersonnageAPI

  constructor(
    private apiPersonnagesService: ApiPersoService,
    private listeGroupeService: MockGroupeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPersonnage();
  }

private getPersonnage() {
  const persoId = this.route.snapshot.params['id'];
  this.apiPersonnagesService.getPersonnageById(persoId)
    .subscribe({
      next: (p: PersonnageAPI) => {
        this.personnage = p; 
        console.log(this.personnage);
      },
      error: (err) => console.error('Erreur récupération personnage:', err)
    });
}

  onViewFicheGroupe(idGroupe: number) {
    this.router.navigateByUrl(`groupe/${idGroupe}`);
  }


}
