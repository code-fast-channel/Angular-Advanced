import { Component, OnInit } from '@angular/core';
import { checkBoxData } from './checkbox.constant';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-selectall-checkbox',
  templateUrl: './selectall-checkbox.component.html',
  styleUrls: ['./selectall-checkbox.component.css'],
})
export class SelectallCheckboxComponent implements OnInit {
  list: any = [];
  selectedData: any = [];
  selectedId: any = [];
  name: any = '';
  category: any = '';

  // select all without pipe

  public filterData: any = [];
  public backup: any = [];
  public filterDataId = [];
  public selectedAll: any;
  public selectAllValues = false;
  public productListArray: any;

  ngOnInit() {
    this.list = checkBoxData;
    this.result();

    // select all without pipe

    this.productListArray = [
      { id: 1, name: 'Testgsgs' },
      { id: 2, name: 'Testings' },
      { id: 3, name: 'gsdgsgsgsdfsdd' },
      { id: 4, name: 'dsfsdfdfasssfsdd' },
    ];
    this.backup = this.productListArray;
  }

  result() {
    this.selectedData = this.list.filter((item: any) => item.checked);
    this.selectedId = this.selectedData.map((val: any) => val.id);
  }

  // select all without pipe

  changeGs(e?: any) {
    if (e == 'selectAll') {
      for (let i = 0; i < this.productListArray.length; i++) {
        this.productListArray[i].selected = this.selectedAll;
      }
    }
    this.selectedAll =
      this.productListArray.length > 0 &&
      this.productListArray.every((item: any) => item.selected);
    this.filterDataList();
  }

  filterDataList() {
    this.filterData = this.backup.filter((data: any) => data.selected);
    this.filterDataId = this.filterData.map((obj: any) => obj.id);
  }

  search(event: any) {
    if (event.value.length == 0) {
      this.productListArray = this.backup;
    }
    this.productListArray = this.backup.filter((val: any) => {
      return val.name
        .toLocaleLowerCase()
        .match(event.value.toLocaleLowerCase());
    });
    this.changeGs();
  }

  delete(val: any) {
    this.backup.forEach((value: any) => {
      if (value == val) {
        value.selected = false;
      }
    });
    this.changeGs();
  }
}
