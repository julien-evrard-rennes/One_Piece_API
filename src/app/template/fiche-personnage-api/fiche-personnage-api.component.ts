import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnageAPI } from '../../models/PersonnageApi';
import { ApiPersoService } from '../../services/api-persos-service';

@Component({
  selector: 'app-fiche-personnage-api',
  standalone: true,
  imports: [],
  templateUrl: './fiche-personnage-api.component.html',
  styleUrl: './fiche-personnage-api.component.scss'
})
export class FichePersonnageApiComponent implements OnInit {
  private apiPersonnagesService = inject(ApiPersoService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);


  personnage!: PersonnageAPI
  personnageAPI: any;

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
