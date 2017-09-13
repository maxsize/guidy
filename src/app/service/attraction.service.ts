import { Injectable } from "@angular/core";
import { Attraction } from "../data/Attraction";


@Injectable()
export class AttractionService
{
    getAttraction(attId:Number):Promise<Attraction>
    {
        return new Promise(resolve => resolve(MOCK_ATTS.find(a => a.id == attId)));
    }
}

export const MOCK_ATTS:Attraction[] = [
    {id:1, name:"Yellow stone park", description:"Best park of US", tags:["Nature"], guides:[1,2]},
    {id:2, name:"Vancouver Museum", description:"Best museum of Canada", tags:["Humanities"], guides:[3]},
    {id:3, name:"Great Wall", description:"Ancient Wonder", tags:["Wonder"], guides:[4, 5]},
    {id:4, name:"Forbidden City", description:"Royal palace of Qing empire", tags:["Construction"], guides:[6]}
]