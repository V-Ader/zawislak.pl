import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyTitleComponent } from './fancy-title/fancy-title.component';
import { MainMenuComponent } from './main-menu.component';
import { FancyTitleModule } from './fancy-title/fancy-title.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FancyTitleModule,
    MainMenuComponent
  ],
  exports: []
})
export class MainMenuModule { }
