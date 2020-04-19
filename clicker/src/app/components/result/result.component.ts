import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  userName: string;
  score: string;
  gameEnd: boolean;

  constructor(
    private route: ActivatedRoute
  ) {
    this.gameEnd = false;
    this.score = window.sessionStorage.getItem('gamer-score');
    this.userName = window.sessionStorage.getItem('gamer-user-name');
  }

  endGame() {
    this.gameEnd = true;
  }
}
