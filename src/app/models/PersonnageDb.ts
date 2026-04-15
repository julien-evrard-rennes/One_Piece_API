  export class PersonnageDb {

        id : number;
        nom : string;
        prenom : string;
        surnom : string;
        particule? : string;
        prime : string;
        groupes : string[];

        imageUrl?: string;
        is_yonko?: string;
        status?: string;

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
        }

    setParticule(particule: string): void {
      this.particule = particule;
    }

    withParticule(particule: string): PersonnageDb {
        this.setParticule(particule);
        return this;
    }

    setYonko(is_yonko: string): void {
      this.is_yonko = is_yonko;
    }

    withYonko(is_yonko: string): PersonnageDb {
        this.setYonko(is_yonko);
        return this;
    }

    setStatus(status: string): void {
      this.status = status;
    }

    withStatus(status: string): PersonnageDb {
        this.setStatus(status);
        return this;
    }

    setImage(imageUrl: string): void {
      this.imageUrl = imageUrl;
    }

    withImage(imageUrl: string): PersonnageDb {
      this.setImage(imageUrl);
      return this;
  }
  
    }

