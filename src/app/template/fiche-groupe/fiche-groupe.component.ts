import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from 'src/app/models/groupe';
import { Personnage } from 'src/app/models/PersonnageMock';
import { ListeGroupeService } from 'src/app/services/mock-groupe-service';

@Component({
  selector: 'app-fiche-groupe',
  standalone: true,
  imports: [],
  templateUrl: './fiche-groupe.component.html',
  styleUrl: './fiche-groupe.component.scss'
})
export class FicheGroupeComponent implements OnInit{

  personnage!: Personnage;
  groupe! : Groupe;
  
  constructor(
    private listeGroupeService : ListeGroupeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getGroupe();
  }

private getGroupe(){
  const groupeId = this.route.snapshot.params['id'];
  this.groupe = this.listeGroupeService.getGroupeById(groupeId);
}

  onViewFichePerso(personnage: Personnage) {
    this.router.navigateByUrl(`personnage/${personnage.id}`);
  }

}
