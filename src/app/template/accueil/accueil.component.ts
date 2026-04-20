import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{

ngOnInit(): void {
  console.log('Production ?', environment.production);
  console.log('API URL :', environment.API_PERSO_OP);
}


}

