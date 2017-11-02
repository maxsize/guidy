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
    {id:1, name:"Yellow stone park", description:"Best park of US", tags:["Nature"], guides:[1,2], thumb:"./assets/cathedral.jpg"},
    {id:2, name:"Vancouver Museum", description:"Best museum of Canada", tags:["Humanities"], guides:[3], thumb:"./assets/eiffel.jpg"},
    {id:3, name:"Great Wall", description:"Ancient Wonder", tags:["Wonder"], guides:[4, 5], thumb:"./assets/triomphe.jpg"},
    {id:4, name:"Forbidden City", description:"Royal palace of Qing empire", tags:["Construction"], guides:[6], thumb:"./assets/versailles.jpg"},
    {id:5, name:"Forbidden City", description:"Royal palace of Qing empire", tags:["Construction"], guides:[6], thumb:"./assets/versailles.jpg"},
    {id:6, name:"Forbidden City", description:"Royal palace of Qing empire", tags:["Construction"], guides:[6], thumb:"./assets/versailles.jpg"}
]