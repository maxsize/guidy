import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { StartupComponent } from "./startup.component";
import { CountriesComponent } from "./countries.component";
import { CountryComponent } from "./country.component";
import { AttractionComponent } from "./attraction.component";

const APP_ROUTING: Route[] = [
    {path:'', redirectTo:'/startup', pathMatch:'full'},
    {path:'startup', component:StartupComponent},
    {path:'countries', component:CountriesComponent},
    {path:'country/:id', component:CountryComponent},
    {path:'attraction/:id', component:AttractionComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTING)],
    exports: [RouterModule]
})

export class AppRoutingModule{}