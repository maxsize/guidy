import { Component } from "@angular/core";
import { Attraction } from "./data/Attraction";

@Component({
    selector: 'attraction',
    templateUrl: './attraction.component.html'
})
export class AttractionComponent
{
    att:Attraction;
}