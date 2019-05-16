import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @Output() peopleEvent = new EventEmitter();
  public peopleRegistered: Person[];
  public formGroup: FormGroup;
  public genders = [
    {label: 'Masculino', value: 'male'},
    {label: 'Feminino', value: 'female'},
    {label: 'Outros', value: 'others'}
  ];

  public maritalStatus = [
    {label: 'Solteiro(a)', value: 'single'},
    {label: 'Casado(a)', value: 'married'},
    {label: 'Viúvo(a)', value: 'widower'},
    {label: 'Divorciado(a)', value: 'divorced'}
  ];

  public isLoading = false;

  public locale = {
    firstDayOfWeek: 0,
    dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Do', 'Sg', 'Te', 'Qa', 'Qi', 'Sx', 'Sa'],
    monthNames: [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outuro', 'Novembro', 'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'mm/dd/yy'
  };

  constructor(
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.peopleRegistered =
      JSON.parse(this.localStorageService.getAll()) ?
      JSON.parse(this.localStorageService.getAll()) :
      [];
    this.peopleEvent.emit(this.peopleRegistered);
    this.createForm();
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      personCode: [
        { value: undefined, disabled: false },
        Validators.compose([])
      ],
      firstName: [
        { value: undefined, disabled: false },
        Validators.compose([])
      ],
      lastName: [
        { value: undefined, disabled: false },
        Validators.compose([])
      ],
      birth: [
        { value: undefined, disabled: false },
        Validators.compose([])
      ],
      gender: [
        { value: undefined, disabled: false },
        Validators.compose([])
      ],
      maritalStatus: [
        { value: false, disabled: false },
        Validators.compose([])
      ],
      email: [
        { value: undefined, disabled: false },
        Validators.compose([Validators.email])
      ],
      phoneNumber: [
        { value: undefined, disabled: false },
        Validators.compose([])
      ],
      isWorking: [
        { value: false, disabled: false },
        Validators.compose([])
      ],
      company: [
        { value: undefined, disabled: true },
        Validators.compose([])
      ]
    });

    this.formGroup.get('isWorking').valueChanges.subscribe((isWorking) => {
      if (isWorking) {
        this.formGroup.get('company').enable();
      } else {
        this.formGroup.get('company').disable();
      }
    });
  }

  public onSave() {
    if (!this.formGroup.valid) {
      return this.validateAllFormFields(this.formGroup);
    }
    this.isLoading = true;
    const {value} = this.formGroup;
    value.maritalStatus = value.maritalStatus.value;
    this.peopleRegistered.push(value);
    this.localStorageService.setPeople(this.peopleRegistered);
    this.peopleEvent.emit(this.peopleRegistered);
    this.formGroup.reset();
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
