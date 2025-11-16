import { GroupeAPI } from "./groupeApi";
import { GroupeMock } from "./groupeMock";
import { Personnage } from "./Personnage";


export class Groupe {
        getGroupeList(): Groupe[] {
          throw new Error('Method not implemented.');
        }
        id : number;
        name : string;
        description: string;
        status : string;
        number: string;
        roman_name : string;
        total_prime :  string;
        is_yonko : string;
        capitaine! : Personnage;
        membresListe! : Personnage[];
        nbMembres: number;

        constructor(
        id : number,
        name : string,
        description: string,
        status : string,
        number: string,
        roman_name : string,
        total_prime :  string,
        is_yonko : string,
        nbMembres :number,
      ) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.status = status;
            this.number = number;
            this.roman_name = roman_name;
            this.total_prime = total_prime;
            this.is_yonko = is_yonko;
            this.nbMembres = nbMembres;
        }

    static fromApiAndMock(api: GroupeAPI, mock: GroupeMock): Groupe {
    return new Groupe(
      mock.id ?? api.id ?? 0,
      api.name ?? '',
      api.description ?? '',
      api.status ?? '',
      api.number ?? '',
      api.roman_name ?? '',
      api.total_prime ?? '',
      api.is_yonko ?? '',
      mock.nbMembres ?? 0
    );
  }


    }