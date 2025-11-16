import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonnageAPI } from 'src/app/models/PersonnageApi';
import { ChangeDetectorRef } from '@angular/core';
import { ApiPersoService } from 'src/app/services/api-persos-service';

@Component({
  selector: 'app-liste-personnages',
  templateUrl: './list-personnages-api.component.html',
  styleUrls: ['./list-personnages-api.component.scss']
})
export class ListPersonnagesApiComponent implements OnInit {

  personnage!: PersonnageAPI;
  persoList!: PersonnageAPI[];
  likeButtonText = 'Ajouter un like !';
  isLoading = true; 
  triAscendantNom = true;
  triAscendantAge = true; 
  triAscendantEquipage = true;
  triAscendantStatus = true;
  triAscendantPrime = true; 


  constructor(private listePersoService: ApiPersoService, 
    private router: Router,) {}

  ngOnInit(): void {
    this.listePersoService.getPersos().subscribe({

      next: (persoList: PersonnageAPI[]) => {
        this.persoList = persoList
        console.table(this.persoList)
        this.isLoading = false;
      },
      error: (err: Error) => console.log(err),
      complete: () => console.log('complete'),
    })
  }

  onViewFichePerso(personnage: PersonnageAPI) {
    this.router.navigateByUrl(`personnage/${personnage.id}`);
  }

onTrierParNom() {
  const sorted = [...this.persoList].sort((a, b) => {
    const nomA = a.name?.toLowerCase() ?? "";
    const nomB = b.name?.toLowerCase() ?? "";

    return this.triAscendantNom
      ? nomA.localeCompare(nomB)
      : nomB.localeCompare(nomA);
  });

  this.persoList = sorted;
  this.triAscendantNom = !this.triAscendantNom;
}  

onTrierParAge() {
  this.persoList.sort((a,b) => {
    const nbC = this.listePersoService.extractAge(a.age) ?? 0;
    const nbD = this.listePersoService.extractAge(b.age) ?? 0;
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
    const nbC = this.listePersoService.extractPrime(a.bounty) ?? 0;
    const nbD = this.listePersoService.extractPrime(b.bounty) ?? 0;
    return this.triAscendantPrime ? nbC - nbD : nbD - nbC;
  });
  this.triAscendantPrime = !this.triAscendantPrime;
}

}