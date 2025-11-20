
import { FusionPersonnageService } from "../services/fusion-personnage-service";
import { Groupe } from "./groupe";
import { LikeType } from "./like-type.type";
import { PersonnageAPI } from "./PersonnageApi";
import { PersonnageMock } from "./PersonnageMock";


    
    export class Personnage {
        id : number;
        nom_complet : string;
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
        nom_complet : string,
        nom : string,
        prenom : string,
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
            this.nom_complet = nom_complet;
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
            mock?.nom ?? this.nomCompletToNom(api.name) ?? "",
            mock?.prenom ?? this.nomCompletToPrenom(api.name) ?? "",
            mock?.surnom ?? '',
            mock?.particule ?? this.nomCompletToParticule(api.name) ?? '',
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

        static nomCompletToNom(name: string): string{
          var nom = "-----";
          if (name.includes(" ")) {
          nom = name?.split(" ")[0];
          }
            return nom ;
        }

        static nomCompletToPrenom(name: string): string{
          var prenom = name;
          var secondprenom = '';
          if (name.includes(" ")) {
            prenom = name?.split(" ")[1];
            if (prenom == "/" ){
              prenom = name?.split(" ")[2];
              }
            if ((name?.split(" ")[2])!= null && name?.split(" ")[2] != "/"  ) {
              secondprenom = ' ' + (name?.split(" ")[2]);
            }
          }

          if (name.includes("D.")){
            prenom = (
              (name?.split(" ")[2])
            );
            if ((name?.split(" ")[3])!= null && name?.split(" ")[3] != "/"){
              secondprenom = ' ' + (name?.split(" ")[3]);
            }
            else {
              secondprenom = '';
            }
          }

          return prenom + secondprenom ;
        }

        static nomCompletToParticule(name: string): string{
          var particule ='';
          if (name.includes("D.")){
            particule = name?.split(" ")[1];
          }
          return particule;
        }
        

    }

