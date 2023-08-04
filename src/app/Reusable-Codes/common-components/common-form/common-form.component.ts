import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms'
@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.css']
})
export class CommonFormComponent implements OnInit{

  @Input() submitted = false;
  @Input() control = new FormControl();
  @Input() inputId = '';
  @Input() type? = 'text';
  @Input() customData?:any = {};
  @Input() label? = '';
  @Input() aliasName? :any= ''; 
  @Input() optionalErrorMessage?: Record<string,string> | unknown = {};
  
  @Output() checkboxEmit?:any = new EventEmitter<any>();
  @Output() formValueEmit?:any = new EventEmitter<any>();

  errorMessage: Record<string, string> = {};


  constructor() { }

  ngOnInit() {
      this.errorMessage = Object.assign({},this.optionalErrorMessage);
      this.aliasName = ['',null,undefined].includes(this.aliasName)?this.label:this.aliasName;
      this.type = ['',null,undefined].includes(this.type)?'text':this.type;
  }

  checkboxChange(type:any,val:any) {
    if(type=='selectAll') {
      val.data.forEach((element:any) => {
        element.checked = val.isSelectAll;
      });
    }
    val.isSelectAll = val.data.every((vals:any)=>vals.checked);
    console.log('dsadfa after',val);
    val.checkedDatas = val.data.filter((val:any)=>val.checked);
    this.checkboxEmit.emit(val.data.filter((val:any)=>val.checked));
  }

}
