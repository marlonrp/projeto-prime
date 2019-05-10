import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Person } from './models/person.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  public people: Person[];

  constructor(private servStored: LocalStorageService) { }

  ngOnInit() {
    this.people = [{
      name: 'oiasd',
      age: 21,
      company: 'aduhsiud',
      dateBirth: new Date(),
      email: 'asudhaisd',
      gernder: 'F',
      lastName: 'ashdiasd',
      maritalStatus: 'S',
      working: true
    },
    {
      name: 'uiii',
      age: 21,
      company: 'aduhsiud',
      dateBirth: new Date(),
      email: 'asudhaisd',
      gernder: 'F',
      lastName: 'ashdiasd',
      maritalStatus: 'S',
      working: true
    }];

    this.servStored.setPeople(this.people);
  }

}
