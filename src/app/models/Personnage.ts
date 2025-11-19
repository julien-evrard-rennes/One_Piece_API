
import { Groupe } from "./groupe";
import { LikeType } from "./like-type.type";
import { PersonnageAPI } from "./PersonnageApi";
import { PersonnageMock } from "./PersonnageMock";

    
    export class Personnage {

        id : number;
        name : string;
        nom : string;
        prenom : string;
        surnom : string;
        particule : string;
        sexe! : string;
        age : number;
        groupes : string[];
        imageUrl?: string;
        job : string;
        size: string;
        birthday : string;
        bounty : string;
        status : string;
        crew : {
        id : number;
        name : string;
        description: string;
        status : string;
        number: string;
        roman_name : string;
        total_prime :  string;
        is_yonko : string;
        };
        fruit : {
        id : number;
        name : string;
        description : string;
        type : string;
        filename : string;
        roman_name : string;
        technicalFile : string;
        }
        groupe: any;

        constructor(
        id : number,
        name : string,
        prenom : string,
        nom : string,
        surnom : string,
        particule : string,
        groupes : string[],
        job : string,
        size: string,
        birthday : string,
        age : number,
        bounty : string,
        status : string,
        crew : {
        id : number,
        name : string,
        description: string,
        status : string,
        number: string,
        roman_name : string,
        total_prime :  string,
        is_yonko : string,
        },
        fruit : {
        id : number,
        name : string,
        description : string,
        type : string,
        filename : string,
        roman_name : string,
        technicalFile : string
        }

      ) {
            this.id = id;
            //this.id = crypto.randomUUID().substring(0, 8);
            this.name = name;
            this.nom = nom;
            this.prenom = prenom;
            this.surnom = surnom;
            this.particule = particule;
            this.groupes = groupes;
            this.job = job;
            this.size = size;
            this.birthday = birthday;
            this.age = age;
            this.bounty = bounty;
            this.status = status;
            this.crew = crew;
            this.fruit = fruit;
                console.log("Personnage : " + this);
        }

           static fromApiAndMock(api: PersonnageAPI, mock: PersonnageMock | null): Personnage {
            return new Personnage(
            api.id ??  0,
            api.name ?? '',
            mock?.nom ?? api.name?.split(" ")[1] ?? "",
            mock?.prenom ?? api.name?.split(" ")[0] ?? "",
            mock?.surnom ?? '',
            mock?.particule ?? '',
            mock?.groupes ?? [],
            api.job ?? '',
            api.size ?? '',
            api.birthday ?? '',
            api.age ?? '',
            mock?.prime ?? api.bounty ?? '',
            api.status ?? '',
            api.crew ?? '',
            api.fruit ?? '',
            );
          }
        

    }

