import { Component } from '@angular/core';
import { UsersService } from './../../core/service/users.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent {
  rankingData;

  constructor(private usersService: UsersService) {
    this.rankingData = [];
    this.rankingData = this.usersService
      .getScoreHistory()
      .sort((a, b) => b.averageCounter - a.averageCounter);
  }
}
