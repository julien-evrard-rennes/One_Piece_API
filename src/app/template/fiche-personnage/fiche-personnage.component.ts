import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personnage } from 'src/app/models/Personnage';
import { FusionGroupeService } from 'src/app/services/fusion-groupe-service';
import { FusionPersonnageService } from 'src/app/services/fusion-personnage-service';


@Component({
  selector: 'app-fiche-personnage',
  standalone: true,
  imports: [],
  templateUrl: './fiche-personnage.component.html',
  styleUrls: ['./fiche-personnage.component.scss']
})
export class FichePersonnageComponent implements OnInit {

  personnage!: Personnage

  constructor(
    private personnagesService: FusionPersonnageService,
    private groupeService: FusionGroupeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPersonnage();
  }

private getPersonnage() {
  const persoId = this.route.snapshot.params['id'];
  this.personnagesService.getPersonnageById(persoId)
    .subscribe({
      next: (p: Personnage) => {
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


