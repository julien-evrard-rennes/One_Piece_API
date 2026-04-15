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
  name: string;
  capitaine!: PersonnageShort;
  membresListe: PersonnageShort[];

  constructor(
    id: number,
    name: string,
    membresListe: PersonnageShort[],) {
    this.id = id;
    this.name = name;
    //this.id = crypto.randomUUID().substring(0, 8);
    this.membresListe = membresListe;
  }
}