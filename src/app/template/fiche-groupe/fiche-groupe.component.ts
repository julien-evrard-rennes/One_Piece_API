import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from 'src/app/models/groupe';
import { GroupeAPI } from 'src/app/models/groupeApi';
import { Personnage } from 'src/app/models/Personnage';
import { PersonnageAPI } from 'src/app/models/PersonnageApi';
import { PersonnageShort } from 'src/app/models/PersonnageShort';
import { ApiGroupeService } from 'src/app/services/api-groupes-service';
import { GroupeFusionService } from 'src/app/services/fusion-groupe-service';

@Component({
  selector: 'app-fiche-groupe',
  standalone: true,
  imports: [],
  templateUrl: './fiche-groupe.component.html',
  styleUrl: './fiche-groupe.component.scss'
})
export class FicheGroupeComponent implements OnInit {

  personnage!: PersonnageShort;
  groupe! : Groupe;
  persoList: PersonnageShort[] =[];
  isLoading = true;

  constructor(
    private groupeService : GroupeFusionService,
    private route : ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getGroupe();
  }

  private getGroupe() {
    const groupeId = this.route.snapshot.params['id'];

    this.groupeService.getGroupeById(groupeId).subscribe({
      next: (g: Groupe) => {
        this.groupe =g;
        this.isLoading = false;
      },
      error: (err) => console.error('Erreur récupération groupe:', err)
    });
  }
    
  onViewFichePerso(personnage: PersonnageShort) {
    this.router.navigateByUrl(`personnage/${personnage.id}`);
  }

 /** getPersoList(groupe: GroupeAPI) {
    this.apiGroupeService.getPersoList(groupe).subscribe({
      next: (persoList) => {
        this.persoList = persoList;
      },
      error: (err) => console.error('Erreur récupération personnages :', err)
    });
  }*/ 

}
