import { Component, OnInit } from "@angular/core";
import { Country } from "./data/Country";
import { CountryService } from "./service/country.service";
import { Router } from "@angular/router";

@Component({
    selector: 'countries',
    templateUrl: './countries.component.html',
    styleUrls:['./countries.component.css']
})

export class CountriesComponent implements OnInit
{
    countries: Country[];
    constructor(private service:CountryService, private router:Router){}

    ngOnInit(): void {
        this.service.getCountries().then(countries => this.countries = countries);
    }

    toCountry(id:Number)
    {
        this.router.navigate(['/country', id]);
    }
}