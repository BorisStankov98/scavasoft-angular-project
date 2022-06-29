import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
// containers 
import { PeopleDashboardComponent } from "./containers/people-dasboard/people.dashboard.component";

//components
import { PeopleCountComponent } from "./components/people-count/people-count.component";
import { PeopleDetailComponent } from "./components/people-detail/people-detail.component";

//service
import { PeopleDashboardService } from "./people-dashboard.service";

const routes:Routes = [
    {
        path:'people',
        component:PeopleDashboardComponent
    }
]

@NgModule({
    declarations: [
        PeopleDashboardComponent,
        PeopleCountComponent,
        PeopleDetailComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports:[
        PeopleDashboardComponent
    ],
    providers: [
        PeopleDashboardService
    ]
})

export class PeopleDashboardModule{

}