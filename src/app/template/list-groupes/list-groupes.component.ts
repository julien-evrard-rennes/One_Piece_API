import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Groupe } from 'src/app/models/groupe';
import { ListeGroupeService } from 'src/app/services/mock-groupe-service';

@Component({
  selector: 'app-list-groupes',
  templateUrl: './list-groupes.component.html',
  styleUrl: './list-groupes.component.scss'
})
export class ListGroupesComponent implements OnInit {

  groupe! : Groupe;
  groupeList! : Groupe[];

  constructor(private listeGroupeService: ListeGroupeService, private router: Router) {}

  ngOnInit(): void {
    this.groupeList = this.listeGroupeService.getGroupeList();
  }

  onViewFicheGroupe(groupe: Groupe) {
    this.router.navigateByUrl(`groupe/${groupe.id}`);
  }
}