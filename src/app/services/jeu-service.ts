import { Injectable } from "@angular/core";
import { PersonnageAPI } from "../models/PersonnageApi";
import { ApiPersoService } from "./api-persos-service";


@Injectable({
  providedIn: 'root'
})
export class JeuService {

constructor(private listePersoService: ApiPersoService) {

}

personnage!: PersonnageAPI;
num! : number;
listPerso = this.listePersoService.getPersos();

tiragechiffre()  {
  Math.random() 
}

tiragePerso() : PersonnageAPI {

  const num = 12;
  
  this.listePersoService.getPersonnageById(num)
    .subscribe({
      next: (p: PersonnageAPI) => {
        this.personnage = p; 
        console.log(this.personnage);
      },
      error: (err) => console.error('Erreur récupération personnage:', err)
    });
    console.table(this.personnage);
    return this.personnage;
}


}

