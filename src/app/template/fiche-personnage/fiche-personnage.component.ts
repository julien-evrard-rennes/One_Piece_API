import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personnage } from '../../models/Personnage';
import { FusionGroupeService } from '../../services/fusion-groupe-service';
import { FusionPersonnageService } from '../../services/fusion-personnage-service';


@Component({
  selector: 'app-fiche-personnage',
  standalone: true,
  imports: [],
  templateUrl: './fiche-personnage.component.html',
  styleUrls: ['./fiche-personnage.component.scss']
})
export class FichePersonnageComponent implements OnInit {
  private personnagesService = inject(FusionPersonnageService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);


  personnage!: Personnage


  ngOnInit(): void {
    this.getPersonnage();

  }

private getPersonnage() {
  const persoId = this.route.snapshot.params['id'];
  this.personnagesService.getPersonnageById(persoId)
    .subscribe({
      next: (p: Personnage) => {
        this.personnage = p; 
        console.log('Type:', typeof p, '| Valeur:', JSON.stringify(p));
        this.cdr.detectChanges(); 
      },
      error: (err) => console.error('Erreur récupération personnage:', err)
    });
}

  onViewFicheGroupe(idGroupe: number) {
    this.router.navigateByUrl(`groupe/${idGroupe}`);
  }


}


