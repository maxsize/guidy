import { Component, Input, OnInit } from "@angular/core";
import { Attraction } from "./data/Attraction";
import { AttractionService } from "./service/attraction.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'attraction-item',
    templateUrl: './attraction-item.component.html',
    styleUrls:['./attraction-item.component.css']
})
export class AttractionItemComponent implements OnInit
{
    @Input()
    attId:Number;
    att:Attraction;

    constructor(private service:AttractionService, private router:Router){}

    ngOnInit(): void {
        this.service.getAttraction(this.attId).then(a => this.att = a);
    }

    toAttraction(aId:Number)
    {
        this.router.navigate(['/attraction', aId])
    }
}