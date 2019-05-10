import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;
  public locale = {
    firstDayOfWeek: 0,
    dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    dayNamesMin: ["Do","Sg","Te","Qa","Qi","Sx","Sa"],
    monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outuro","Novembro","Dezembro" ],
    monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'mm/dd/yy'
};

  constructor() { }

  ngOnInit() {
  }

}
