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
      { field: 'personCode', header: 'Código da matrícula' },
      { field: 'name', header: 'Nome' },
      { field: 'lastName', header: 'Sobrenome' },
      { field: 'dateBirth', header: 'Data de nascimento' },
      { field: 'gender', header: 'Sexo' },
      { field: 'email', header: 'email' },
      { field: 'maritalStatus', header: 'Estado civil' },
      { field: 'working', header: 'Trabalhando' },
      { field: 'company', header: 'Empresa' }
    ];
  }

}
