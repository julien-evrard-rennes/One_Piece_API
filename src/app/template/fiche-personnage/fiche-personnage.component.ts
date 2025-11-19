import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from 'src/app/models/groupe';
import { Personnage } from 'src/app/models/Personnage';
import { FusionPersonnageService } from 'src/app/services/fusion-personnage-service';
import { MockGroupeService } from 'src/app/services/mock-groupe-service';


@Component({
  selector: 'app-fiche-personnage',
  standalone: true,
  imports: [],
  templateUrl: './fiche-personnage.component.html',
  styleUrls: ['./fiche-personnage.component.scss']
})
export class FichePersonnageComponent implements OnInit {

  personnage!: Personnage;
  likeButtonText!: string;
  userHasLiked!: boolean;

  constructor(
    private listePersonnagesService: FusionPersonnageService,
    private listeGroupeService: MockGroupeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getPersonnage();
  }

  private prepareInterface() {
    this.userHasLiked = false;
  }

  private getPersonnage() {
    const persoId = this.route.snapshot.params['id'];
    this.listePersonnagesService.getPersonnageById(persoId).subscribe({
      next: (p: Personnage) => {
        this.personnage =p;
        console.table(p);
      },
      error: (err) => console.error('Erreur récupération groupe:', err)
    });
  }

    onViewFicheGroupe(nom: String) {
    const groupe = this.listeGroupeService.getGroupeByName(nom)
    const idNum = Number(groupe.id);
    this.router.navigateByUrl(`groupe/${idNum}`);
  }




}

