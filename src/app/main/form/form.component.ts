import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;
  public genders = [
    {label: 'Masculino', value: 'male'},
    {label: 'Feminino', value: 'female'},
    {label: 'Outros', value: 'others'}
  ];

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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      firstName: [
        { value: undefined, disabled: false },
        Validators.compose([Validators.required])
      ],
      lastName: [
        { value: undefined, disabled: false },
        Validators.compose([Validators.required])
      ],
      age: [
        { value: undefined, disabled: false },
        Validators.compose([Validators.required])
      ],
      birth: [
        { value: undefined, disabled: false },
        Validators.compose([Validators.required])
      ],
      gender: [
        { value: undefined, disabled: false },
        Validators.compose([Validators.required])
      ],
      isWorking: [
        { value: false, disabled: false },
        Validators.compose([Validators.required])
      ],
      company: [
        { value: undefined, disabled: true },
        Validators.compose([Validators.required])
      ],
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
    console.log(this.formGroup.value);
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
