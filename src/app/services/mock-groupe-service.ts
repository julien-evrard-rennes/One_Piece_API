import { Injectable } from "@angular/core";
import { GroupeMock } from "../models/groupeMock";
import { PersonnageShort } from "../models/PersonnageShort";

@Injectable({ providedIn: 'root' })
export class MockGroupeService {

    groupeList: GroupeMock[] = [
        new GroupeMock(1, "L’équipage du Chapeau de Paille",
            "de",
            [new PersonnageShort(1, "Monkey D Luffy"),
            new PersonnageShort(2, "Roronoa Zoro"),
            new PersonnageShort(3, "Nami"),
            new PersonnageShort(4, "Usopp"),
            new PersonnageShort(5, "Sanji"),
            new PersonnageShort(6, "Tony-Tony Chopper"),
            new PersonnageShort(7, "Nico Robin"),
            new PersonnageShort(8, "Franky"),
            new PersonnageShort(9, "Brook"),
            new PersonnageShort(10, "Jinbe"),
            new PersonnageShort(11, "Zeus"),
            new PersonnageShort(508, "Laboon"),
        ]).withCapitaine(new PersonnageShort(1, "Monkey D Luffy")),
        new GroupeMock(2, "L’équipage du Roux",
            "de", [
            new PersonnageShort(85, "Shanks"),
            new PersonnageShort(86, "Ben Beckmann"),
            new PersonnageShort(87, "Lucky Roo"),
            new PersonnageShort(88, "Yassop"),
            new PersonnageShort(89, "Limejuice"),
            new PersonnageShort(90, "Bonk Punch"),
            new PersonnageShort(91, "Monster"),
            new PersonnageShort(92, "Building Snake"),
            new PersonnageShort(93, "Hongo"),
            new PersonnageShort(94, "Howling Dab"),
            new PersonnageShort(95, "Rockstar"),
        ]).withCapitaine(new PersonnageShort(85, "Shanks")),
        new GroupeMock(3, "L’équipage d’Alvida", "de",[
            new PersonnageShort(33, "Alvida")
        ]).withCapitaine(new PersonnageShort(33, "Alvida")),
        new GroupeMock(4, "L’équipage du Clown", "de",[
            new PersonnageShort(32, "Baggy / Le Clown")
        ]).withCapitaine(new PersonnageShort(32, "Baggy / Le Clown")),
        new GroupeMock(5, "L’équipage des Pirates Roger", "de",
            [new PersonnageShort(258, "Gol D. Roger"),
            new PersonnageShort(259, "Silvers Rayleigh"),
            new PersonnageShort(260, "Scopper Gaban"),
            new PersonnageShort(261, "Seagull Guns Nozdon"),
            new PersonnageShort(262, "Taro"),
            new PersonnageShort(263, "Dringo"),
            new PersonnageShort(264, "Sanjuan Wolf"),
            new PersonnageShort(265, "Millet Pine"),
            new PersonnageShort(266, "Ganryu"),
            new PersonnageShort(267, "CB Galant"), 
            new PersonnageShort(268, "Donquino"), 
            new PersonnageShort(269, "Mr Momora"), 
            new PersonnageShort(270, "Moon Isaac Jr."), 
            new PersonnageShort(271, "Yui"), 
            new PersonnageShort(272, "Rangram"),
            new PersonnageShort(273, "Colonel Mugren"), 
            new PersonnageShort(274, "Max Marks"),
             new PersonnageShort(275, "Spencer"), 
             new PersonnageShort(276, "Bankro"),
              new PersonnageShort(277, "Blumarine"), 
              new PersonnageShort(278, "Elio"), 
              new PersonnageShort(279, "Rowing"), 
              new PersonnageShort(280, "Jacsonbaner"), 
              new PersonnageShort(281, "Yamon"),
            ]).withCapitaine(new PersonnageShort(258, "Gol D. Roger")),
        new GroupeMock(6, "L’équipage du Capitaine Usopp", "de", [
            new PersonnageShort(4, "Usopp")
        ]).withCapitaine(new PersonnageShort(4, "Usopp")),
        new GroupeMock(7, "L’équipage du Chat Noir", "de", [
            new PersonnageShort(37, "Kuro"), 
            new PersonnageShort(38, "Sham"), 
            new PersonnageShort(39, "Buchi"),
        ]).withCapitaine(new PersonnageShort(37, "Kuro")),
        new GroupeMock(8, "L’armada Pirate de Don Krieg", "de", [
            new PersonnageShort(40, "Krieg / Don Krieg"), 
            new PersonnageShort(41, "Gyn"), 
            new PersonnageShort(42, "Pearl"),
        ]).withCapitaine(new PersonnageShort(40, "Krieg / Don Krieg")),
        new GroupeMock(9, "L’équipage des Cuisiniers", "de", []),
        new GroupeMock(10, "L’équipage d’Arlong", "de", [
            new PersonnageShort(282, "Arlong"), 
            new PersonnageShort(283, "Kuroobi"), 
            new PersonnageShort(284, "Smack"),
        ]).withCapitaine(new PersonnageShort(282, "Arlong")),
        new GroupeMock(11, "L’équipage des Pirates Yes", "de", []),
    ]

    getGroupeList(): GroupeMock[] {
        return [...this.groupeList];
    }

    getGroupeById(groupeId: number): GroupeMock {
        const idNum = Number(groupeId);
        const foundGroupe = this.groupeList.find(Groupe => Groupe.id === idNum);
        if (!foundGroupe) {
            throw new Error('Groupe non trouvé !');
        }
        return foundGroupe;
    }

    getGroupeByName(nom: string): GroupeMock {
        const foundGroupe = this.groupeList.find(Groupe => Groupe.name === nom);
        if (!foundGroupe) {
            throw new Error('Groupe non trouvé !');
        }
        return foundGroupe;
    }

}