import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from '../../models/groupe';
import { GroupeAPI } from '../../models/groupeApi';
import { Personnage } from '../../models/Personnage';
import { PersonnageAPI } from '../../models/PersonnageApi';
import { PersonnageShort } from '../../models/PersonnageShort';
import { ApiGroupeService } from '../../services/api-groupes-service';
import { FusionGroupeService } from '../../services/fusion-groupe-service';

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
    private groupeService : FusionGroupeService,
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
        console.table(g);
        this.isLoading = false;
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
