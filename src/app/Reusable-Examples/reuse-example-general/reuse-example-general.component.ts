import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reuse-example-general',
  templateUrl: './reuse-example-general.component.html',
  styleUrls: ['./reuse-example-general.component.css']
})
export class ReuseExampleGeneralComponent implements OnInit {

  
  usersList: any [] = [];
  headArray = [
    {
      displayName: 'SNo',
      type: 'snum',
      customStyle: {
        width: '20%',
        height: '3%',
        // class: 'w-40 red'
      }
    },
    {
      displayName: '',
      type: 'checkBox',
      isEnableSelectall: true, // if you want select All - true
    },
    {
      displayName: 'Name',
      id: 'name',
      type: 'default'
    },
    {
      displayName: 'Age',
      id: 'age',
      type: 'default'
    },
    {
      displayName: 'view',
      type: 'button',
      key: 'View'
    },
    {
      displayName: 'view and navigate',
      type: 'button',
      key: 'View&Navigate'
    },
    {
      displayName: 'Action',
      type: 'buttonGroup',
      buttons: [
        {
        displayName:'edit',
        image:'',
        key: 'Edit',
        customStyle : {
          class: 'btn btn-sm btn-primary ml-3'
        }
      },
      {
        displayName:'delete',
        image:'',
        key: 'Delete',
        customStyle : {
          class: 'btn btn-sm btn-danger ml-3'
        }
      }
    ]
    }
  ];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result: any)=> {
    //  this.usersList = result;
    // })
    this.usersList = [
      {
        name: 'ac',
        age: 2,
      },
      {
        name: 'bb',
        age: 3
      },
      {
        name: 'cc',
        age: 5,
        checked: true
      }
    ]
  }


  buttonAction(e:any) {
    console.log('eeee',e)
    switch (e.key) {
      case 'Edit':
        ///
        console.log('edit',e)
        break;
      case 'Delete':
        ///
        console.log('delete',e)
        break;
      case 'checkBox':
        ///
        console.log('checkBox',e)
        break;
      case 'View':
        ///
        console.log('View',e)
        break;
      case 'View&Navigate':
        ///
        console.log('View&Navigate',e)
        break;
    }
  }


}
