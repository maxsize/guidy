import { Country } from "../data/Country";
import { Injectable } from "@angular/core";

@Injectable()
export class CountryService
{
    getCountries():Promise<Country[]>
    {
        return new Promise(resolve => resolve(MOCK_COUNTRIES));
    }

    getCountry(id:Number):Promise<Country>
    {
        return new Promise(resolve => resolve(MOCK_COUNTRIES.find(c => c.id == id)))
    }
}

export const MOCK_COUNTRIES:Country[] = [
    {id:1, name:"Canada", attractions:[2]},
    {id:2, name:"China", attractions:[3, 4]},
    {id:3, name:"America", attractions:[1]},
]