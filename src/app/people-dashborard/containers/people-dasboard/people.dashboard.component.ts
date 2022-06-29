import { Component, OnInit } from '@angular/core';

import { PeopleDashboardService } from '../../people-dashboard.service';

import { People } from '../../models/people.interface';

@Component({
  selector: 'people-dashboard',
  templateUrl: 'people.dashboard.component.html',
  styleUrls: ['people.dashboard.component.css'],
})
export class PeopleDashboardComponent implements OnInit {
  people: People[];

  constructor(private peopleService: PeopleDashboardService) {}
  ngOnInit(): void {
    this.people = this.peopleService.getPerson();
  }
  handleEdit(event: People) {
    this.people = this.people.map((person: People) => {
      if (person.name === event.name) {
        person = Object.assign({}, person, event);
      }
      return person;
    });
  }
  handleRemove(event: People) {
    this.people = this.people.filter((person: People) => {
      return person.name !== event.name;
    });
  }
}
