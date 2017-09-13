import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartupComponent } from "./startup.component";
import { UserService } from './service/user.service';
import { CountryService } from './service/country.service';
import { AppRoutingModule } from './app-routing.module';
import { CountriesComponent } from './countries.component';
import { CountryComponent } from './country.component';
import { AttractionService } from './service/attraction.service';
import { AttractionComponent } from './attraction.component';
import { AttractionItemComponent } from './attraction-item.component';

@NgModule({
  declarations: [
    AppComponent, StartupComponent, CountriesComponent, CountryComponent, AttractionComponent, AttractionItemComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [ UserService, CountryService, AttractionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
