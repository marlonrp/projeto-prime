import { Injectable } from '@angular/core';
import { Person } from '../main/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public getAll() {
    return localStorage.getItem('people');
  }

  public setPeople(people: Person[]) {
    localStorage.setItem('people', people.toString())
  }
}
