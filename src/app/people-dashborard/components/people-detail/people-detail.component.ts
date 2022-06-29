import { Component, Input, Output, EventEmitter } from "@angular/core";
import { People } from "../../models/people.interface";
@Component({
    selector: 'people-detail',
    templateUrl:'people-detail.component.html',
    styleUrls:['people-detail.component.css']
})

export class PeopleDetailComponent {
    @Input()
    detail:People;

    @Input()
    items:People[]

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    @Output()
    remove:EventEmitter<any>=new EventEmitter();
    editing: boolean=false;

    constructor(){
    }
    onNameChange(value:string):void{
       this.detail.name=value
    }
    toggleEdit(){
        if(this.editing){
            this.edit.emit(this.detail)
        }
        this.editing = !this.editing
    }
    onRemove(){
        this.remove.emit(this.detail)
    }
}