import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./not-found.component";
import { PeopleDashboardModule } from "./people-dashborard/people.dashboard.module";


const routes:Routes =[
  {path:'', component:HomeComponent, pathMatch:'full' },
  {path:'**', component:NotFoundComponent},
] 

@NgModule({
  declarations: [AppComponent, HomeComponent,NotFoundComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    PeopleDashboardModule,
    RouterModule.forRoot(routes)
  
  ]
  ,
  bootstrap:[AppComponent]
})

export class AppModule {}