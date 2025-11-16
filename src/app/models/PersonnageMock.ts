
import { Groupe } from "./groupe";
import { LikeType } from "./like-type.type";

    
    export class PersonnageMock {

        id : number;
        nom : string;
        prenom : string;
        surnom : string;
        particule : string;
        sexe : string;
        age : number;
        prime : number;
        groupes : string[];

        likes!: number;
        imageUrl?: string;
        likeButtonText!:string;
        userHasLiked!:boolean;

        constructor(
        id : number,
        prenom : string,
        nom : string,
        surnom : string,
        particule : string,
        sexe : string,
        age : number,
        prime : number,
        groupes : string[],
      ) {
            this.id = id;
            //this.id = crypto.randomUUID().substring(0, 8);
            this.nom = nom;
            this.prenom = prenom;
            this.surnom = surnom;
            this.particule = particule;
            this.sexe = sexe;
            this.age = age;
            this.prime = prime;
            this.groupes = groupes;
            console.log(this);
        }

  like(likeType: LikeType) {
    if (likeType === 'like') {
      this.addLike();
    } else if (likeType === 'unlike') {
      this.removeLike();
    }
}

  addLike(): void{
      this.likes++;
      }

  removeLike(): void{
      this.likes--;
      }


  setLike(likes: number): void {
    this.likes = likes;
  }

  setImage(imageUrl: string): void {
    this.imageUrl = imageUrl;
  }

    withImage(imageUrl: string): PersonnageMock {
    this.setImage(imageUrl);
    return this;
}
 
    }

