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
    "3.000.000.000",
    ['l\'équipage du chapeau de paille', 'la pire génération', 'l\'organisation des Empereurs']
    ).withImage('https://thispersondoesnotexist.com/')
    .withYonko("true")
    .withParticule("D."),
    new PersonnageMock(3,
    'Nami','','la voleuse',
    "66.000.000",
    ['l\'équipage du chapeau de paille']
    ),
    new PersonnageMock(6,
    'Chopper','Tony-Tony','le renne au nez bleu',
    "100",
    ['l\'équipage du chapeau de paille']
    ),
    new PersonnageMock(32,
    'Baggy','','Le Clown',
    "3.189.000.000",
    ['Baggy\'s Delivery', 'L’équipage du Clown', 'l\'organisation des Empereurs']
    ).withYonko("true"),
    new PersonnageMock(40,
    '','Don Krieg','Le Clown',
    "3.189.000.000",
    ['L’armada Pirate de Don Krieg']
    ),
    new PersonnageMock(289,
    'Newgate','Edward','',
    "",
    ["L’équipage de Barbe Blanche"]
    ).withStatus("décédé")
    .withYonko("true"),
    new PersonnageMock(308,
    'Little Oz Jr','','',
    "",
    ["L’équipage de Barbe Blanche"]
    ),
    new PersonnageMock(380,
    '','Im Sama','',
    "",
    []
    ),
    new PersonnageMock(381,
    'Mars','Saint Marcus','Le 1er Doyen',
    "",
    ['Les Cinq Doyens']
    ),
    new PersonnageMock(382,
    'Warcury','Saint Topman','Le 2eme Doyen',
    "",
    ['Les Cinq Doyens']
    ),
    new PersonnageMock(383,
    'Nusjuro','Saint Ethanbaron V.','Le 3eme Doyen',
    "",
    ['Les Cinq Doyens']
    ),
    new PersonnageMock(384,
    'Ju Peter','Saint Shepherd','Le 4eme Doyen',
    "",
    ['Les Cinq Doyens']
    ),
    new PersonnageMock(385,
    'Saturn','Saint Jaygarcia','Le 5eme Doyen',
    "",
    ['Les Cinq Doyens']
    ).withStatus("décédé"),
    new PersonnageMock(518,
    'Cobra','Nefertari','',
    "",
    ['Alabasta']
    ).withParticule("D.")
    .withStatus("décédé"),
    new PersonnageMock(519,
    'Titi','Nefertari','',
    "",
    ['Alabasta']
    ).withParticule("D."),
    new PersonnageMock(520,
    'Vivi','Nefertari','',
    "",
    ['Alabasta', 'l\'équipage du chapeau de paille']
    ).withParticule("D."),


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

  