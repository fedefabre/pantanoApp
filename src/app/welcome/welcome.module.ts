import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeWelcomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeWelcomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class WelcomeModule { }
