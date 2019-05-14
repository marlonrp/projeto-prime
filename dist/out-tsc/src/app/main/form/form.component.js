import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
var FormComponent = /** @class */ (function () {
    function FormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.genders = [
            { label: 'Masculino', value: 'male' },
            { label: 'Feminino', value: 'female' },
            { label: 'Outros', value: 'others' }
        ];
        this.locale = {
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
    }
    FormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    FormComponent.prototype.createForm = function () {
        var _this = this;
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
        this.formGroup.get('isWorking').valueChanges.subscribe(function (isWorking) {
            if (isWorking) {
                _this.formGroup.get('company').enable();
            }
            else {
                _this.formGroup.get('company').disable();
            }
        });
    };
    FormComponent.prototype.onSave = function () {
        if (!this.formGroup.valid) {
            return this.validateAllFormFields(this.formGroup);
        }
        console.log(this.formGroup.value);
    };
    FormComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsDirty({ onlySelf: true });
            }
            else if (control instanceof FormGroup) {
                _this.validateAllFormFields(control);
            }
        });
    };
    FormComponent = tslib_1.__decorate([
        Component({
            selector: 'app-form',
            templateUrl: './form.component.html',
            styleUrls: ['./form.component.sass']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder])
    ], FormComponent);
    return FormComponent;
}());
export { FormComponent };
//# sourceMappingURL=form.component.js.map