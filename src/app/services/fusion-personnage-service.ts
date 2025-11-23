import { Injectable } from "@angular/core";
import { ApiPersoService } from "./api-persos-service";
import { MockPersoService } from "./mock-perso-service";
import { map, Observable } from "rxjs";
import { Personnage } from "../models/Personnage";
import { PersonnageAPI } from "../models/PersonnageApi";
import { PersonnageMock } from "../models/PersonnageMock";

@Injectable({ providedIn: 'root' })
export class FusionPersonnageService {


    constructor(
        private apiPersoService : ApiPersoService,
        private mockPersoService : MockPersoService,
    ) {}

    getPersoList(): Observable<Personnage[]> {
        return this.apiPersoService.getPersos().pipe(
            map((apiList: PersonnageAPI[]) => {
                const mockList: PersonnageMock[] = this.mockPersoService.getPersoList();
                
                // construire des maps id -> item pour accès O(1)
                const apiMap = new Map<number, PersonnageAPI>();
                apiList.forEach(a => apiMap.set(a.id, a));

                const mockMap = new Map<number, PersonnageMock>();
                mockList.forEach(m => mockMap.set(m.id, m));

                // union des IDs (set)
                const idSet = new Set<number>();
                apiList.forEach(a => idSet.add(a.id));
                mockList.forEach(m => idSet.add(m.id));

                // pour chaque id de l'union, fusionner (api peut être undefined/null)
                const result: Personnage[] = Array.from(idSet).map(id => {
                const api = apiMap.get(id) ?? null;
                const mock = mockMap.get(id) ?? null;
                return Personnage.fromApiAndMock(api, mock);
                });

                // optionnel : trier par id ou nom
                result.sort((a, b) => a.id - b.id);

                return result;
            })
            );
        }

    getPersonnageById(id: number): Observable<Personnage> {
      const mock = this.mockPersoService.getPersonnageById(id);
      return this.apiPersoService.getPersonnageById(id).pipe(
        map(api => Personnage.fromApiAndMock(api ?? null, mock ?? null))
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