import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameGaborComponent } from './game-gabor/game-gabor.component';
import { GameMatch3Component } from './game-match3/game-match3.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNotFoundBackgroundComponent } from './page-not-found-background/page-not-found-background.component';

@NgModule({
  declarations: [
    AppComponent,
    GameGaborComponent,
    GameMatch3Component,
    MenuComponent,
    PageNotFoundComponent,
    PageNotFoundBackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
