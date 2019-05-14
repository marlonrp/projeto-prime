import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  public people: Person[];

  cols: any[];

  constructor(private servStored: LocalStorageService) { }

  ngOnInit() {
    this.people = JSON.parse(this.servStored.getAll());

    this.cols = [
      { field: 'age', header: 'age' },
      { field: 'dateBirth', header: 'dateBirth' },
      { field: 'gender', header: 'gender' },
      { field: 'email', header: 'email' },
      { field: 'maritalStatus', header: 'maritalStatus' },
      { field: 'working', header: 'working' },
      { field: 'company', header: 'company' }
    ];
  }

}
