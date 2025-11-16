import { GroupeAPI } from "./groupeApi";
import { GroupeMock } from "./groupeMock";
import { Personnage } from "./Personnage";
import { PersonnageShort } from "./PersonnageShort";


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
        capitaine! : PersonnageShort;
        membresListe : PersonnageShort[];
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
        capitaine : PersonnageShort,
        membresListe : PersonnageShort[],
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
            this.capitaine = capitaine;
            this.membresListe =membresListe;
            this.nbMembres = nbMembres;
        }

    static fromApiAndMock(api: GroupeAPI, mock: GroupeMock): Groupe {
    return new Groupe(
      mock.id ?? api.id ?? 0,
      mock.name ?? api.name ?? '',
      api.description ?? '',
      api.status ?? '',
      api.number ?? '',
      api.roman_name ?? '',
      api.total_prime ?? '',
      api.is_yonko ?? '',
      mock.capitaine ?? new PersonnageShort(0, ''),
      mock.membresListe ?? [],
      mock.nbMembres ?? 0,
    );
  }

  }