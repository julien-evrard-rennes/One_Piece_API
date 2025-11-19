import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personnage } from 'src/app/models/Personnage';
import { FusionPersonnageService } from 'src/app/services/fusion-personnage-service';

@Component({
  selector: 'app-list-personnages',
  standalone: true,
  imports: [],
  templateUrl: './list-personnages.component.html',
  styleUrl: './list-personnages.component.scss'
})
export class ListPersonnagesComponent implements OnInit {

  personnage!: Personnage;
  persoList!: Personnage[];
  likeButtonText = 'Ajouter un like !';
  isLoading = true; 
  triAscendantNom = true;
  triAscendantAge = true; 
  triAscendantEquipage = true;
  triAscendantStatus = true;
  triAscendantPrime = true; 


  constructor(private fusionPersoService: FusionPersonnageService, 
    private router: Router,) {}

  ngOnInit(): void {
    this.fusionPersoService.getPersoList().subscribe({

      next: (persoList: Personnage[]) => {
        this.persoList = persoList
        console.table(this.persoList)
        this.isLoading = false;
      },
      error: (err: Error) => console.log(err),
      complete: () => console.log('complete'),
    })
  }

  onViewFichePerso(personnage: Personnage) {
    this.router.navigateByUrl(`personnage/${personnage.id}`);
  }

onTrierParNom() {
  const sorted = [...this.persoList].sort((a, b) => {
    const nomA = a.nom_complet?.toLowerCase() ?? "";
    const nomB = b.nom_complet?.toLowerCase() ?? "";

    return this.triAscendantNom
      ? nomA.localeCompare(nomB)
      : nomB.localeCompare(nomA);
  });

  this.persoList = sorted;
  this.triAscendantNom = !this.triAscendantNom;
}  

onTrierParAge() {
  this.persoList.sort((a,b) => {
    const nbC = this.fusionPersoService.extractAge(a.age) ?? 0;
    const nbD = this.fusionPersoService.extractAge(b.age) ?? 0;
    return this.triAscendantAge ? nbC - nbD : nbD - nbC;
  });
  this.triAscendantAge = !this.triAscendantAge;
}

onTrierParEquipage() {
  const sorted = [...this.persoList].sort((a, b) => {
    const nomA = a.crew?.name?.toLowerCase() ?? "";
    const nomB = b.crew?.name?.toLowerCase() ?? "";

    return this.triAscendantEquipage
      ? nomA.localeCompare(nomB)
      : nomB.localeCompare(nomA);
  });

  this.persoList = sorted;
  this.triAscendantEquipage = !this.triAscendantEquipage;
}  

onTrierParStatus() {
  const sorted = [...this.persoList].sort((a, b) => {
    const nomA = a.status?.toLowerCase() ?? "";
    const nomB = b.status?.toLowerCase() ?? "";

    return this.triAscendantStatus
      ? nomA.localeCompare(nomB)
      : nomB.localeCompare(nomA);
  });

  this.persoList = sorted;
  this.triAscendantStatus = !this.triAscendantStatus;
}


onTrierParPrime() {
  this.persoList.sort((a,b) => {
    const nbC = this.fusionPersoService.extractPrime(a.bounty) ?? 0;
    const nbD = this.fusionPersoService.extractPrime(b.bounty) ?? 0;
    return this.triAscendantPrime ? nbC - nbD : nbD - nbC;
  });
  this.triAscendantPrime = !this.triAscendantPrime;
}

}