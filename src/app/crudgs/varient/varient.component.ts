import { Component, OnInit } from '@angular/core';
import { varientData,detail } from './checkbox.constant';

@Component({
  selector: 'app-varient',
  templateUrl: './varient.component.html',
  styleUrls: ['./varient.component.css']
})
export class VarientComponent implements OnInit {

  varientListData:any = [];
  selectedVarient:any = null;
  selectedVarientList:any = [];
  isEdit: any = false;

  editId:any = '34'

  constructor() { }

  ngOnInit(): void {

    this.getVarientList();

    if(this.editId) {
      this.getDetail();
    }

  }

  getVarientList() {
    this.varientListData = [...varientData];
    this.makeDisableIfAlreadySelected();
  }

  changeVariant(val:any) {
    this.selectedVarient = JSON.parse(JSON.stringify(val));
    if(val.checked) {
      this.varientListData.forEach((element:any) => {
        element.checked = element.id == val.id;
        element.disable = element.id == val.id?false:true;
      });
    }
     else {
      this.makeDisableIfAlreadySelected();
    }
  }

  removeSelectedVarient(index:any) {
    // this.selectedVarient.varientsValue = [...this.selectedVarient.varientsValue];
    this.selectedVarient.varientsValue.splice(index,1)
  }

  removeVariant(data:any) {
    this.selectedVarientList.splice(data,1)
    this.makeDisableIfAlreadySelected();
  }


  add() {
  const a = {...this.selectedVarient}
   this.selectedVarientList.push(a);
   this.makeDisableIfAlreadySelected();
  }


  update() {
    const index = this.selectedVarientList.findIndex((valsg:any)=>valsg.id == this.selectedVarient.id);
    this.selectedVarientList[index] = {...this.selectedVarient};
    this.isEdit = false;
    this.makeDisableIfAlreadySelected();
  }


  editVariant(val:any) {
   val.checked = true;
   this.isEdit = true;
   this.changeVariant({...val});
  }

  getDetail() {
    let abc:any = detail.siteFilterSection;
    abc = abc.map(({ sectionName, sectionItem,...rest }:any) => ({ name: sectionName, varientsValue: sectionItem,...rest }));
    abc.forEach((element:any) => {
      element.varientsValue.forEach((element1:any) => {
        element1.valueName = element1.itemName
      });
    });
    this.selectedVarientList = [...abc];
    this.makeDisableIfAlreadySelected();
  }

 private makeDisableIfAlreadySelected () {
    let existingIds = this.selectedVarientList.map((vallsg:any)=>vallsg.id);
    this.varientListData.forEach((element:any) => {
      element.disable = existingIds.includes(element.id);
      element.checked = false
    });
    this.selectedVarient = null;
  }

}
