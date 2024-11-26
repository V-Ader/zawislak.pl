import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { FancyTitleModule } from './fancy-title/fancy-title.module';
import { FancyGridModule } from './fancy-grid/fancy-grid.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FancyTitleModule,
    FancyGridModule,
    MainPageComponent
  ],
  exports: []
})
export class MainPageModule { }
