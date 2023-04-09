import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollgs(val?:any) {
    let element:any = document.getElementById("box");

// element.scrollIntoView();
// element.scrollIntoView(false);
// element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  }

}
