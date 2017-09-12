import { Component, OnInit } from "@angular/core";
import { Country } from "./data/Country";
import { CountryService } from "./service/country.service";
import { ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/switchMap'

@Component({
    selector: 'country',
    templateUrl: './country.component.html'
})
export class CountryComponent implements OnInit
{
    country: Country;

    constructor(private service:CountryService, private route:ActivatedRoute){}

    ngOnInit(): void
    {
        // this.route.paramMap
        // .switchMap(param => this.service.getCountry(+param.get('id')))
        // .subscribe(country => this.country = country);
        this.route.paramMap.subscribe(param => this.service.getCountry(+param.get("id")).then(c => this.country = c));
    }
}