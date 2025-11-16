import { Personnage } from "./Personnage";

export class GroupeMock {
        getGroupeList(): GroupeMock[] {
          throw new Error('Method not implemented.');
        }

        id : number;
        nom : String;
        capitaine! : Personnage;
        membresListe! : Personnage[];
        nbMembres!: number;

        constructor(
        id : number,
        nom : String,
        nbMembres :number) {
            this.id = id;
            this.nom = nom;
            //this.id = crypto.randomUUID().substring(0, 8);
            this.nbMembres = nbMembres;
        }
    }