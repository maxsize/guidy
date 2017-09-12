import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartupComponent } from "./startup.component";
import { UserService } from './service/user.service';
import { CountryService } from './service/country.service';
import { AppRoutingModule } from './app-routing.module';
import { CountriesComponent } from './countries.component';
import { CountryComponent } from './country.component';

@NgModule({
  declarations: [
    AppComponent, StartupComponent, CountriesComponent, CountryComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [ UserService, CountryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
