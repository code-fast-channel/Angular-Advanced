import { Component, OnInit } from '@angular/core';
import { checkBoxData,checkBoxData1 } from './checkbox.constant';

@Component({
  selector: 'app-checkbox-radio-with-crud-without-reset',
  templateUrl: './checkbox-radio-with-crud-without-reset.component.html',
  styleUrls: ['./checkbox-radio-with-crud-without-reset.component.css']
})
export class CheckboxRadioWithCrudWithoutResetComponent implements OnInit {

  listData:any = checkBoxData;

  radioValue:any = null;

  selectedValue:any;
  selectedListData:any = [];

  isEdit = false;

  addedData:any = [];

  constructor() { }

  ngOnInit(): void {

  }

  changeParentEvent(val:any,type?:any) {
    if(type=='radio') {
      this.clearAll();
    }
    this.selectedValue = val;
    this.radioValue = val.id;

    const findSelectedListData:any = [...checkBoxData1].find((valsg:any)=>valsg.id==val.id);
    this.selectedListData = findSelectedListData.child;

    const isAlreadyExist = this.addedData.findIndex((vals:any)=>vals.id==val.id);
    if(isAlreadyExist!=-1) {
      let selectedChildIds = this.addedData[isAlreadyExist]?.child?.map((vals:any)=>vals.ids);
      this.selectedListData?.forEach((element:any) => {
        if(selectedChildIds?.includes(element?.ids)) {
          element.checked = true;
        }
      });
    }
  }


  Edit(val:any) {
    this.isEdit = true;
    this.radioValue = val.id;
    this.changeParentEvent(val);
  }

  Delete(type:any,vals:any) {
    if(this.isEdit) {
      alert('update first');
      return;
    }
    if(type=='parent') {
      this.addedData.splice(vals,1);
    }else {
      this.addedData[vals.parentIndex].child.splice(vals.childIndex,1);
      if(this.addedData[vals.parentIndex].child.length==0) {
        this.addedData.splice(vals,1);
      }
    }
  }

  update() {
    const selectedValues = this.selectedListData.filter((gs:any)=>gs.checked);
    if(!this.radioValue || selectedValues.length==0) {
      alert('invalid fill all fields');
      return;
    }

    const data = {title:this.selectedValue.title,age:this.selectedValue.age,id:this.selectedValue.id,child:selectedValues};

    const isAlreadyExist = this.addedData.findIndex((vals:any)=>vals.id==this.selectedValue.id);
    if(isAlreadyExist==-1) {
        this.addedData.push(data);
    } else {
      let Index = this.addedData.findIndex((sg:any)=>sg.id==this.selectedValue.id);
      this.addedData[Index] = data;
    }
     this.clearAll();

    }

    private clearAll() {
      this.selectedValue = null;
      this.selectedListData = [];
      this.radioValue = null;
      this.isEdit = false;
      checkBoxData1.forEach((element:any) => {
        element.child.forEach((element1:any) => {
          element1.checked = false;
        });
      });
    }

}
