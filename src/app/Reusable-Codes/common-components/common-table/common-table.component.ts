import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css'],
})
export class CommonTableComponent implements OnInit {
  isSelectAll = false;

  @Input() HeadArray: any[] = [];
  @Input() GridArray: any[] = [];
  @Output() buttonChangeEvent = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    this.isEnableCheckBox();
  }

  buttonChange(key: any, item: any) {
    item.key = key;
    this.buttonChangeEvent.emit(item);
  }

  checkBoxEvent(type?: any) {
    if (type === 'selectAll') {
      this.GridArray.forEach((element: any) => element.checked = this.isSelectAll);
    }
    let selectedDatasList: any = [...this.GridArray].filter((val: any) => val.checked);
    this.isSelectAll = this.GridArray.every((val: any) => val.checked);
    const val = {
      key: 'checkBox',
      selectedDatas: [...selectedDatasList],
    };
    this.buttonChangeEvent.emit(val);
  }

  private isEnableCheckBox() {
    const isExist = this.HeadArray.findIndex(
      (val: any) => val.type === 'checkBox'
    );
    if (isExist >= 0) {
      this.GridArray.forEach((element: any) => {
        element.checked = element.checked ?? false;
      });
      this.checkBoxEvent();
    }
  }
}
