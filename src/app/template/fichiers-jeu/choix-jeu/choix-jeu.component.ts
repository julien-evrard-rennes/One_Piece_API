import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choix-jeu',
  standalone: true,
  imports: [],
  templateUrl: './choix-jeu.component.html',
  styleUrl: './choix-jeu.component.scss'
})
export class ChoixJeuComponent implements OnInit{


  constructor(
    private router : Router
  ){ }

  ngOnInit(): void { 
  }

  onCreation() : void {
    this.router.navigateByUrl("/creer");
  }

}

