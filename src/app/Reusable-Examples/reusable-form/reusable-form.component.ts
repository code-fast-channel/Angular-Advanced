import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-reusable-form',
  templateUrl: './reusable-form.component.html',
  styleUrls: ['./reusable-form.component.css'],
})
export class ReusableFormComponent implements OnInit {
  submitted: boolean = false;
  formName: any;
  dynamic: any = [];

  submittedForm: boolean =false;
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
    },
    {
      name: 'select option',
      isValidation: true,
      type: 'select',
    },
    {
      name: 'radio',
      isValidation: true,
      type: 'radio',
    },
    {
      name: 'checkbox single',
      isValidation: true,
      type: 'checkbox',
    },
    {
      name: 'multiple checkbox',
      isValidation: true,
      type: 'multiplecheckbox',
    },
  ];

  dynamicControls: any = [];

  constructor(private fb: FormBuilder) {
    this.intiateForm();

    this.buildForm();
  }

  ngOnInit(): void {
    this.formName.valueChanges.subscribe((vals: any) => {
      this.checkFieldChanges(vals);
    });
  }

  intiateForm() {
    this.formName = this.fb.group({
      inputName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      checkbox: ['', [Validators.requiredTrue]],
      multiplecheckbox: ['', [Validators.required]],
    });
    this.dynamic = [
      {
        control: this.formName.controls.inputName,
        submitted: true,
        label: 'Input Name',
        inputId: 'inputName',
        type: 'text',
        optionalErrorMessage: {
          required: 'value is must required for this field {controlName}',
        },
      },
      {
        control: this.formName.controls.firstName,
        submitted: true,
        label: 'First Name',
        type: 'number',
        inputId: 'firstName',
        // optionalErrorMessage:{'required':'First name is required'}
      },
      {
        control: this.formName.controls.lastName,
        submitted: true,
        label: 'Last Name',
        inputId: 'lastName',
        aliasName: 'Last Name Fielddd',
      },
      {
        control: this.formName.controls.gender,
        submitted: true,
        label: 'Gender',
        inputId: 'gender',
        aliasName: 'gender Field',
        type: 'select',
        customData: {
          data: [
            { name: 'male', ids: '0' },
            { name: 'female', ids: '1' },
          ],
          key: 'name',
          value: 'ids',
        },
      },
      {
        control: this.formName.controls.checkbox,
        submitted: true,
        label: 'accept terms and condition',
        inputId: 'termsandcondition',
        aliasName: 'accept terms and condition',
        type: 'checkbox',
      },
      {
        // control:this.formName.controls.multiplecheckbox,
        // submitted:true,
        label: 'multiple checkbox',
        inputId: 'multiplecheckbox',
        aliasName: 'multiple checkbox',
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
          enableSelectAll: false, // if you want select all option
          enableValidation: false, // if you want validation
          checkedDatas: [],
        },
      },
    ];
  }

  submit() {
    this.submitted = true;
    this.submittedForm = true;
    console.log('gsgs', this.formName.value);
    // if (this.formName.inValid) {
    //   alert('fill all the field sgsgs');
    // }
    if (this.dynamicFormGroup.invalid) {
      alert('fill all the field sgsgs');
    }
    console.log(this.dynamicFormGroup.value,this.dynamicFormGroup,this.dynamicControls)
  }

  checkedValues(val: any) {
    console.log('checked values', val);
  }

  private checkFieldChanges(val: any) {
    this.formName.get('inputName').valueChanges.subscribe((vals: any) => {
      console.log('input name', vals);
    });
    this.formName.get('firstName').valueChanges.subscribe((vals: any) => {
      console.log('first name', vals);
    });
    this.formName.get('lastName').valueChanges.subscribe((vals: any) => {
      console.log('last name', vals);
    });
  }

  buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = this.fb.group(formGroupFields);
    console.log('dynamic form', this.dynamicFormGroup);
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
        control: this.formName.controls[key.name],
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
