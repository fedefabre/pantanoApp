import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeWelcomeComponent {

  mobile = false;

  constructor() { 
    if (window.screen.width < 500) {
      this.mobile = true;
    }
  }
}
