import { Component, OnInit } from '@angular/core';
import { datasg, datags } from './datasg.constant';

@Component({
  selector: 'app-multi-level-checkbox-setvalue',
  templateUrl: './multi-level-checkbox-setvalue.component.html',
  styleUrls: ['./multi-level-checkbox-setvalue.component.css']
})
export class MultiLevelCheckboxSetvalueComponent implements OnInit {

  data: any = [];
  selectedDatasg: any = [];
  selectedDataId: any = [];
  tt:any='354645708101-bulik49mpgokbl1ef3tgq4de8inf5gli.apps.googleusercontent.com'
  constructor() {}

  ngOnInit(): void {
    //without checked
    // this.data = datasg;
    // this.data.forEach((element: any) => {
    //   element.checked = false;
    //   element.childData.forEach((val: any) => {
    //     val.checked = false;
    //   });
    // });
    // with checked
    this.data = datags;

    this.setValChecked();
  }

  setValChecked() {

    this.data.forEach((val: any) => {
      val.checked = val.childData.every((vals: any) => vals.checked);
    });
    this.getFilteredData();
  }

  changeEvent(e?: any, sg?: any, index?: any) {
     if (e == 'selectAll') {
      this.data[index].childData.forEach((valsgs:any)=>{
        valsgs.checked = sg.checked;
      })
    } else {
      this.data[index].checked = this.data[index].childData.every((val:any)=>val.checked);
    }
    this.getFilteredData();
  }

  getFilteredData() {

    let checkedDatasg: any = [];
    this.data.forEach((val: any) => {
      let obj: any = {};
      if (val.checked) {
        obj = val;
      }
      if (val.childData.some((vals: any) => vals.checked)) {
        obj.childData = val.childData.filter((valsg:any)=>valsg.checked);
      }
      if(Object.keys(obj).length>0) {
        checkedDatasg.push(obj);
      }
    });
    this.selectedDatasg = checkedDatasg;



    let checkedDataIds: any = [];
    this.data.forEach((val: any) => {
      let obj: any = {};
      if (val.checked) {
        obj.id = val.id;
      }
      if (val.childData.some((vals: any) => vals.checked)) {
        obj.childData = [];
        val.childData.forEach((gs: any) => {
          if (gs.checked) {
            obj.childData.push(gs.id);
          }
        });
      }
      if(Object.keys(obj).length>0) {
        checkedDataIds.push(obj);
      }
    });
    this.selectedDataId = checkedDataIds;
  }
}
function signinsucessredirect(googleUser:any) {
  console.log('adsffda')     
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
