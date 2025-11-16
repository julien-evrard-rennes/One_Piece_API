import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, map } from 'rxjs';
import { Groupe } from 'src/app/models/groupe';
import { GroupeAPI } from 'src/app/models/groupeApi';
import { GroupeMock } from 'src/app/models/groupeMock';
import { PersonnageAPI } from 'src/app/models/PersonnageApi';
import { ApiGroupeService } from 'src/app/services/api-groupes-service';
import { ApiPersoService } from 'src/app/services/api-persos-service';
import { GroupeFusionService } from 'src/app/services/fusion-groupe-service';
import { MockGroupeService } from 'src/app/services/mock-groupe-service';

@Component({
  selector: 'app-list-groupes',
  standalone: true,
  imports: [],
  templateUrl: './list-groupes.component.html',
  styleUrl: './list-groupes.component.scss'
})
export class ListeGroupesComponent implements OnInit {

  groupe!: Groupe;
  groupeList!: Groupe[];
  persoList: PersonnageAPI[] = [];
  triAscendantNom = true;
  triAscendantReel = true;
  triAscendantNumber = true;
  triAscendantStatus = true;
  triAscendantPrime = true;
  isLoading = true;

  constructor(
    private apiGroupeService: ApiGroupeService,
    private fusionGroupeService: GroupeFusionService,
    private router: Router,
    private listeGroupeService: MockGroupeService,
    private listePersoService: ApiPersoService,

  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.fusionGroupeService.getGroupeList().subscribe({
      next: (groupeList: Groupe[]) => {
        this.groupeList = groupeList;
      }
    });
    this.isLoading = false;
  }


  onViewFicheGroupe(groupe: Groupe) {
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
    this.groupeList.sort((a, b) => {
      const nbC = this.apiGroupeService.extractNombre(a.number) ?? 0;
      const nbD = this.apiGroupeService.extractNombre(b.number) ?? 0;
      return this.triAscendantNumber ? nbC - nbD : nbD - nbC;
    });
    this.triAscendantNumber = !this.triAscendantNumber;
  }

  onTrierParMembresReels() {
    this.groupeList.sort((a, b) => {
      const nbA = a.nbMembres ?? 0;
      const nbB = b.nbMembres ?? 0;
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
    this.groupeList.sort((a, b) => {
      const nbC = this.listePersoService.extractPrime(a.total_prime) ?? 0;
      const nbD = this.listePersoService.extractPrime(b.total_prime) ?? 0;
      return this.triAscendantPrime ? nbC - nbD : nbD - nbC;
    });
    this.triAscendantPrime = !this.triAscendantPrime;
    console.table(this.groupeList);
  }



}