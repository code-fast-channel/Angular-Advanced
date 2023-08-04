import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { QuickViewComponent } from '../quick-view/quick-view.component';
@Component({
  selector: 'app-common-table-new-advanced',
  templateUrl: './common-table-new-advanced.component.html',
  styleUrls: ['./common-table-new-advanced.component.css']
})
export class CommonTableNewAdvancedComponent implements OnInit {

  isSelectAll = false;
  dynamicFieldDivShow = false;  


  @Input() HeadArray: any[] = [];
  @Input() GridArray: any[] = [];
  @Input() dynamicFieldShowHide = false;
  @Input() customTemplate?:any = {};
  @Output() buttonChangeEvent = new EventEmitter<any>();
  customDateFormat = 'dd/MM/yyyy hh:mm a'
  constructor(
    // private modalService: NgbModal,
    // public activeModal: NgbActiveModal
    ) {}

  ngOnInit(): void {
    this.isEnableCheckBox();
  }

  buttonChange(key: any, item: any) {
    item.key = key;
    if(item.key == 'quick view') {
      this.viewModal(item)
    }
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

  viewModal(data:any) {
    // const modalRef = this.modalService.open(QuickViewComponent,{
    //   windowClass: 'fade show',
    //   backdrop: 'static'
    // });
    // modalRef.componentInstance.datas = data;
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
