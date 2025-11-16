import { GroupeAPI } from "./groupeApi";



export class PersonnageAPI {
id : number;
name : string;
job : string;
size: string;
birthday : string;
age : number;
bounty : string;
status : string;
crew : {
id : number;
name : string;
description: string;
status : string;
number: string;
roman_name : string;
total_prime :  string;
is_yonko : string;
};
fruit : {
id : number;
name : string;
description : string;
type : string;
filename : string;
roman_name : string;
technicalFile : string;
}

groupe : GroupeAPI;

constructor(
id : number,
name : string,
job : string,
size: string,
birthday : string,
age : number,
bounty : string,
status : string,
crew : {
id : number,
name : string,
description: string,
status : string,
number: string,
roman_name : string,
total_prime :  string,
is_yonko : string,
},
fruit : {
id : number,
name : string,
description : string,
type : string,
filename : string,
roman_name : string,
technicalFile : string
},
groupe :GroupeAPI
) {
    this.id = id;
    this.name = name;
    this.job = job;
    this.size = size;
    this.birthday = birthday;
    this.age = age;
    this.bounty = bounty;
    this.status = status;
    this.crew = crew;
    this.fruit = fruit;
    this.groupe = groupe;
}

}