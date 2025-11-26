import { Injectable } from "@angular/core";
import { PersonnageAPI } from "../models/PersonnageApi";
import { FusionPersonnageService } from "./fusion-personnage-service";
import { Personnage } from "../models/Personnage";
import { map, Observable, of, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class JeuService {


constructor(private fusionPersoService: FusionPersonnageService,
            private http: HttpClient) {}

personnage!: Personnage;
num! : number;
listPerso = this.fusionPersoService.getPersoList();
private cache: Personnage[] | null = null;
personnage$!: Observable<Personnage>;


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
   * Fonction permettant de retourner un mot en supprimant les espaces, les signes et 
   * en le passant en minuscule afin que la comparaison puisse être possible. 
   */

nomenclatureur(mot: string): string {
  mot = mot
    .normalize("NFD")               // sépare les accents
    .replace(/[\u0300-\u036f]/g, "")// supprime les accents
    .replace(/\s+/g, "")            // supprime espaces
    .replace(/\p{P}/gu, "")         // supprime ponctuation
    .toLowerCase();
    console.log(mot);
    return mot;
}

/**
 * Fonction changeant un mot en un tableau de lettre en majuscule et sans accent
 * 
 */

getTableauDeLettre(mot : string) : string[] {
  mot = this.nomenclatureur(mot);
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
 * Fonction permettant de comparer la réponse entrée par l'utilisateur 
 * et les noms et prénoms du personnage à deviner
 * @param reponseNom 
 * @param PersonnageATrouver 
 * @returns un string avec une appréciation selon l'élément trouvé
 */

comparerResultat(reponseNom : string, PersonnageATrouver : Personnage) : string {
  if (this.nomenclatureur(reponseNom) == this.nomenclatureur(PersonnageATrouver.nom_complet) || 
    this.nomenclatureur(reponseNom) == this.nomenclatureur(PersonnageATrouver.nom + PersonnageATrouver.particule + PersonnageATrouver.prenom)){
    return "Complet"
  }
  if (this.nomenclatureur(reponseNom) != ''){
    if (this.nomenclatureur(reponseNom) == this.nomenclatureur(PersonnageATrouver.nom)){
    return "Nom"
  }
    else if ((this.nomenclatureur(reponseNom) == this.nomenclatureur(PersonnageATrouver.prenom)) && reponseNom != '' ||
          this.nomenclatureur(reponseNom) == this.nomenclatureur(PersonnageATrouver.surnom)){
    return "Prenom"
  }
  else {
    return "Perdu"
  }
}
  else{
  return "Perdu"
  }
}

/**
 * Fonction permettant de générer un texte à afficher en fonction des différents résultats au jeu
 */
getTextResultat(resultat: string): string {
  if (resultat=="Complet"){
    return "Vous avez trouvé son nom complet."
  }
  else if (resultat=="Nom"){
    return "Vous avez juste trouvé son nom."
  }
  else if (resultat=="Prenom") {
    return "Vous avez juste trouvé son prénom."
  }
  else {
    return "Perdu"
  }
}

getScore(resultat:string): number {
    if (resultat=="Complet"){
    return 10
  }
  else if (resultat=="Nom" || resultat=="Prenom"){
    return 5
  }
  else {
    return 0
  }
}


}

