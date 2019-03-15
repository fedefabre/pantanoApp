import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeWelcomeComponent } from './welcome/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeWelcomeComponent },
  { path: 'preguntas', component: HomeComponent},
  { path: '**', redirectTo: 'preguntas'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
