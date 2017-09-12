import { Component, OnInit } from "@angular/core";
import { Attraction } from "./data/Attraction";
import { AttractionService } from "./service/attraction.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'attraction',
    templateUrl: './attraction.component.html'
})
export class AttractionComponent implements OnInit
{
    att: Attraction;

    constructor(private service:AttractionService, private route:ActivatedRoute){}

    ngOnInit(): void {
        // this.route.paramMap
        // this.service.getAttraction()
    }
}