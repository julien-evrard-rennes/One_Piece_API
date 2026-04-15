import { Injectable } from "@angular/core";
import { ApiPersoService } from "./api-persos-service";
import { forkJoin, Observable } from "rxjs";
import { Personnage } from "../models/Personnage";
import { PersonnageAPI } from "../models/PersonnageApi";
import { PersonnageMock } from "../models/PersonnageMock";
import { DBPersoService } from "./db-perso-service";
import { PersonnageDb } from "../models/PersonnageDb";
import { switchMap, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FusionPersonnageService {


    constructor(
        private apiPersoService : ApiPersoService,
        private dbPersoService : DBPersoService,
    ) {}


getPersoList(): Observable<Personnage[]> {
  return this.dbPersoService.getPersos().pipe(
    switchMap((dbList: PersonnageDb[]) => {
      const dbMap = new Map<number, PersonnageDb>();
      dbList.forEach(d => dbMap.set(Number(d.id), d));

      return this.apiPersoService.getPersos().pipe(
        map((apiList: PersonnageAPI[]) => {

          // 1. Pour chaque personnage API, on applique le patch DB s'il existe
          const result: Personnage[] = apiList.map(api => {
            const db = dbMap.get(Number(api.id)) ?? null;
            return Personnage.fromApiAndDb(api, db);
          });

           // 2. Personnages uniquement en DB (absents de l'API)
          const apiIds = new Set(apiList.map(a => a.id));
          dbList
            .filter(d => !apiIds.has(Number(d.id)))
            .forEach(d => result.push(Personnage.fromApiAndDb(null, d)));

            // optionnel : trier par id ou nom
          result.sort((a, b) => a.id - b.id);
          return result;
        })
      );
    })
  );
}
    getPersonnageById(id: number): Observable<Personnage> {
        return forkJoin ({ 
            api: this.apiPersoService.getPersonnageById(id),
            db : this.dbPersoService.getPersonnageById(id)
        }).pipe(
        map(({ api, db }) =>  Personnage.fromApiAndDb(api ?? null, db ?? null))
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