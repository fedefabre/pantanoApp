import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreServiceService } from './services/core-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { FormatFilterPipe } from './shared/pipes/format-filter.pipe';
import { WelcomeModule } from './welcome/welcome.module';
import { GameModule } from './game/game.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormatFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    WelcomeModule,
    GameModule
  ],
  providers: [ CoreServiceService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
