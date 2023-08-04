import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms'
import {errMsg} from './common-error-message.constant';

@Component({
  selector: 'app-reusable-form-advanced-design',
  templateUrl: './reusable-form-advanced-design.component.html',
  styleUrls: ['./reusable-form-advanced-design.component.css']
})
export class ReusableFormAdvancedDesignComponent implements OnInit {

  @Input() submitted = false;
  @Input() control = new FormControl();
  @Input() inputId = '';
  @Input() type? = 'text';
  @Input() customData?:any = {};
  @Input() label? = '';
  @Input() aliasName? :any= ''; 
  @Input() optionalErrorMessage?: Record<string,string> | unknown = {};
  @Input() classes?:any
  
  @Output() checkboxEmit?:any = new EventEmitter<any>();

  errorMessage: Record<string, string> = errMsg;


  constructor() { }

  ngOnInit() {
      this.errorMessage = Object.assign({},this.errorMessage,this.optionalErrorMessage);
      this.aliasName = ['',null,undefined].includes(this.aliasName)?this.label:this.aliasName;
      this.type = ['',null,undefined].includes(this.type)?'text':this.type;
      console.log('awsdsad',this.aliasName,this.errorMessage)
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
