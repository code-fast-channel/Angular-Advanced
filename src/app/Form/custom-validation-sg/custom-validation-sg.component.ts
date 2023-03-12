import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,ValidationErrors,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-custom-validation-sg',
  templateUrl: './custom-validation-sg.component.html',
  styleUrls: ['./custom-validation-sg.component.css'],
})
export class CustomValidationSgComponent implements OnInit {
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  formName: any = this.fb.group({
    inputName: ['', [Validators.required,this.validateAlphaNumeric]],
  });

  ngOnInit(): void {}

  submit() {
    this.submitted = true;
    console.log('gsgs', this.formName.value);
    if (this.formName.inValid) {
      alert('fill all the field sgsgs');
    }
  }

  validateAlphaNumeric(control: AbstractControl):ValidationErrors | null {
    const pattern = /^[a-zA-Z0-9.]*$/;
    if(!control.parent) {
      return null
    };
    return control.value && !control.value.match(pattern) ? {'invalidAlphanumeric': true}: null;
  }
}
