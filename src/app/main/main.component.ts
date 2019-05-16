import { Component } from '@angular/core';
import { Person } from './models/person.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  public peopleRegisteredObservable = null;
  public people: Person[];

  constructor() { }

  public changePeopleRegistered(event) {
    this.peopleRegisteredObservable = new Observable(observer => {
      observer.next(event);
      observer.complete();
    });
  }
}
