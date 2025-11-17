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


}