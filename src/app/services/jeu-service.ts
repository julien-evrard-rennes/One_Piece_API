import { Injectable } from "@angular/core";
import { PersonnageAPI } from "../models/PersonnageApi";
import { FusionPersonnageService } from "./fusion-personnage-service";
import { Personnage } from "../models/Personnage";
import { map, Observable, of, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { FusionGroupeService } from "./fusion-groupe-service";
import { Groupe } from "../models/groupe";


@Injectable({
  providedIn: 'root'
})
export class JeuService {

constructor(private fusionPersoService: FusionPersonnageService,
            private fusionGroupeService : FusionGroupeService,
            private http: HttpClient) {}

personnage!: Personnage;
num! : number;
listPerso = this.fusionPersoService.getPersoList();
private cache: Personnage[] | null = null;
private cacheG: Groupe[] | null = null;
personnage$!: Observable<Personnage>;

/**
 * Fonction chargée de mettre juste la première lettre en minuscule
 * @param phrase
 * @returns phrase
 */

lowercaseFirstLetter(phrase: string) {
  return phrase.charAt(0).toLowerCase() + phrase.slice(1);
}


/** 
 * Fonction chargée de tirer un personnage au hasard dans la liste des personnages
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
 * Fonction chargée de tirer un groupe au hasard dans la liste des groupes
 * 
 * @returns un observable "Groupe"
 */

tirageGroupe() : Observable<Groupe> {
  if (this.cacheG) {
    return of(this.cacheG[Math.floor(Math.random() * this.cacheG.length)]);
  }

  return this.fusionGroupeService.getGroupeList().pipe(
    tap(list => this.cacheG = list),
    map(list => list[Math.floor(Math.random() * list.length)])
  );
  }

  /** 
 * Fonction chargée de tirer un personnage au hasard dans la liste des personnages
 * 
 * @returns un observable "Personnage" dont l'age n'est pas 0 ou null
 */

tiragePersoAge(): Observable<Personnage> {
  const listSource$ = this.cache ? of(this.cache)
    : this.fusionPersoService.getPersoList().pipe(
        tap(list => this.cache = list)
      );

  return listSource$.pipe(
    map(list => list.filter(p => p.age != null && p.age !== 0 )),
    map(list => {
      if (list.length === 0) {
        throw new Error('Aucun personnage avec un âge valide trouvé.');
      }
      return list[Math.floor(Math.random() * list.length)];
    })
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
    .trim()
    .toLowerCase();
    console.log(mot);
    return mot;
}

  /** 
   * nomenclatureur simplifié pour le tirage
   */

nomenclatureurTirage(mot: string): string {
    mot = mot.normalize("NFD")               // sépare les accents
    .replace(/[\u0300-\u036f]/g, "")// supprime les accents
        .trim()
    return mot;
}

// FONCTIONS AYANT TRAIT AU JEU DES NOMS MÉLANGÉS 

/**
 * Fonction changeant un mot en un tableau de lettre en majuscule et sans accent
 * 
 */

getTableauDeLettre(mot : string) : string[] {
  mot = this.nomenclatureurTirage(mot);
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
 const tableauFinal = [...tableauOriginal];
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

comparerResultat(reponseNom: string, PersonnageATrouver: Personnage): string {
  let nom = '';
  let prenom = '';

  if (
    this.nomenclatureur(reponseNom) == this.nomenclatureur(PersonnageATrouver.nom_complet) ||
    this.nomenclatureur(reponseNom) == this.nomenclatureur(PersonnageATrouver.nom + PersonnageATrouver.particule + PersonnageATrouver.prenom)
  ) {
    return "Complet";
  }

  if (reponseNom.includes(" ")) {
    nom    = reponseNom.split(" ")[0];
    prenom = reponseNom.split(" ")[1];
  }

  if (
    (this.nomenclatureur(reponseNom) == this.nomenclatureur(PersonnageATrouver.nom)) ||
    (this.nomenclatureur(nom).includes(this.nomenclatureur(PersonnageATrouver.nom)) && PersonnageATrouver.nom != '')
  ) {
    return "Nom";
  }

  if (
    (this.nomenclatureur(reponseNom) == this.nomenclatureur(PersonnageATrouver.prenom)) ||
    (this.nomenclatureur(prenom).includes(this.nomenclatureur(PersonnageATrouver.prenom)) && PersonnageATrouver.prenom != '')
  ) {
    return "Prenom";
  }

  return "Perdu";
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

// FONCTIONS AYANT TRAIT AU JEU DES ÉQUIPAGES

/**
 * Fonction qui permet de comparer si la réponse donné au jeu est bonne ou pas. 
 * @param reponse 
 * @param personnage 
 * @param groupe 
 */

comparerResultatEquipage(reponse: string, personnage: Personnage, groupe: Groupe): string {
  if (personnage.crew.id == groupe.id){
    if (reponse == "oui") {
      return "gagné"
    }
    else return "perdu"
  }
  else {
    if (reponse == "non"){
      return "gagné"
    }
    else if (reponse == "oui") {
      return "perdu"
    }
    else {
      return "Erreur 404"
    }
  }
}

/**
 * Fonction qui permet de générer une phrase de réponse
 * @param resultat 
 * @param reponse 
 * @param personnage 
 * @param groupe 
 * @returns 
 */

getTextResultatEquipage(resultat: string, reponse: string, personnage: Personnage, groupe: Groupe, ): string {
  if (resultat=="gagné" && reponse=="oui"){
    return personnage.nom_complet + " fait effectivement partie de " + this.lowercaseFirstLetter(groupe.name);
  }
  else if (resultat=="gagné" && reponse=="non" ){
    return "Bravo, " + personnage.nom_complet + " n'a jamais fait partie de " + this.lowercaseFirstLetter(groupe.name);
  }
  else if (resultat=="perdu" && reponse=="oui" ) {
    return "Dommage, " + personnage.nom_complet + " n'a jamais fait partie de " + this.lowercaseFirstLetter(groupe.name);
  }
  else if (resultat=="perdu" && reponse=="non" ) {
    return "Hélas" + personnage.nom_complet + " a bien fait partie de " + this.lowercaseFirstLetter(groupe.name); 
  }
  else return "Erreur 404"
}



// FONCTIONS AYANT TRAIT AU JEU DES AGES


/**
 * 
 * @param reponse 
 * @param personnage 
 * @param personnage1 
 * @param personnage2 
 */

comparerResultatAge(reponse: string, personnage: Personnage, personnage2: Personnage): string {
  if (personnage.age == personnage2.age) {
    if (reponse == "memeAge") {
      return "gagné"
    }
    else return "perdu"
  }
  else if (personnage.age > personnage2.age){
    if (reponse == "plusVieux"){
      return "gagné"
    }
    else return "perdu"
  }
  else if (personnage.age < personnage2.age){
    if (reponse == "plusJeune"){
      return "gagné"
    }
    else return "perdu"
  }
  else return "Erreur 404" 
}

/**
 * 
 * @param resultat 
 * @param reponse 
 * @param personnage 
 * @param personnage2 
 */

getTextResultatAge(resultat: string, personnage: Personnage, personnage2: Personnage): string {
  let debutPhrase =''
  if (resultat=="gagné"){
    debutPhrase = "Oui, effectivement " + personnage.nom_complet + " " 
  }
  else if (resultat == "perdu"){
    debutPhrase = "Hélas, " + personnage.nom_complet + " "
  }

  if (personnage.age == personnage2.age) {
    return debutPhrase + "a le même âge que " + personnage2.nom_complet + " (" + personnage.age + " ans)"
  }
  else if (personnage.age > personnage2.age) {
    return debutPhrase + "(" + personnage.age + " ans)" + " est plus âgé que " + personnage2.nom_complet + " (" + personnage2.age + " ans)"
  }
  else if (personnage.age < personnage2.age) {
    return debutPhrase + "(" + personnage.age + " ans)" + " est plus jeune que " + personnage2.nom_complet + " (" + personnage2.age + " ans)"
  }
  else return "Erreur 404"
  
}

/**
 * Fonction pour générer le score 
 * @param resultat 
 * @returns 
 */

getScore2(resultat: string): number {
    if (resultat=="gagné"){
    return 10
  }
  else {
    return 0
  }
}


}


