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
      name: 'Elison',
      personCode: 21,
      company: 'Senior Sistemas',
      dateBirth: new Date('1998/02/20'),
      email: 'elison@senior.com',
      gender: 'M',
      lastName: 'Lamim',
      maritalStatus: 'Solteiro(a)',
      working: true
    },
    {
      name: 'Marlon',
      personCode: 25,
      company: 'Senior Sistemas',
      dateBirth: new Date('1994/02/26'),
      email: 'marlon@senior.com',
      gender: 'M',
      lastName: 'Ribeiro',
      maritalStatus: 'Solteiro(a)',
      working: true
    },
    {
      name: 'Rayany',
      personCode: 21,
      company: 'Atol Pet',
      dateBirth: new Date('1997/11/15'),
      email: 'asudhaisd',
      gender: 'F',
      lastName: 'Facion',
      maritalStatus: 'Solteiro(a)',
      working: true
    }];

    this.servStored.setPeople(this.people);
  }

}
