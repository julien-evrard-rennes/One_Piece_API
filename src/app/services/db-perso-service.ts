import { Component, inject, Injectable } from '@angular/core';
import { LikeType } from '../models/like-type.type';
import { Groupe } from '../models/groupe';
import { PersonnageDb } from '../models/PersonnageDb';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map, Observable } from 'rxjs';
import { Personnage } from '../models/Personnage';

@Injectable({
  providedIn: 'root'
})
export class DBPersoService {

  groupe! : Groupe;

  private readonly http: HttpClient = inject(HttpClient);
  
  getPersos(): Observable<PersonnageDb[]> {
    return this.http.get<PersonnageDb[]>(environment.DB_PERSO_OP);
  }


getPersonnageById(persoId: number): Observable<PersonnageDb> {
  return this.http.get<PersonnageDb>(`${environment.DB_PERSO_OP}/${persoId}`);
}

/** 
  addPersonnageDB(formValue: {
  nom: string, 
  prenom: string,
  surnom:string,
  particule?:string,
  prime: string,
  groupes: string[],
}): void {

  const newId = this.persoList[this.persoList.length -1].id + 1;

  const newPerso = new PersonnageDb(
    newId,
    formValue.prenom,
    formValue.nom,
    formValue.surnom,
    formValue.prime,
    formValue.groupes
  );

  if (formValue.particule) newPerso.withParticule(formValue.particule);
  newPerso.withStatus("vivant");

}
  **/
}