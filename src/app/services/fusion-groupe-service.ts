import { map, Observable } from "rxjs";
import { ApiGroupeService } from "./api-groupes-service";
import { MockGroupeService } from "./mock-groupe-service";
import { Injectable } from "@angular/core";
import { Groupe } from "../models/groupe";



@Injectable({ providedIn: 'root' })
export class GroupeFusionService {

  constructor(
    private apiGroupeService: ApiGroupeService,
    private mockService: MockGroupeService
  ) {}

getGroupeList(): Observable<Groupe[]> {
  return this.apiGroupeService.getGroupesAPI().pipe(
    map(apiList =>
      apiList.map(api => {
        const mock = this.mockService.getGroupeById(api.id);
        return Groupe.fromApiAndMock(api, mock);
      })
    )
  );
}  


getGroupeById(id: number): Observable<Groupe> {
  const mock = this.mockService.getGroupeById(id);
  return this.apiGroupeService.getGroupeById(id).pipe(
    map(api => Groupe.fromApiAndMock(api, mock))
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


