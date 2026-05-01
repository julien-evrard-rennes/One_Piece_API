import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from '../../models/groupe';
import { GroupeAPI } from '../../models/groupeApi';
import { PersonnageAPI } from '../../models/PersonnageApi';
import { ApiGroupeService } from '../../services/api-groupes-service';

@Component({
  selector: 'app-fiche-groupe-api',
  standalone: true,
  imports: [],
  templateUrl: './fiche-groupe-api.component.html',
  styleUrl: './fiche-groupe-api.component.scss'
})
export class FicheGroupeApiComponent implements OnInit {
  private apiGroupeService = inject(ApiGroupeService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);


  personnage!: PersonnageAPI;
  groupeAPI! : Groupe;
  persoList: PersonnageAPI[] =[];
  isLoading = true;
  component: GroupeAPI | undefined;


  ngOnInit(): void {
    this.getGroupe();
  }

  private getGroupe() {
    const groupeId = this.route.snapshot.params['id'];

    this.apiGroupeService.getGroupeById(groupeId).subscribe({
      next: () => {
        this.getPersoList(this.groupeAPI);
      },
      error: (err) => console.error('Erreur récupération groupe:', err)
    });
  }
    
  onViewFichePerso(personnage: PersonnageAPI) {
    this.router.navigateByUrl(`personnage/${personnage.id}`);
  }

  getPersoList(groupe: GroupeAPI) {
    this.apiGroupeService.getPersoList(groupe).subscribe({
      next: (persoList) => {
        this.persoList = persoList;
      },
      error: (err) => console.error('Erreur récupération personnages :', err)
    });
  }

}

