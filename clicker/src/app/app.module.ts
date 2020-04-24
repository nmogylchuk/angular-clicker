//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { GameComponent } from './components/game/game.component';
import { ResultComponent } from './components/result/result.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RankingComponent } from './components/ranking/ranking.component';

//Services
import { UsersService } from './core/service/users.service';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    GameComponent,
    ResultComponent,
    NotFoundComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
