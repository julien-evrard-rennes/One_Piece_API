import { Injectable } from "@angular/core";
import { ApiPersoService } from "./api-persos-service";
import { MockPersoService } from "./mock-perso-service";
import { map, Observable } from "rxjs";
import { Personnage } from "../models/Personnage";

@Injectable({ providedIn: 'root' })
export class FusionPersonnageService {


    constructor(
        private apiPersoService : ApiPersoService,
        private mockPersoService : MockPersoService,
    ) {}

    getPersoList(): Observable<Personnage[]> {
        return this.apiPersoService.getPersos().pipe(
            map(apiList =>
                apiList.map(api => {
                    const mock = this.mockPersoService.getPersonnageById(api.id);
                    return Personnage.fromApiAndMock(api, mock);
                })
            )
        )
    }

    getPersonnageById(id: number): Observable<Personnage> {
      const mock = this.mockPersoService.getPersonnageById(id);
      return this.apiPersoService.getPersonnageById(id).pipe(
        map(api => Personnage.fromApiAndMock(api, mock))
      );
    }

    extractAge(age: string | number): number {
    if (typeof age === "number") return age;
    if (age === '1 000 ans') return 1000;
    if (!age) return 0;
    const match = age.match(/\d+/); 
    return match ? Number(match[0]) : 0;
    }


    extractPrime(bounty: string): number {
    if (!bounty) return 0;
    if (bounty =="inconnu") return 0;
    const bountyPropre = bounty.split(".").join("");
    return bountyPropre ? Number(bountyPropre) : 0;
    }

}