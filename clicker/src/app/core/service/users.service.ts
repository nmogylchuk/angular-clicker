import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() {}

  setUserName(userName) {
    sessionStorage.setItem('gamer-user-name', userName);
  }

  getUserName() {
    return sessionStorage.getItem('gamer-user-name');
  }

  setScore(score) {
    sessionStorage.setItem('gamer-score', score);
  }

  getScore() {
    return sessionStorage.getItem('gamer-score');
  }

  setScoreHistory(score) {
    sessionStorage.setItem('gamer-score-history', JSON.stringify(score));
  }

  getScoreHistory() {
    return JSON.parse(sessionStorage.getItem('gamer-score-history')) || [];
  }

  setTimer(newTimer) {
    sessionStorage.setItem('timer', newTimer.toString());
  }

  getTimer() {
    return sessionStorage.getItem('timer');
  }
}
