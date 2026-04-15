
import { ApiPersoService } from "../services/api-persos-service";
import { FusionPersonnageService } from "../services/fusion-personnage-service";
import { Groupe } from "./groupe";
import { LikeType } from "./like-type.type";
import { PersonnageAPI } from "./PersonnageApi";
import { PersonnageDb } from "./PersonnageDb";
import { PersonnageMock } from "./PersonnageMock";

const titre = ["Don ", "Page", "Mister", "Doc", "Barbe", "Mr","Frères", "Mc", "Little", 
          "Great", "Señor", "T.", "Mr", "Miss", "Ministre", "Chef", "Gan ", "Punk ", "Van ", "El ", "Kaiser"];

const japonais = ["Kozuki", "Kurozumi", "Funk", "Vinsmoke", "	Shimotsuki"]
    
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

           static fromApiAndMock(api: PersonnageAPI | null, mock: PersonnageMock | null): Personnage {
            const id = api?.id ?? mock?.id ?? 0;
            const nomCompletFromMock = mock?.nom + ' ' + mock?.prenom;
            const nomFromApi = api?.name ? Personnage.nomCompletToNom(api.name) : '';
            const prenomFromApi = api?.name ? Personnage.nomCompletToPrenom(api.name) : '';
            const particuleFromApi = api?.name ? Personnage.nomCompletToParticule(api.name) : '';
            
            return new Personnage(
            id,
            api?.name ?? nomCompletFromMock ?? '',
            mock?.nom ?? nomFromApi ?? '',
            mock?.prenom ?? prenomFromApi ?? '',
            mock?.surnom ?? '',
            mock?.particule ?? particuleFromApi ?? '',
            mock?.groupes ?? [],
            api?.job ?? '',
            api?.size ?? '',
            api?.birthday ?? '',
            Personnage.extractAge(api?.age ?? 0),
            mock?.prime ?? api?.bounty ?? '',
            mock?.status ?? api?.status ?? '',
            api?.crew ?? ({} as any),
            api?.fruit ?? ({} as any),
            );
          }

           static fromApiAndDb(api: PersonnageAPI | null, db: PersonnageDb | null): Personnage {
            const id = api?.id ?? db?.id ?? 0;
            const nomCompletFromDb = db?.nom + ' ' + db?.prenom;
            const nomFromApi = api?.name ? Personnage.nomCompletToNom(api.name) : '';
            const prenomFromApi = api?.name ? Personnage.nomCompletToPrenom(api.name) : '';
            const particuleFromApi = api?.name ? Personnage.nomCompletToParticule(api.name) : '';
            
            return new Personnage(
            id,
            api?.name ?? nomCompletFromDb ?? '',
            db?.nom ?? nomFromApi ?? '',
            db?.prenom ?? prenomFromApi ?? '',
            db?.surnom ?? '',
            db?.particule ?? particuleFromApi ?? '',
            db?.groupes ?? [],
            api?.job ?? '',
            api?.size ?? '',
            api?.birthday ?? '',
            Personnage.extractAge(api?.age ?? 0),
            db?.prime ?? api?.bounty ?? '',
            db?.status ?? api?.status ?? '',
            api?.crew ?? ({} as any),
            api?.fruit ?? ({} as any),
            );
          }

        static nomCompletToNom(name: string): string{
          var nom = "";
          if (name.includes(" ")) {
            nom = name?.split(" ")[0];
            }
          for (let i of titre){
            if (name.includes(i)){
                nom = name?.split(" ")[0] + ' ' + name?.split(" ")[1]
            }
          }

          for (let j of japonais){
            if (name.includes(j)){
                nom = name?.split(" ")[1];
            }
          }
            return nom ;
        }

        static nomCompletToPrenom(name: string): string{
          var prenom = name;
          var secondprenom = '';
          var prenomComplet = '';

          if (name.includes(" ")) {
            prenom = name?.split(" ")[1];
            if (prenom == "/" ){
              prenom = name?.split(" ")[2];
              }
            if ((name?.split(" ")[2])!= null && name?.split(" ")[2] != "/"  ) {
              secondprenom = (name?.split(" ")[2]);
              if (secondprenom == "/" ){
                secondprenom = name?.split(" ")[3];
                }
            }
          }

          if (name.includes("D.")){
            prenom = (
              (name?.split(" ")[2])
            );

            if ((name?.split(" ")[3])!= null && name?.split(" ")[3] != "/"){
              secondprenom = (name?.split(" ")[3]);
            }
          }

           if (name.includes("Punk")){
                 secondprenom = (name?.split(" ")[3]); 
                };

          for (let i of titre){
            if (name.includes(i)){
                prenom = "";
            }
          }

          for (let j of japonais){
            if (name.includes(j)){
                prenom = name?.split(" ")[0];
            }
          }

          if (prenom == ''){
            prenomComplet = secondprenom;
          }
          else if (secondprenom == prenom ){
            prenomComplet = prenom;
          }
          else if (secondprenom != '' && secondprenom != ' '){
            prenomComplet = prenom + ' ' + secondprenom;
          }
          else {
            prenomComplet = prenom;
          }
          return prenomComplet;
        }

        static nomCompletToParticule(name: string): string{
          var particule ='';
          if (name.includes("D.")){
            particule = name?.split(" ")[1];
          }
          return particule;
        }

        static get<T>(mockValue: T | undefined, apiValue: T | undefined, fallback: T): T {
        return mockValue ?? apiValue ?? fallback;
        }
        
        static extractAge(age: string | number | null | undefined): number {
          if (!age && age !== 0) return 0;
          if (typeof age === 'number') return age;
          if (age.trim() === '') return 0;
          if (age === '1 000 ans') return 1000;
          const match = age.match(/\d+/);
          return match ? Number(match[0]) : 0;
        }
    }

