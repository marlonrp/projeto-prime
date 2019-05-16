import { Component, OnInit, Input } from '@angular/core';

import { SelectItem } from 'primeng/components/common/selectitem';

import { Person } from '../models/person.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  @Input()
  set peopleRegisteredObservable(peopleRegisteredObservable) {
    if (peopleRegisteredObservable) {
      peopleRegisteredObservable.subscribe((peopleRegistered) => {
        this.people = peopleRegistered;
      });
    }
  }

  public people: Person[];
  public cols: any[];

  public selectedPerson: Person;
  public displayDialog: boolean;
  public sortOptions: SelectItem[];
  public sortKey: string;
  public sortField: string;
  public sortOrder: number;

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'personCode', header: 'Código da matrícula' },
      { field: 'firstName', header: 'Nome' },
      { field: 'lastName', header: 'Sobrenome' },
      { field: 'birth', header: 'Data de nascimento' },
      { field: 'gender', header: 'Sexo' },
      { field: 'email', header: 'E-mail' },
      { field: 'phoneNumber', header: 'Número de telefone' },
      { field: 'maritalStatus', header: 'Estado civil' },
      { field: 'working', header: 'Trabalhando' },
      { field: 'company', header: 'Empresa' }
    ];

    this.sortOptions = [
      {label: 'A-Z', value: '!firstName'},
      {label: 'Z-A', value: 'firstName'}
    ];
  }

  selectPerson(event: Event, person: Person) {
    this.selectedPerson = person;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    const value = event.value;
    if (value.indexOf('!') === 0) {
      this.sortOrder = 1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = -1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedPerson = null;
  }
}
