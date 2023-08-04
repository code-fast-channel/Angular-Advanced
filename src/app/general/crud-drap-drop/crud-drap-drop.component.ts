import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-drap-drop',
  templateUrl: './crud-drap-drop.component.html',
  styleUrls: ['./crud-drap-drop.component.css']
})
export class CrudDrapDropComponent implements OnInit {

  constructor() { }

  attributeVal = [
    {
      attributeName: 'input',
      image: '',
      attribute: [
        {
          attributeName: '',
          aliasName:'a',
          type: 'input',
          isMandatory: 1,
          attributeValue: [
            {
            attributeNameValue: ''
          }
        ]
        }
      ]
    },
    {
      attributeName: 'dropdown field',
      image: '',
      attribute: [
        {
          attributeName: '',
          type: 'dropdown',
          isMandatory: 1,
          aliasName:'b',
          attributeValue: [
            {
            attributeNameValue: ''
          }
        ]
        }
      ]
    }
  ];

  
  selectedAttribute:any = [];
  
  selectAttributeValue:any = null;
  
  tempValue = null;
  tempArray:any = [];

  ngOnInit(): void { 
  }

  drapAttribute(val:any) {
    this.selectedAttribute.push(JSON.parse(JSON.stringify(val.attribute[0])));
  }
 
  selectAttribute(data:any,index:any) {
    this.selectAttributeValue =JSON.parse(JSON.stringify(data));
    this.reset(index);
  }

  submit() {
    const index = this.selectedAttribute.indexOf((val:any)=>val.isRead)
    if(['checkbox','select','dropdown'].includes(this.selectAttributeValue.type)) {
      this.selectAttributeValue.attribute = this.tempArray;
      this.tempArray = [];
      this.tempValue = null;
    } else{
      this.selectAttributeValue.attribute[0].attributeNameValue = '';
    }
    this.selectedAttribute.splice(index,1,this.selectAttributeValue);
    this.reset(null,true);
    this.selectAttributeValue = null;
  }

  reset(index = null,isReset = false) {
    this.attributeVal.forEach((element:any,i:any) => {
      element.isRead = false;
      if(index == i && !isReset) {
        element.isRead = true;
      }
    });
  }

  submitTempValue() {
    this.tempArray.push({attributeNameValue: this.tempValue});
    this.tempValue = null;
  }

}
