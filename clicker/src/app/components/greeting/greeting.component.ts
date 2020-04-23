import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService} from './../../core/service/users.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})

export class GreetingComponent {

  userName: string;

  constructor(
    private router: Router, private usersService: UsersService) {
    }

  gamePage() {
    this.router.navigate(['game']);
    this.usersService.setUserName(this.userName);
  }
}