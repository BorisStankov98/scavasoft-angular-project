import { Component } from "@angular/core";

interface Nav {
  link:string,
  name:string,
  exact:boolean

}



@Component({
  selector:'app-root',
  templateUrl:'app.component.html',
  styleUrls:['app.component.css']

})
export class AppComponent {
  nav:Nav[] = [
    {
      link:'/',
      name:'Home',
      exact:true
    },
    {
      link:'/131231231',
      name:'404',
      exact:false
    },
    {
      link:'/people',
      name:'People',
      exact:false
    },
  ]

}