import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupeAPI } from 'src/app/models/groupeApi';
import { GroupeMock } from 'src/app/models/groupeMock';
import { PersonnageAPI } from 'src/app/models/PersonnageApi';
import { ApiGroupeService } from 'src/app/services/api-groupes-service';
import { ApiPersoService } from 'src/app/services/api-persos-service';
import { MockGroupeService } from 'src/app/services/mock-groupe-service';

@Component({
  selector: 'app-list-groupes-api',
  standalone: true,
  imports: [],
  templateUrl: './list-groupes-api.component.html',
  styleUrl: './list-groupes-api.component.scss'
})
export class ListGroupesApiComponent implements OnInit {

    groupe! : GroupeAPI;
    groupeList! : GroupeAPI[];
    groupeMock! : GroupeMock;
    groupeMockList! : GroupeMock[];
    persosParGroupe: { [id: number]: PersonnageAPI[] } = {};
    persoList: PersonnageAPI[] =[];
    nbMembres: { [id: number]: number } = {};
    triAscendantNom = true;
    triAscendantReel = true; 
    triAscendantNumber = true;
    triAscendantStatus = true;
    triAscendantPrime = true;
    isLoading = true; 

    
      constructor(
        private apiGroupeService: ApiGroupeService, 
        private router: Router,
        private listeGroupeService: MockGroupeService,
        private listePersoService: ApiPersoService,

      ) {}
    
ngOnInit(): void {
  this.isLoading = true;
  this.groupeMockList = this.listeGroupeService.getGroupeList();
  this.apiGroupeService.getGroupesAPI().subscribe({
    next: (groupeList: GroupeAPI[]) => {
      this.groupeList = groupeList;
let loaded = 0;
      groupeList.forEach(groupe => {
        this.apiGroupeService.getPersoList(groupe).subscribe({
          next: (persos) => {
            this.persosParGroupe[groupe.id] = persos;
            this.nbMembres[groupe.id] = this.persosParGroupe[groupe.id].length;
            loaded++;

            if (loaded === groupeList.length) {
              this.isLoading = false; // tout est chargé
            }
          },
          error: (err) => console.error("Erreur persos groupe", groupe.id, err)
        });
      });

    },
    error: (err) => console.error("Erreur récupération groupes : ", err)
  });
}

  onViewFicheGroupe(groupe: GroupeAPI) {
    this.router.navigateByUrl(`groupe/${groupe.id}`);
  }

//

onTrierParNom() {
  const sorted = [...this.groupeList].sort((a, b) => {
    const nomA = a.name?.toLowerCase() ?? "";
    const nomB = b.name?.toLowerCase() ?? "";

    return this.triAscendantNom
      ? nomA.localeCompare(nomB)
      : nomB.localeCompare(nomA);
  });

  this.groupeList = sorted;
  this.triAscendantNom = !this.triAscendantNom;
}

    onTrierParNumber() {
    this.groupeList.sort((a,b) => {
      const nbC = this.apiGroupeService.extractNombre(a.number) ?? 0;
      const nbD = this.apiGroupeService.extractNombre(b.number) ?? 0;
      return this.triAscendantNumber ? nbC - nbD : nbD - nbC;
    });
    this.triAscendantNumber = !this.triAscendantNumber; 
  }

  onTrierParMembresReels() {
    this.groupeList.sort((a, b) => {
      const nbA = this.nbMembres[a.id] ?? 0;
      const nbB = this.nbMembres[b.id] ?? 0;
      return this.triAscendantReel ? nbA - nbB : nbB - nbA;
    });
    this.triAscendantReel = !this.triAscendantReel; 
  }

  onTrierParStatus() {
  const sorted = [...this.groupeList].sort((a, b) => {
    const nomA = a.status?.toLowerCase() ?? "";
    const nomB = b.status?.toLowerCase() ?? "";

    return this.triAscendantStatus
      ? nomA.localeCompare(nomB)
      : nomB.localeCompare(nomA);
  });

  this.groupeList = sorted;
  this.triAscendantStatus = !this.triAscendantStatus;
}

onTrierParPrime() {
  this.groupeList.sort((a,b) => {
    const nbC = this.listePersoService.extractPrime(a.total_prime) ?? 0;
    const nbD = this.listePersoService.extractPrime(b.total_prime) ?? 0;
    return this.triAscendantPrime ? nbC - nbD : nbD - nbC;
  });
  this.triAscendantPrime = !this.triAscendantPrime;
  console.table(this.groupeList);
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


