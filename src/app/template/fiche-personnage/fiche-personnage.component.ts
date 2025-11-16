import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from 'src/app/models/groupe';
import { PersonnageMock } from 'src/app/models/PersonnageMock';
import { MockGroupeService } from 'src/app/services/mock-groupe-service';
import { ListePersoService } from 'src/app/services/mock-perso-service';

@Component({
  selector: 'app-fiche-personnage',
  standalone: true,
  imports: [],
  templateUrl: './fiche-personnage.component.html',
  styleUrls: ['./fiche-personnage.component.scss']
})
export class FichePersonnageComponent implements OnInit {

  personnage!: PersonnageMock;
  likeButtonText!: string;
  userHasLiked!: boolean;

  constructor(
    private listePersonnagesService: ListePersoService,
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
    this.personnage = this.listePersonnagesService.getPersonnageById(persoId);
  }

    onViewFicheGroupe(nom: String) {
    const groupe = this.listeGroupeService.getGroupeByName(nom)
    const idNum = Number(groupe.id);
    this.router.navigateByUrl(`groupe/${idNum}`);
  }

  onAddLike(personnage: PersonnageMock): void {
    if (!personnage) {
      console.error('personnage undefined !');
      return;
    }

    if (personnage.userHasLiked) {
      this.unLike(personnage);
    } else {
      this.like(personnage);
    }
  }

  like(personnage: PersonnageMock) {
    this.listePersonnagesService.LikeById(personnage.id, 'unlike');
    personnage.userHasLiked = true;
    personnage.likeButtonText = 'Enlever un like !';
  }

  unLike(personnage: PersonnageMock) {
    this.listePersonnagesService.LikeById(personnage.id, 'like');
    personnage.userHasLiked = false;
    personnage.likeButtonText = 'Ajouter un like !';
  }


}

