import { Component} from '@angular/core';
import { UsersService } from './../../core/service/users.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  userName: string;
  score: string;
  gameEnd: boolean;

  constructor(private usersService: UsersService) {
    this.gameEnd = false;
    this.score = this.usersService.getScore();
    this.userName = this.usersService.getUserName();
  }

  endGame() {
    this.gameEnd = true;
  }
}
