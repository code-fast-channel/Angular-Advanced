import { Component, OnInit } from '@angular/core';
import { checkBoxData,checkBoxData1 } from './checkbox.constant';

@Component({
  selector: 'app-radio-button-sg',
  templateUrl: './radio-button-sg.component.html',
  styleUrls: ['./radio-button-sg.component.css']
})
export class RadioButtonSgComponent implements OnInit {

  checkedValGsSimple:any;

  example1SG: any = checkBoxData;
  checkedValGs:any = 3;

  example1SG1: any = checkBoxData;
  checkedValGs1:any;

  example1SG2: any = checkBoxData1;
  checkedValGs2:any;

  example1SG3: any = checkBoxData1;
  checkedValGs3:any;


  constructor() { }

  ngOnInit(): void {
    this.getCheckedGS2();
    this.getCheckedGS3();
  }

  changeGSSimple() {
    console.log('valsg',this.checkedValGsSimple)
  }
  
  changeGS() {
    console.log('valsg',this.checkedValGs)
  }

  changeGS1(index:any) {
    this.example1SG1.forEach((gs:any,i:any) => {
      if(i==index) {
        gs.checked = true;
        this.checkedValGs1 = gs.id;
      } else {
        gs.checked = false;
      }
    });
    console.log('valsg',this.checkedValGs1)
  }


  changeGS2(parentIndex:any,childIndex:any) {
    this.example1SG2[parentIndex].child.forEach((sg:any,index:any)=>{
      if(index==childIndex) {
        sg.checked = true;
      } else {
        sg.checked = false;
      }
    });
    this.getCheckedGS2();


  }

  getCheckedGS2() {
    console.log('valsg',this.checkedValGs1)

    
    let selectedListSg:any = [];
    this.example1SG2.forEach((gsgs:any) => {
      if(gsgs.child.some((valssg:any)=>valssg.checked)) {
        let selectedVal = gsgs.child.filter((sgs:any)=>sgs.checked);
        // const valsggs = {
        //   title:gsgs,
        //   checkedDatas:selectedVal,
        //   checkedIdIfNeeded : selectedVal.map((ggss:any)=>ggss.ids)
        // }
        //or
        // const valsggs = {
        //   title:gsgs,
        //   checkedIdIfNeeded : selectedVal.map((ggss:any)=>ggss.ids)
        // }
        //or
        const valsggs = {
          title:gsgs.title,
          checkedDatas : selectedVal
        }
        //or
        // selectedListSg.push({title:gsgs.title,checkedDatas:selectedVal});
        selectedListSg.push(valsggs);
      }
    });
    this.checkedValGs2 = selectedListSg;
    console.log('gsgsgsgss',selectedListSg)
  }


  //  changeGS3


  changeGS3(parentIndex:any,childIndex:any) {
    this.example1SG3[parentIndex].child.forEach((sg:any,index:any)=>{
      if(index==childIndex) {
        sg.checked = !sg.checked;
      } else {
        sg.checked = false;
      }
    });
    this.getCheckedGS3();


  }

  getCheckedGS3() {
    console.log('valsg',this.checkedValGs1)

    
    let selectedListSg:any = [];
    this.example1SG3.forEach((gsgs:any) => {
      if(gsgs.child.some((valssg:any)=>valssg.checked)) {
        let selectedVal = gsgs.child.filter((sgs:any)=>sgs.checked);
        // const valsggs = {
        //   title:gsgs,
        //   checkedDatas:selectedVal,
        //   checkedIdIfNeeded : selectedVal.map((ggss:any)=>ggss.ids)
        // }
        //or
        // const valsggs = {
        //   title:gsgs,
        //   checkedIdIfNeeded : selectedVal.map((ggss:any)=>ggss.ids)
        // }
        //or
        const valsggs = {
          title:gsgs.title,
          checkedDatas : selectedVal
        }
        //or
        // selectedListSg.push({title:gsgs.title,checkedDatas:selectedVal});
        selectedListSg.push(valsggs);
      }
    });
    this.checkedValGs3 = selectedListSg;

    this.example1SG3.forEach((gsgs:any) => {
      if(gsgs.child.some((valssg:any)=>valssg.checked)) {
        gsgs.required = false;
      } else {
        gsgs.required = true;
      }
    });
    console.log('gsgsgsgss3',selectedListSg)
  }

  submitGS3() {
    if(this.example1SG3.every((gs:any)=>!gs.required)) {
      alert('All filedgsgs filed.')
    } else {
      alert('please fill all filedgsgs') // use return here to avoid api call.
    }
  }

}
