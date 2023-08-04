import { Component, OnInit } from '@angular/core';
import { checkBoxData } from './checkbox.constant';

@Component({
  selector: 'app-edit-value-index-based',
  templateUrl: './edit-value-index-based.component.html',
  styleUrls: ['./edit-value-index-based.component.css'],
})
export class EditValueIndexBasedComponent implements OnInit {
  dataSg: any = checkBoxData;

  name = null;
  age = null;

  selectedIndex: any;

  constructor() {}

  ngOnInit(): void {}

  Edit(type: any, valgs: any) {
    this.selectedIndex = this.dataSg.findIndex((sg: any) => sg.id == valgs.id);
    // const updateindex:any = this.dataSg.findIndex((sg:any)=>sg.id==valgs.id);

    switch (type) {
      case 'Edit':
        this.name = valgs.title;
        this.age = valgs.age;
        break;

      case 'Delete':
        this.dataSg.splice(this.selectedIndex, 1);
        this.selectedIndex = null;
        break;

      case 'Update':
        this.dataSg[this.selectedIndex].age = this.age;
        this.dataSg[this.selectedIndex].name = this.name;
        this.selectedIndex = null;
        break;
    }
  }
}
