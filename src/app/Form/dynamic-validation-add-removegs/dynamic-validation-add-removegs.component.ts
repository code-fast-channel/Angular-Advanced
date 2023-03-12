import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-validation-add-removegs',
  templateUrl: './dynamic-validation-add-removegs.component.html',
  styleUrls: ['./dynamic-validation-add-removegs.component.css'],
})
export class DynamicValidationAddRemovegsComponent implements OnInit {
  submitted: boolean = false;
  constructor(private fb: FormBuilder) {
    this.formName.get('terms&condition').valueChanges.subscribe((val: any) => {
      switch (val) {
        case 0:
          // this.setValidators(['firstname','lastname']);

          // or

          // let sgsgg = [
          //   {name:'firstname',validations:[Validators.required]},
          //   {name:'lastname',validations:[Validators.required]},
          //   {name:'reason'}
          // ];
          // this.dynamicValidationAddRemove(sgsgg);

          //or

          let sgsgg = {
            firstname: [Validators.required],
            lastname: [Validators.required],
            reason: [],
          };
          this.dynamicValidationAddRemoveObject(sgsgg);

          break;
        case 1:
          // this.setValidators(['reason']);

          //or

          // let sgsgs = [
          //   {name:'firstname',validations:[]}, // validation:[] is optional
          //   {name:'lastname'},
          //   {name:'reason',validations:[Validators.required]}
          // ];
          // this.dynamicValidationAddRemove(sgsgs);

          //or

          let sgsgs = {
            firstname: [],
            lastname: [],
            reason: [Validators.required],
          };
          this.dynamicValidationAddRemoveObject(sgsgs);

          break;
        case 2:
          // this.setValidators([]);

          //or

          // let sgsgss = [
          //   {name:'firstname'},
          //   {name:'lastname'},
          //   {name:'reason'}
          // ];
          // this.dynamicValidationAddRemove(sgsgss);

          //or

          let sgsgss = { firstname: [], lastname: [], reason: [] };
          this.dynamicValidationAddRemoveObject(sgsgss);
          break;
      }
    });
  }

  formName: any = this.fb.group({
    inputName: ['', Validators.required],
    'terms&condition': ['', Validators.required],
    firstname: [],
    lastname: [],
    reason: [],
  });

  ngOnInit() {}

  submit() {
    this.submitted = true;
    console.log('sgsg', this.formName);
    if (!this.formName.valid) {
      // !this.formName.valid === false
      alert('fill all the field sgsgs');
    }
    console.log('gsgs', this.formName.value);
  }

  private setValidators(allowedFiels: any = []):void {
    const fields = ['firstname', 'lastname', 'reason'];
    fields.forEach((element: any) => {
      let validators: any = [];
      if (allowedFiels.includes(element)) {
        validators = [Validators.required];
      }
      this.formName.get(element).setValidators(validators);
      this.formName.get(element).updateValueAndValidity();
    });
    console.log('gsgsgsgsgs', this.formName);
  }

  private dynamicValidationAddRemove(fields: any = []):void {
    fields.forEach((gs: any) => {
      this.formName.get(gs.name).setValidators(gs?.validations?.length > 0 ? gs.validations : []);
      this.formName.get(gs.name).updateValueAndValidity();
    });
  }

  private dynamicValidationAddRemoveObject(fields: any):void {
    Object.keys(fields).forEach((sg: any) => {
      this.formName.get(sg).setValidators(fields[sg]);
      this.formName.get(sg).updateValueAndValidity();
    });
  }
}
