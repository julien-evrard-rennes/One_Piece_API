import { Component, Injectable } from '@angular/core';
import { PersonnageMock } from 'src/app/models/PersonnageMock';
import { LikeType } from '../models/like-type.type';
import { Groupe } from '../models/groupe';

@Injectable({
  providedIn: 'root'
})
export class MockPersoService {

  groupe! : Groupe;

    persoList: PersonnageMock[] = [
new PersonnageMock(1,
    'Monkey','Luffy','au chapeau de paille',
    'D',
    'H',
    19,
    "3.000.000.000",
    ['l\'équipage du chapeau de paille', 'la pire génération', 'l\'organisation des Empereurs']
    ).withImage('https://thispersondoesnotexist.com/'),
    new PersonnageMock(3,
    '','Nami','la voleuse',
    '',
    'F',
    20,
    "66.000.000",
    ['l\'équipage du chapeau de paille']
    ),
    new PersonnageMock(6,
    'Tony-Tony','Chopper','le renne au nez bleu',
    '',
    'H',
    17,
    "100",
    ['l\'équipage du chapeau de paille']
    )
  ];
  
  getPersoList(): PersonnageMock[] {
    return [...this.persoList];
  }

  getPersonnageById(persoId: number): PersonnageMock | null {
    const idNum = Number(persoId);
    const foundPerso = this.persoList.find(Personnage => Personnage.id === idNum);
    if (!foundPerso) {
      console.warn("Personnage mock non trouvé :", persoId);
      return null;
    }
    else {
    return foundPerso;}
  }



}  

  