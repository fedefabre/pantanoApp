import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-game',
  templateUrl: './home-game.component.html',
  styleUrls: ['./home-game.component.less']
})
export class HomeGameComponent{

  mobile = false;
  correct = false;
  answered = false;

  constructor() { 
    if (window.screen.width < 500) {
      this.mobile = true;
    }
  }

  checkAnswer(bool) {
    this.correct = bool;
    this.answered = true;
  }

}
