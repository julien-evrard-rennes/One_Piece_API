
import { inject, Injectable } from "@angular/core";
import { GroupeDb } from "../models/groupeDb";
import { HttpClient } from "@angular/common/http";
import { ApiPersoService } from "./api-persos-service";
import { environment } from "../environments/environment.development";
import { map } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DBGroupeService {

      private readonly http: HttpClient = inject(HttpClient);

        getGroupesDb() {
          return this.http.get<GroupeDb[]>(environment.DB_GROUPE_OP);
        }

    getGroupeById(groupeId: number) {
    return this.getGroupesDb().pipe(
        map(groupeList => {
        const found = groupeList.find(p => p.id === Number(groupeId));
        if (!found) throw new Error('Groupe non trouvé !');
        return found;
        })
    );
    }

    getGroupeByName(nom: String) {
    return this.getGroupesDb().pipe(
        map(groupeList => {
        const found = groupeList.find(p => p.name === nom);
        if (!found) throw new Error('Groupe non trouvé !');
        return found;
        })
    );
    }


}