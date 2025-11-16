import { Personnage } from "./Personnage";
import { PersonnageShort } from "./PersonnageShort";


export class GroupeMock {
  withCapitaine(capitaine: PersonnageShort): GroupeMock {
    this.setCapitaine(capitaine);
    return this;
  }
  setCapitaine(capitaine: PersonnageShort) {
    this.capitaine = capitaine;
  }

  id: number;
  nom: String;
  capitaine!: PersonnageShort;
  membresListe: PersonnageShort[];
  nbMembres: number;

  constructor(
    id: number,
    nom: String,
    membresListe: PersonnageShort[],
    nbMembres: number) {
    this.id = id;
    this.nom = nom;
    //this.id = crypto.randomUUID().substring(0, 8);
    this.membresListe = membresListe;
    this.nbMembres = nbMembres;
  }
}