import { Component, OnInit } from '@angular/core';
import { checkBoxData } from './checkbox.constant';
import { FormControl,FormBuilder,FormArray,Validators } from '@angular/forms';
import {getSpecificValueArrayOfObject} from '../../utilityhelpers/commoncodes';

@Component({
  selector: 'app-reactive-form-selectall-checkbox-sg',
  templateUrl: './reactive-form-selectall-checkbox-sg.component.html',
  styleUrls: ['./reactive-form-selectall-checkbox-sg.component.css']
})
export class ReactiveFormSelectallCheckboxSgComponent implements OnInit {

  submitted: boolean = false;
  listSG:any=[];

  constructor(private fb: FormBuilder) {}

  formName: any = this.fb.group({
    selectAll: [false], 
    checkbox: this.fb.array([],[Validators.required]),
  });

  ngOnInit(): void {

    this.listSG = checkBoxData;

    // to check whether checkboxData contains any true checked values/
    this.listSG.forEach((gs:any) => {
      this.result(gs);
    });
    this.checkIfAllSelected();
  }

  result(val?:any,checkIfAllSelectedValue = false) {
    let checkArray: FormArray = this.formName.get('checkbox') as FormArray;

    if (val.checked) {
      let index = this.formName.value.checkbox.findIndex((sgs:any)=>sgs.id==val.id);
      if(index==-1) {
        checkArray.push(new FormControl(val));
      }
    } else {
      const index = checkArray.controls.findIndex((gs:any)=>gs.value.id == val.id);
      checkArray.removeAt(index);
    }
    if(checkIfAllSelectedValue) {
      this.checkIfAllSelected();
    }
    let selectedId = getSpecificValueArrayOfObject(this.formName.value.checkbox,'id'); // reusable code
    console.log('sgsgs',selectedId,this.formName.value.checkbox,this.formName);
  }

  selectAllValue() {
    this.listSG.forEach((valsg:any)=>{
      valsg.checked = this.formName.value.selectAll;
        this.result(valsg);
    });
    this.checkIfAllSelected();
  }

  checkIfAllSelected() {
    this.formName.get("selectAll").patchValue(this.listSG.every((sgs:any)=>sgs.checked));
  }

}
