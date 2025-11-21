import { Injectable } from "@angular/core";
import { PersonnageAPI } from "../models/PersonnageApi";
import { FusionPersonnageService } from "./fusion-personnage-service";
import { Personnage } from "../models/Personnage";
import { map, Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class JeuService {

constructor(private fusionPersoService: FusionPersonnageService) {

}

personnage!: Personnage;
num! : number;
listPerso = this.fusionPersoService.getPersoList();


tiragePerso() : Observable<Personnage> {
    return this.fusionPersoService.getPersoList().pipe(
      map(list => {
        if (!list || list.length === 0) {
          throw new Error("Aucun personnage disponible");
        }
        const randomIndex = Math.floor(Math.random() * list.length);
        return list[randomIndex];
      })
    );
  }

  getAll(): Observable<Personnage[]> {
    return this.fusionPersoService.getPersoList();
  }

}

