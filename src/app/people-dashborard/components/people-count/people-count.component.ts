
import { Component, Input } from "@angular/core";
import {People} from '../../models/people.interface'
@Component({
    selector: 'people-count',
    templateUrl:'people-count.component.html',
    styleUrls:['people-count.component.css']
})

export class PeopleCountComponent{
   
    @Input() 
    items: People[];
    workingCount(): number|undefined{
        if(!this.items) return
        return this.items.filter((person:People) =>{
            return person.isWorking;
        }).length
    }
}