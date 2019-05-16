import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
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
  }
}
