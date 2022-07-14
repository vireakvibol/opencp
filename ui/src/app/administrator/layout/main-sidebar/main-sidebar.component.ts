import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.less']
})
export class MainSidebarComponent implements OnInit {

  public isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
