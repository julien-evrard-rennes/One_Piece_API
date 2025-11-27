import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeu-equipage',
  standalone: true,
  imports: [],
  templateUrl: './jeu-equipage.component.html',
  styleUrl: './jeu-equipage.component.scss'
})
export class JeuEquipageComponent implements OnInit {

  isLoading = true;

  resultat!: string;
  reponse!: string;
  texteResultat!: string;
  score: number = 0;
  scoreTotal: number = 0;
  tour: number =0;


    ngOnInit(): void {
  }

}
