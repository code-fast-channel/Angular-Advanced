import { Component, OnInit } from '@angular/core';
import { datasg } from './datasg.constant';

@Component({
  selector: 'app-multi-level-checkbox',
  templateUrl: './multi-level-checkbox.component.html',
  styleUrls: ['./multi-level-checkbox.component.css'],
})
export class MultiLevelCheckboxComponent implements OnInit {
  data: any = [];
  selectedDatasg: any = [];
  selectedDataId: any = [];
  constructor() {}

  ngOnInit(): void {
    // without checked property
    this.data = datasg;
    this.data.forEach((element: any) => {
      element.checked = false;
      element.childData.forEach((val: any) => {
        val.checked = false;
      });
    });
  }

  changeEvent(e?: any, sg?: any, index?: any) {
    console.log('valgs', this.data);
    console.table(this.data);

    if (e == 'selectAll') {
      // this.data.forEach((element: any) => {
      //   if (element.id == sg.id) {
      //     element.childData.forEach((val: any) => {
      //       val.checked = sg.checked;
      //     });
      //   }
      // });

      //or

      this.data[index].childData.forEach((valsgs: any) => {
        valsgs.checked = sg.checked;
      });
    } else {
      this.data[index].checked = this.data[index].childData.every(
        (val: any) => val.checked
      );

      //or

      // let selectedData = this.data[index];
      // this.data[index].checked = selectedData.childData.every((val:any)=>val.checked);

      //or

      // let selectedIndex = this.data.findIndex((val: any) => val.id == sg.id);
      // let selectedData = this.data[selectedIndex];
      // this.data[selectedIndex].checked = selectedData.childData.every(
      //   (val: any) => val.checked
      // );
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
        obj.childData = val.childData.filter((valsg: any) => valsg.checked);
      }
      if (Object.keys(obj).length > 0) {
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
      if (Object.keys(obj).length > 0) {
        checkedDataIds.push(obj);
      }
    });
    this.selectedDataId = checkedDataIds;

    // or

    // this.selectedDatasg = this.data.map((val: any) => {
    //   return {
    //     ...val,
    //     childData: val.childData.filter((vals: any) => vals.checked),
    //   };
    // });
    // this.selectedDatasg = this.selectedDatasg.map((element: any) => {
    //   if (element.checked) {
    //     return { ...element };
    //   } else {
    //     if (element.childData.length > 0) {
    //       return { childData: element.childData };
    //     }
    //   }
    // });
    // this.selectedDatasg = this.selectedDatasg.filter((val: any) => val != null);

    // let checkedId: any = [];
    // this.selectedDatasg.forEach((val: any) => {
    //   let gs: any = {};
    //   if (val.checked) {
    //     gs.id = val.id;
    //   }
    //   if (val.childData.length > 0) {
    //     gs.childData = val.childData.map((val: any) => val.id);
    //   }
    //   checkedId.push(gs);
    // });
    // this.selectedDataId = checkedId;
  }
}
