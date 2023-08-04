import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maximum-limit-checkbox',
  templateUrl: './maximum-limit-checkbox.component.html',
  styleUrls: ['./maximum-limit-checkbox.component.css'],
})
export class MaximumLimitCheckboxComponent implements OnInit {
  listgs: any = [
    { id: 1, name: 'Testgsgs' },
    { id: 2, name: 'Testings' },
    { id: 3, name: 'gsdgsgsgsdfsdd' },
    { id: 4, name: 'dsfsdfdfasssfsdd' },
  ];
  filterdataid: any = [];
  filterdatalist: any = [];

  constructor() {}

  ngOnInit(): void {}

  result(event: any, item: any) {
    if (event.target.checked) {
      if (this.filterdatalist.length > 2) {
        this.listgs.forEach((data: any) => {
          if (data.id == item.id) {
            item.checked = false;
          }
        });
        alert('reachedgs');
        return (event.target.checked = false);
      }
      this.filterdatalist = this.listgs.filter((item: any) => item.checked);
      this.ids();
    } else {
      this.filterdatalist.forEach((data: any, index: any) => {
        if (data.id == item.id) {
          this.filterdatalist.splice(index, 1);
        }
      });
      this.ids();
    }
    console.log('filterdatalistgsgsgs', this.filterdatalist);
    return false // remove this line if no errors for your angular version.
  }
  ids() {
    this.filterdataid = this.filterdatalist.map((item: any) => item.id);
  }
}
