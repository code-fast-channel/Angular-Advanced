import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import {getFormControlsFields,getTypes} from './reusable-forms-advanced.constant';
import {simpleFields} from './reusable-form-consume-constant';
@Component({
  selector: 'app-reusable-forms-advanced',
  templateUrl: './reusable-forms-advanced.component.html',
  styleUrls: ['./reusable-forms-advanced.component.css']
})
export class ReusableFormsAdvancedComponent implements OnInit {

  dynamicFormGroup: any;
  submitted :any = false;
  model: any = simpleFields;

  dynamicControls: any = [];

  constructor(public fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.buildForm();
    this.dynamicFormGroup.valueChanges.subscribe((vals: any) => {
      this.checkFieldChanges(vals);
    });
  }

  submit() {
    this.submitted = true;
    console.log('form submitt',this.dynamicFormGroup.value)
  }

  reset() {
    this.dynamicFormGroup.reset();
    this.submitted = false;
  }

  checkedValues(val: any) {
    console.log('checked values', val);
  }

 private buildForm(): void {
    const formGroupFields = getFormControlsFields(this.model);
    this.dynamicFormGroup = this.fb.group(formGroupFields);
    this.model.forEach((element: any) => {
      this.dynamicControls.push(getTypes(element,this.dynamicFormGroup));
    });
  }

  private checkFieldChanges(val: any) {
    this.dynamicFormGroup.get('Name').valueChanges.subscribe((vals: any) => {
      console.log('name', vals);
    });
    this.dynamicFormGroup.get('age').valueChanges.subscribe((vals: any) => {
      console.log('age', vals);
    });
  }


}
