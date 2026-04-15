import { catchError, forkJoin, map, Observable, of } from "rxjs";
import { ApiGroupeService } from "./api-groupes-service";
import { Injectable } from "@angular/core";
import { Groupe } from "../models/groupe";
import { DBGroupeService } from "./db-groupe-service";
import { GroupeDb } from "../models/groupeDb";



@Injectable({ providedIn: 'root' })
export class FusionGroupeService {

  constructor(
    private apiGroupeService: ApiGroupeService,
    private dbService: DBGroupeService,
  ) {}

  getGroupeList(): Observable<Groupe[]> {
  return forkJoin ({
            apiList: this.apiGroupeService.getGroupesAPI(),
            dbList: this.dbService.getGroupesDb()
        }).pipe(
            map(({ apiList, dbList }) => {

            // construire des maps id -> item 
            const dbMap = new Map<number, GroupeDb>();
            dbList.forEach(d => dbMap.set(Number(d.id),d));

            const result : Groupe[] = apiList.map(api => {
              const db = dbMap.get(Number(api.id)) ?? null; // patch si dispo, sinon null
              return Groupe.fromApiAndDb(api, db);
            })
              
            // Ajouter les groupes présents uniquement en DB (absents de l'API)
             const apiIds = new Set(apiList.map(a => a.id));
            dbList
            .filter(d => !apiIds.has(Number(d.id)))
            .forEach(d => result.push(Groupe.fromApiAndDb(null, d))); 

            // optionnel : trier par id ou nom
            result.sort((a, b) => a.id - b.id);

            return result;
        })
        );
  }


  getGroupeById(id: number): Observable<Groupe> {
    return forkJoin ({ 
        api: this.apiGroupeService.getGroupeById(id).pipe(catchError(() => of(null))),
        db:  this.dbService.getGroupeById(id).pipe(catchError(() => of(null)))
            }).pipe(
        map(({ api, db }) => Groupe.fromApiAndDb(api, db))
      );
    }

  extractNombre(number: string | number): number {
    if (typeof number === "number") return number;
    if (number === '>85') return 85;
    if (!number) return 0;
    const match = number.match(/\d+/); 
    return match ? Number(match[0]) : 0;
  }


}


