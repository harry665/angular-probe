import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  router: any;
  showMenu: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  getBackToTop(): void {
    window.scroll(0,0);
  }
}
