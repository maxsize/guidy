import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { StartupComponent } from "./startup.component";

const APP_ROUTING: Route[] = [
    {path:'', redirectTo:'/startup', pathMatch:'full'},
    {path:'startup', component:StartupComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTING)],
    exports: [RouterModule]
})

export class AppRoutingModule{}