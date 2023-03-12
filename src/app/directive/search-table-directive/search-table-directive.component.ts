import { Component, OnInit } from '@angular/core';
import { datasg } from './datasg.constant';

@Component({
  selector: 'app-search-table-directive',
  templateUrl: './search-table-directive.component.html',
  styleUrls: ['./search-table-directive.component.css']
})
export class SearchTableDirectiveComponent implements OnInit {
  
  list = datasg;
  namegs:any = '';
  categorysg:any = ''
  constructor() { }

  ngOnInit(): void {
  }

}
