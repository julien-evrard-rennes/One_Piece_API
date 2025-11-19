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
    "3.000.000.000",
    ['l\'équipage du chapeau de paille', 'la pire génération', 'l\'organisation des Empereurs']
    ).withImage('https://thispersondoesnotexist.com/')
    .withYonko("true"),
    new PersonnageMock(3,
    '','Nami','la voleuse',
    '',
    "66.000.000",
    ['l\'équipage du chapeau de paille']
    ),
    new PersonnageMock(6,
    'Tony-Tony','Chopper','le renne au nez bleu',
    '',
    "100",
    ['l\'équipage du chapeau de paille']
    ),
    new PersonnageMock(32,
    '','Baggy','Le Clown',
    '',
    "3.189.000.000",
    ['Baggy\'s Delivery', 'L’équipage du Clown', 'l\'organisation des Empereurs']
    ).withYonko("true"),

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

  