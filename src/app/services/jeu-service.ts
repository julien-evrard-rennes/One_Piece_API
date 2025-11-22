import { Injectable } from "@angular/core";
import { PersonnageAPI } from "../models/PersonnageApi";
import { FusionPersonnageService } from "./fusion-personnage-service";
import { Personnage } from "../models/Personnage";
import { map, Observable, of, tap } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class JeuService {

constructor(private fusionPersoService: FusionPersonnageService) {

}

personnage!: Personnage;
num! : number;
listPerso = this.fusionPersoService.getPersoList();
private cache: Personnage[] | null = null;


/** 
 * Methode chargée de tirer un personnage au hasard dans la liste des personnages
 * 
 * @returns un observable "Personnage"
 */

tiragePerso() : Observable<Personnage> {
  if (this.cache) {
    return of(this.cache[Math.floor(Math.random() * this.cache.length)]);
  }

  return this.fusionPersoService.getPersoList().pipe(
    tap(list => this.cache = list),
    map(list => list[Math.floor(Math.random() * list.length)])
  );
  }

/**
 * Fonction changeant un mot en un tableau de lettre en majuscule et sans accent
 * 
 */

getTableauDeLettre(mot : string) : string[] {
  mot = mot.replaceAll("\\s", "");
  const tableau = Array.from(mot.toUpperCase());
  return tableau ;
}

    /** 
    public char[] nomemclature(String nomusuel) {
        char accents[][] = {{'é', 'è', 'ê', 'à', 'ù', 'û', 'ô', 'É', 'Ê', 'ë', 'â', 'î', 'ï', 'ç',},
                {'e', 'e', 'e', 'a', 'u', 'u', 'o', 'e', 'e', 'e', 'a', 'i', 'i', 'c',}};
        // Matrice de correspondance des caractères accentués en caractères sans accent
        for (int j = 0; j < accents[0].length; j++) {
            chaineSaisie = chaineSaisie.replace(accents[0][j], accents[1][j]);
        }
        return mot;
    } */

/**
 * Fonction melangeant un tableau de mot
 * 
 */

melangerMot(tableauOriginal : string[]) : string[] {
  // clonage du tableau
 const tableauFinal = tableauOriginal;
  // Echanges de position de caractères
        for (let i = 0; i < tableauFinal.length * 4; i++) {
            let p1 = Math.floor(Math.random() *tableauFinal.length);
            let p2 = Math.floor(Math.random() *tableauFinal.length);
            let tmp = tableauFinal[p1];
            tableauFinal[p1] = tableauFinal[p2];
            tableauFinal[p2] = tmp;
        }

  return tableauFinal ;
}



 /**

    public char[] melanger(char[] mot) {
        // clonage du tableau
        char[] mel = new char[mot.length];
        for (int i = 0; i < mel.length; i++) {
            mel[i] = mot[i];
        }

        // Echanges de position de caractères
        for (int i = 0; i < mel.length * 4; i++) {
            int p1 = r.nextInt(mel.length);
            int p2 = r.nextInt(mel.length);
            char tmp = mel[p1];
            mel[p1] = mel[p2];
            mel[p2] = tmp;
        }
        return mel;
    }

  */




/**
 * Méthode chargée de faire la liste de tous les personnages présent
 * 
 * @returns liste de personnages
 */

getAll(): Observable<Personnage[]> {
    return this.fusionPersoService.getPersoList();
  }

}

