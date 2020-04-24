import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingComponent } from './components/greeting/greeting.component';
import { GameComponent } from './components/game/game.component';
import { ResultComponent } from './components/result/result.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'greeting'
  },
  {
    path: 'greeting',
    component: GreetingComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'result',
    component: ResultComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
