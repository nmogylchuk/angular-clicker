import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  
  counter: number;
  timer: number;
  gameStarted: boolean;
  timeout;

  constructor(
    private router: Router) {
      this.counter = 0;
      this.timer = 10;
      this.gameStarted = false;
  }

  onClick() {
    if (!this.gameStarted) {
      this.gameStarted = true;
      this.startTimer();
      return;
    }
    this.counter++;
  }

  redirectToResultPage() {
    window.sessionStorage.setItem('gamer-score', this.counter.toString());
    this.router.navigate(['result']);
  }

  startTimer() {
    this.timeout = setInterval(() => {
      if (this.timer === 0) {
        clearTimeout(this.timeout);
        this.gameStarted = false;
        this.redirectToResultPage();
      }
      this.timer--;
    }, 1000);
  }

  changeTimer(timer) {
    this.timer = timer;
  }
}
