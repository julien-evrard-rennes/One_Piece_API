
import { Groupe } from "./groupe";
import { LikeType } from "./like-type.type";

    
    export class PersonnageMock {

        id : number;
        nom : string;
        prenom : string;
        surnom : string;
        particule? : string;
        prime : string;
        groupes : string[];

        imageUrl?: string;
        is_yonko?: string;

        constructor(
        id : number,
        prenom : string,
        nom : string,
        surnom : string,
        prime : string,
        groupes : string[],
      ) {
            this.id = id;
            //this.id = crypto.randomUUID().substring(0, 8);
            this.nom = nom;
            this.prenom = prenom;
            this.surnom = surnom;
            this.prime = prime;
            this.groupes = groupes;
            console.log(this);
        }

    setParticule(particule: string): void {
      this.particule = particule;
    }

    withParticule(particule: string): PersonnageMock {
        this.setParticule(particule);
        return this;
    }

    setYonko(is_yonko: string): void {
      this.is_yonko = is_yonko;
    }

    withYonko(is_yonko: string): PersonnageMock {
        this.setYonko(is_yonko);
        return this;
    }

    setImage(imageUrl: string): void {
      this.imageUrl = imageUrl;
    }

    withImage(imageUrl: string): PersonnageMock {
      this.setImage(imageUrl);
      return this;
  }
  
    }

