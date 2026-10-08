import { PersonnageShort } from "./PersonnageShort";


export class GroupeDb {
  withCapitaine(capitaine: PersonnageShort): GroupeDb {
    this.setCapitaine(capitaine);
    return this;
  }
  setCapitaine(capitaine: PersonnageShort) {
    this.capitaine = capitaine;
  }

  id: number;
  nom: string;
  preposition: string;
  type!: string;
  notoriete: number;
  capitaine!: PersonnageShort;
  membresListe: PersonnageShort[];

  constructor(
    id: number,
    nom: string,
    preposition:string,
    notoriete:number,
    membresListe: PersonnageShort[],) {
    this.id = (Number(id));
    this.nom = nom;
    this.preposition = preposition;
    this.notoriete = notoriete;
    this.membresListe = membresListe;
  }
}