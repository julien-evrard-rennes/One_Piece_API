import { Personnage } from "./Personnage";
import { PersonnageShort } from "./PersonnageShort";


export class GroupeMock {
        getGroupeList(): GroupeMock[] {
          throw new Error('Method not implemented.');
        }

        id : number;
        nom : String;
        capitaine! : Personnage;
        membresListe : PersonnageShort[];
        nbMembres : number;

        constructor(
        id : number,
        nom : String,
        membresListe : PersonnageShort[],
        nbMembres :number) {
            this.id = id;
            this.nom = nom;
            //this.id = crypto.randomUUID().substring(0, 8);
            this.membresListe = membresListe;
            this.nbMembres = nbMembres;
        }
    }