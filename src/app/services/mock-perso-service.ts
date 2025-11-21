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
    ['L’équipage du Chapeau de Paille', 'la pire génération', 'l\'organisation des Empereurs']
    ).withImage('https://thispersondoesnotexist.com/')
    .withYonko("true")
    .withParticule("D."),
    new PersonnageMock( 2,
    'Zoro','Roronoa','',
    "1.111.000.000",
    ["L’équipage du Chapeau de Paille"]
    ).withYonko("true"),
    new PersonnageMock(3,
    'Nami','','la voleuse',
    "366.000.000",
    ['L’équipage du Chapeau de Paille']
    ).withYonko("true"),
    new PersonnageMock( 4,
    'Usopp','','Sogeking',
    "500.000.000",
    ["L’équipage du Chapeau de Paille"]
    ),
    new PersonnageMock( 5,
    'Sanji','Vinsmoke','',
    "1.032.000.000",
    ["L’équipage du Chapeau de Paille"]
    ), 
    new PersonnageMock(6,
    'Chopper','Tony-Tony','le renne au nez bleu',
    "1000",
    ['L’équipage du Chapeau de Paille']
    ).withYonko("true"),
    new PersonnageMock( 7,
    'Robin','Nico','',
    "930.000.000",
    ["L’équipage du Chapeau de Paille"]
    ).withYonko("true"),
    new PersonnageMock( 8,
    'Franky','','',
    "394.000.000",
    ["L’équipage du Chapeau de Paille"]
    ).withYonko("true"),
    new PersonnageMock( 9,
    'Brook','','Soul King',
    "383.000.000",
    ["L’équipage du Chapeau de Paille"]
    ),
    new PersonnageMock( 10,
    'Jinbe','','',
    "1.100.000.000",
    ["L’équipage du Chapeau de Paille", "les capitaines corsaires"]
    ).withYonko("true"), 
    new PersonnageMock(13,
    'Suleiman','','',
    "67.000.000",
    ["Armarda du Chapeau de Paille"]
    ),
    new PersonnageMock(15,
    'Gambia','','',
    "67.000.000",
    ["Armarda du Chapeau de Paille"]
    ),
    new PersonnageMock(18,
    'Baby 5','','',
    "",
    ["Armarda du Chapeau de Paille"]
    ),
    new PersonnageMock(25,
    'Bee Anne','','',
    "",
    ["Armarda du Chapeau de Paille"]
    ),
    new PersonnageMock(32,
    'Baggy','','Le Clown',
    "3.189.000.000",
    ['Baggy\'s Delivery', 'L’équipage du Clown', 'l\'organisation des Empereurs']
    ).withYonko("true"),
    new PersonnageMock(40,
    '','Don Krieg','',
    "17.000.000",
    ['L’armada Pirate de Don Krieg']
    ),
    new PersonnageMock( 53,
    'Laura','Charlotte','',
    "24.000.000",
    ["L’équipage du Rolling"]
    ),
    new PersonnageMock(54,
    'Walter Law','Trafalgar','Le chirurgien de la mort',
    "3.000.000.000",
    ["la pire génération", "Capitaine Corsaire"]
    ).withParticule("D."),
    new PersonnageMock( 55,
    'Bepo','','',
    "1500",
    ["L’équipage du Hearth"]
    ),
    new PersonnageMock(59,
    'Kidd','Eustass','Captain',
    "3.000.000.000",
    ["la pire génération"]
    ).withStatus("inconnu"),
    new PersonnageMock( 68,
    'Bonney','Jewelry','',
    "320.000.000",
    ["L’équipage du Fire Tank"]
    ),
    new PersonnageMock(70,
    'Hancock','Boa','',
    "1.659.000.000",
    ["L’équipage des Pirates Kuja", "Capitaine Corsaire"]
    ), 
    new PersonnageMock(81,
    'Mihawk','Dracule','Oeil de faucon',
    "3.590.000.000",
    ["Capitaines Corsaires","Cross Guild"]
    ),
    new PersonnageMock(82,
    'Crocodile','','',
    "1.965.000.000",
    ["Capitaines Corsaires","Cross Guild"]
    ),
    new PersonnageMock(181,
    'Bobbin','','',
    "105.500.000",
    ["L’équipage de Big Mom"]
    ),
    new PersonnageMock(193,
    'Who’s Who','','',
    "546.000.000",
    ["L’équipage aux Cent Bêtes"]
    ),
    new PersonnageMock(194,
    'Black Maria','','',
    "480.000.000",
    ["L’équipage aux Cent Bêtes"]
    ),
    new PersonnageMock( 196,
    'Sheep’s Head','','',
    "",
    ["L’équipage aux Cent Bêtes"]
    ),
    new PersonnageMock(247,
    'Teach','Marshall','Barbe Noire',
    "3.996.000.000",
    ["L’équipage de Barbe Noire", "Capitaines Corsaires", "La pire génération"]
    ).withYonko("true")
    .withParticule("D."),
    new PersonnageMock(289,
    'Newgate','Edward','',
    "5.046.000.000",
    ["L’équipage de Barbe Blanche"]
    ).withStatus("décédé")
    .withYonko("true"),
    new PersonnageMock(308,
    'Little Oz Jr','','',
    "550.000.000",
    ["L’équipage de Barbe Blanche"]
    ),
    new PersonnageMock(372,
    'Lao G','','',
    "61.000.000",
    ["L’équipage de Don Quichotte"]
    ),
    new PersonnageMock(375,
    'Dellinger','','',
    "15.000.000",
    ["L’équipage de Don Quichotte"]
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
    new PersonnageMock(414,
    'AkaInu','Sakazuki','AkaInu',
    "5.000.000.000",
    ['Les Cinq Doyens']
    ),
    new PersonnageMock(415,
    'Kizaru','Borsalino','Borsalino',
    "3.000.000.000",
    ['la Marine']
    ),
    new PersonnageMock(416,
    'Fujitora','Issho','Issho',
    "3.000.000.000",
    ['la Marine']
    ),
    new PersonnageMock(417,
    'Ryokugyu','Aramaki','Aramaki',
    "3.000.000.000",
    ['la Marine']
    ),
    new PersonnageMock(418,
    'Garp','Monkey','',
    "3.000.000.000",
    ['la Marine']
    ).withParticule("D."),
    new PersonnageMock(441,
    'Kobby','','le héros de la Marine',
    "500.000.000",
    ["Marine"]
    ),
    new PersonnageMock(444,
    'Hermep','','',
    "100.000.000",
    ["Marine"]
    ),
    new PersonnageMock(446,
    'Jango','','',
    "9.000.000",
    ["Marine"]
    ),
    new PersonnageMock(448,
    'Sentomaru','','',
    "500.000.000",
    ["Marine"]
    ),
    new PersonnageMock(449,
    'X-Drake','','',
    "222.000.000",
    ["Marine"]
    ),
    new PersonnageMock(465,
    'Outlook III','','',
    "",
    ["Royaume de Goa"]
    ),
    new PersonnageMock(469,
    'Dadan','Curly','',
    "7.800.000",
    ["Royaume de Goa"]
    ),
    new PersonnageMock(503,
    'Olvia','Nico','',
    "79.000.000",
    ["Ohara"]
    ),
    new PersonnageMock(511,
    'Dorry','','',
    "1.800.000.000",
    ["Little Garden"]
    ),
    new PersonnageMock(512,
    'Broggy','','',
    "1.800.000.000",
    ["Little Garden"]
    ),  
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
    new PersonnageMock( 612,
    'Pedro','','',
    "382.000.000",
    ["Zo"]
    ),
    new PersonnageMock( 658,
    'Octo','','',
    "8.000.000",
    ["Île des hommes-poissons"]
    ),
    new PersonnageMock( 699,
    '','Queen Honey','',
    "7.800.000",
    ["L’équipage des Pirates Trump"]
    ),
    new PersonnageMock(774,
    'Loki','','',
    "2.600.000.000",
    ['Elbaf']
    ),


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

  