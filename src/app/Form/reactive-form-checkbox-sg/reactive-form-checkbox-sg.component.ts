import { Component, OnInit } from '@angular/core';
import { checkBoxData } from './checkbox.constant';
import { FormControl,FormBuilder,FormArray,Validators } from '@angular/forms';
import {getSpecificValueArrayOfObject} from '../../utilityhelpers/commoncodes';
@Component({
  selector: 'app-reactive-form-checkbox-sg',
  templateUrl: './reactive-form-checkbox-sg.component.html',
  styleUrls: ['./reactive-form-checkbox-sg.component.css']
})
export class ReactiveFormCheckboxSgComponent implements OnInit {
  submitted: boolean = false;
  listSG:any=[];
  constructor(private fb: FormBuilder) {}

  formName: any = this.fb.group({
    checkbox: this.fb.array([],[Validators.required]),
  });

  ngOnInit(): void {
    this.listSG = checkBoxData;
    this.listSG.forEach((gs:any) => {
      this.result(gs);
    });
  }

  result(val?:any) {
    let checkArray: FormArray = this.formName.get('checkbox') as FormArray;
    if (val.checked) {
      checkArray.push(new FormControl(val));
    } else {
      const index = checkArray.controls.findIndex((gs:any)=>gs.value.id == val.id);
      checkArray.removeAt(index);
    }
    let selectedId = getSpecificValueArrayOfObject(this.formName.value.checkbox,'id'); // reusable code
    console.log('sgsgs',selectedId,this.formName.value.checkbox,this.formName);
  }

}
