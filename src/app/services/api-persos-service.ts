import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { PersonnageAPI } from '../models/PersonnageApi';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ApiPersoService {
  private readonly http: HttpClient = inject(HttpClient);
  
  getPersos() {
    return this.http.get<PersonnageAPI[]>(environment.API_PERSO_OP);
  }

getPersonnageById(persoId: number) {
  return this.getPersos().pipe(
    map(persoList => {
      const found = persoList.find(p => p.id === Number(persoId));
      if (!found) throw new Error('Personnage non trouvé !');
      return found;
    })
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