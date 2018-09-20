import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'lib-my-lib-first',
  templateUrl: './my-lib-first.component.html',
  styleUrls: ['./my-lib-first.component.css']
})
export class MyLibFirstComponent implements OnInit {
  hero = {
    id: 1,
    name: 'My Library'
  };
  constructor() { }


  ngOnInit() {
  }

}
