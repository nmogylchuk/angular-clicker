import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})

export class GreetingComponent {

  userName: string;

  constructor(
    private router: Router
  ) {}

  gamePage() {
    this.router.navigate(['game']);
    window.sessionStorage.setItem('gamer-user-name', this.userName);
  }
}