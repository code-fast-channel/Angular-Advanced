import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
@Component({
  selector: 'app-reusable-form-for-drag-drop',
  templateUrl: './reusable-form-for-drag-drop.component.html',
  styleUrls: ['./reusable-form-for-drag-drop.component.css']
})
export class ReusableFormForDragDropComponent implements OnInit {

  dynamicFormGroup: any;
  model: any = [
    {
      name: 'Name',
      isValidation: false,
      type: 'text',
    },
    {
      name: 'age',
      isValidation: true,
      type: 'number',
    }
  ];

  dynamicControls: any = [];

  constructor(public fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.buildForm();
  }

  submit() {
    console.log('sdfsdf',this.dynamicFormGroup.value)
  }

  checkedValues(val: any) {
    console.log('checked values', val);
  }

  private checkFieldChanges(val: any) {
    this.dynamicFormGroup.get('Name').valueChanges.subscribe((vals: any) => {
      console.log('input name', vals);
    });
  }

  buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = this.fb.group(formGroupFields);
    console.log('dynamic form', this.dynamicFormGroup);
    this.dynamicFormGroup.valueChanges.subscribe((vals: any) => {
      // console.log('valss',vals);
      this.checkFieldChanges(vals);
    });
    this.getDynamicControls();
  }

  getFormControlsFields() {
    const formGroupFields: any = {};
    this.model.forEach((element: any) => {
      if('multiplecheckbox' == element.type) {

      } else if(element.type == 'checkbox') {
        formGroupFields[element.name] = ['', [Validators.requiredTrue]];
      } else {
        formGroupFields[element.name] = ['', [Validators.required]];
      }
    });
    console.log('group', formGroupFields);
    return formGroupFields;
  }

  getDynamicControls() {
    // this.dynamicControls = [];
    this.model.forEach((element: any) => {
      this.dynamicControls.push(this.GetType(element));
    });
    console.log('sdasdasd', this.dynamicControls);
  }

  GetType(key: any) {
    let val: any = {};
    if (key.type == 'text') {
      val = {
        control: this.dynamicFormGroup.controls[key.name],
        submitted: true,
        label: key.name,
        inputId: key.name,
        type: 'text',
        optionalErrorMessage: {
          required: 'value is must required for this field {controlName}',
        },
      };
    } else if (key.type == 'select') {
      val = {
        control: this.dynamicFormGroup.controls[key.name],
        submitted: true,
        label: key.name,
        inputId: key.name,
        aliasName: key.name,
        type: 'select',
        customData: {
          data: [
            { name: 'male', ids: '0' },
            { name: 'female', ids: '1' },
          ],
          key: 'name',
          value: 'ids',
        },
      };
    } 
    else if (key.type == 'radio') {
      val = {
        control: this.dynamicFormGroup.controls[key.name],
        submitted: true,
        label: key.name,
        inputId: key.name,
        aliasName: key.name,
        type: 'radio',
        customData: {
          data: [
            { name: 'male', ids: '0' },
            { name: 'female', ids: '1' },
          ],
          key: 'name',
          value: 'ids',
        },
      };
    }
    
    else if (key.type == 'number') {
      val = {
        control: this.dynamicFormGroup.controls[key.name],
        submitted: true,
        label: key.name,
        aliasName: key.name,
        type: 'number',
        inputId: key.name,
        // optionalErrorMessage:{'required':'First name is required'}
      };
    } 
    else if (key.type == 'checkbox') {
      val = {
        control: this.dynamicFormGroup.controls[key.name],
        submitted: true,
        label: key.name,
        inputId: key.name,
        aliasName: key.name,
        type: 'checkbox',
      };
    } 
    else if(key.type == 'multiplecheckbox') {
      val = {
        label: key.name,
        inputId: key.name,
        aliasName: key.name,
        type: 'multiplecheckbox',
        customData: {
          data: [
            { name: 'sgsgs', id: 0, checked: false },
            { name: 'gsgs', id: 1, checked: false },
            { name: 'gsgsgs', id: 2, checked: true },
          ],
          key: 'name',
          value: 'key',
          isSelectAll: false,
          enableSelectAll: true, // if you want select all option
          enableValidation: true, // if you want validation
          checkedDatas: [],
    }
  }
}
    return val;
  }


}
