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
    'Luffy','Monkey','au chapeau de paille',
    'D',
    'H',
    19,
    3000000000,
    ['l\'équipage du chapeau de paille', 'la pire génération', 'l\'organisation des Empereurs']
    ).withImage('https://thispersondoesnotexist.com/'),
    new PersonnageMock(2,
    'Nami','','la voleuse',
    '',
    'F',
    20,
    366000000,
    ['l\'équipage du chapeau de paille']
    ),
    new PersonnageMock(3,
    'Chopper','Toni Toni','le renne au nez bleu',
    '',
    'H',
    17,
    100,
    ['l\'équipage du chapeau de paille']
    )
  ];
  
  getPersoList(): PersonnageMock[] {
    return [...this.persoList];
  }

  getPersonnageById(persoId: number): PersonnageMock{
    const idNum = Number(persoId);
    const foundPerso = this.persoList.find(Personnage => Personnage.id === idNum);
    if (!foundPerso) {
      throw new Error('Personnage non trouvé !');
    }
    return foundPerso;
  }

  LikeById(persoId: number, likeType: LikeType): void {
    const personnage = this.getPersonnageById(persoId);
    personnage.like(likeType);
  }


}  

  