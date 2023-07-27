import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  tabList :any

  constructor() { }

  ngOnInit(): void {
    this.tabList = [
      {
        "title": "Home",
        "className":"fa fa-home"
      },
      {
        "title": "Report",
        "className":"far fa-list-alt"
      },
      {
        "title": "Logout",
        "className":"fa fa-sign-out-alt"
      }
  ]
  }
  

}
