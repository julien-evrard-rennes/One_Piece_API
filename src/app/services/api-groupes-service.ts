import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { map } from 'rxjs/internal/operators/map';
import { GroupeAPI } from '../models/groupeApi';
import { ApiPerso } from './api-persos';
import { PersonnageAPI } from '../models/PersonnageApi';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiGroupeService {
  subscribe(arg0: { next: (g: GroupeAPI) => void; }): GroupeAPI {
    throw new Error("Method not implemented.");
  }
  private readonly http: HttpClient = inject(HttpClient);
  private readonly listePersoService = inject(ApiPerso);

  getGroupes() {
    return this.http.get<GroupeAPI[]>(environment.API_GROUPE_OP);
  }

getGroupeById(groupeId: number) {
  return this.getGroupes().pipe(
    map(groupeList => {
      const found = groupeList.find(p => p.id === Number(groupeId));
      if (!found) throw new Error('Groupe non trouvé !');
      return found;
    })
  );
}

getPersoList(groupe: GroupeAPI): Observable<PersonnageAPI[]> {
  if (!groupe) {
    // Si jamais on appelle sans groupe, renvoyer tableau vide
    return of([]); // import { of } from 'rxjs';
  }

  return this.listePersoService.getPersos().pipe(
    map(persoList => {
      const foundPersos = persoList.filter(perso => {
        const persoGroupId = perso?.crew?.id
                          ?? null;
        // si persoGroupId est null/undefined -> ne pas déclencher d'erreur, juste l'exclure
        if (persoGroupId == null) return false;
        return Number(persoGroupId) === Number(groupe.id);
      });
      return foundPersos;
    })
  );
}

getNombreMembres(groupeId: number): Observable<number> {
    return this.listePersoService.getPersos().pipe(
      map(persoList => {
        const membres = persoList.filter(
          p => p?.groupe?.id === groupeId || p?.crew?.id === groupeId
        );
        return membres.length;
      })
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