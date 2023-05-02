import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTitleComponent } from './menu-title/menu-title.component';
import { BigCardComponent } from './big-card/big-card.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';



@NgModule({
  declarations: [
    MenuTitleComponent,
    BigCardComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
