import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from '../../models/groupe';
import { PersonnageShort } from '../../models/PersonnageShort';
import { FusionGroupeService } from '../../services/fusion-groupe-service';

@Component({
  selector: 'app-fiche-groupe',
  standalone: true,
  imports: [],
  templateUrl: './fiche-groupe.component.html',
  styleUrl: './fiche-groupe.component.scss'
})
export class FicheGroupeComponent implements OnInit {
  private groupeService = inject(FusionGroupeService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  personnage!: PersonnageShort;
  groupe! : Groupe;
  persoList: PersonnageShort[] =[];
  isLoading = true;

  ngOnInit(): void {
    this.getGroupe();
  }

  private getGroupe() {
    const groupeId = this.route.snapshot.params['id'];

    this.groupeService.getGroupeById(groupeId).subscribe({
      next: (g: Groupe) => {
        this.groupe =g;
        console.log('Type:', typeof g, '| Valeur:', JSON.stringify(g));
        this.isLoading = false;
        this.cdr.detectChanges(); 
      },
      error: (err) => console.error('Erreur récupération groupe:', err)
    });
  }
    
  onViewFichePerso(personnage: PersonnageShort) {
    this.router.navigateByUrl(`personnage/${(Number(personnage.id))}`);
  }

    onViewFicheGroupe(idGroupe: number) {
    this.router.navigateByUrl(`groupe/${idGroupe}`);
  }

 /** 
 getPersoList(groupe: Groupe) {
    this.groupeService.getPersoList(groupe).subscribe({
      next: (persoList) => {
        this.persoList = persoList;
      },
      error: (err) => console.error('Erreur récupération personnages :', err)
    });
  } */ 

}
