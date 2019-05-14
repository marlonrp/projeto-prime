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


  constructor(private servStored: LocalStorageService) { }

  ngOnInit() {
    console.log(this.servStored.getAll());
    // this.people = JSON.parse(this.servStored.getAll());
    this.people = JSON.parse(this.servStored.getAll());
  }

}
