import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BigCardComponent,
    MenuBarComponent,
    MenuTitleComponent,
    HomeComponent,
    SmallCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
