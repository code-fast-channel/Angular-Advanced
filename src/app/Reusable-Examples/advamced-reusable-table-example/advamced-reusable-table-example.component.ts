import { Component, OnInit } from '@angular/core';
import { Custom, OverAllTable, TableWithCheckBox, TableWithCheckBoxAll, TableWithoutCheckbox } from './data.constant';

@Component({
  selector: 'app-advamced-reusable-table-example',
  templateUrl: './advamced-reusable-table-example.component.html',
  styleUrls: ['./advamced-reusable-table-example.component.css']
})
export class AdvamcedReusableTableExampleComponent implements OnInit {

  overAllHeadArray = OverAllTable;
  TableWithoutCheckbox:any = TableWithoutCheckbox;
  TableWithCheckBox:any = TableWithCheckBox;
  TableWithCheckBoxAll:any = TableWithCheckBoxAll;
  custom:any = Custom;
  usersList = [
    {
      name: 'apple',
      age: 2,
      date: Date.now()
    },
    {
      name: 'ball',
      age: 3,
      date: Date.now()
    },
    {
      name: 'cat',
      age: 5,
      checked: true,
      date: Date.now()
    }
  ]

  usersList1 = [
    {
      name: 'apple',
      age: 2,
    },
    {
      name: 'ball',
      age: 3
    },
    {
      name: 'cat',
      age: 5,
      checked: true
    }
  ]

  constructor(
    // private modalService: NgbModal,public activeModal: NgbActiveModal
    ) {
    
  }

  ngOnInit(): void {
  }


  buttonAction(e: any) {
    console.log('eeee', e)
    switch (e.key) {
      case 'Edit':
        console.log('edit', e)
        break;
      case 'Delete':
        console.log('delete', e)
        break;
      case 'checkBox':
        console.log('checkBox', e)
        break;
      case 'View':
        console.log('View', e)
        break;
      case 'View&Navigate':
        console.log('View&Navigate', e)
        break;
    }
  }

  open() {

    // to open 
    // const modalRef = this.modalService.open(QuickViewComponent,{
    //   windowClass: 'fade show',
    //   backdrop: 'static'
    // });
  }

  customClick(data,index) {
    console.log('data',data,index)
  }

}
