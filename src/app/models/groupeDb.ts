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
  capitaine!: PersonnageShort;
  membresListe: PersonnageShort[];

  constructor(
    id: number,
    nom: string,
    preposition:string,
    membresListe: PersonnageShort[],) {
    this.id = (Number(id));
    this.nom = nom;
    this.preposition =preposition;
    this.membresListe = membresListe;
  }
}