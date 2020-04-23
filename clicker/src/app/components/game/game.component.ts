import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './../../core/service/users.service';

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
  scoreHistory;

  constructor(
    private router: Router, private usersService: UsersService) {
    this.counter = 0;
    this.timer = 10;
    this.gameStarted = false;
  }

  onClick() {
    if (!this.gameStarted) {
      this.gameStarted = true;
      this.usersService.setTimer(this.timer);
      this.startTimer();
      return;
    }
    this.counter++;
  }

  redirectToResultPage() {
    this.scoreHistory = this.usersService.getScoreHistory();
    this.scoreHistory.push({
      userName: this.usersService.getUserName(),
      date: new Date(),
      timer: this.usersService.getTimer(),
      counter: this.counter,
      averageCounter: this.counter / Number(this.usersService.getTimer())
    });
    this.usersService.setScoreHistory(this.scoreHistory);
    this.usersService.setScore(this.counter);
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
