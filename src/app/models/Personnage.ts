
import { Groupe } from "./groupe";
import { LikeType } from "./like-type.type";

    
    export class Personnage {

        id : number;
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
            this.nom = nom;
            this.prenom = prenom;
            this.surnom = surnom;
            this.particule = particule;
            this.age = age;
            this.groupes = groupes;
            this.job = job;
            this.size = size;
            this.birthday = birthday;
            this.age = age;
            this.bounty = bounty;
            this.status = status;
            this.crew = crew;
            this.fruit = fruit;
                console.log(this);
        }

    }

