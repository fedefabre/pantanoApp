import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeGameComponent } from './components/home-game/home-game.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeGameComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class GameModule { }
