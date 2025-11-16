
import { Observable } from "rxjs/internal/Observable";
import { PersonnageAPI } from "./PersonnageApi";

export class GroupeAPI {
id : number;
name : string;
description: string;
status : string;
number: string;
roman_name : string;
total_prime :  string;
is_yonko : string;

constructor(
id : number,
name : string,
description: string,
status : string,
number: string,
roman_name : string,
total_prime :  string,
is_yonko : string,
) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.number = number;
    this.roman_name = roman_name;
    this.total_prime = total_prime;
    this.is_yonko = is_yonko;
}


}