import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyGridComponent } from './fancy-grid.component';



@NgModule({
  declarations: [FancyGridComponent],
  imports: [
    CommonModule
  ],
  exports: [FancyGridComponent]
})
export class FancyGridModule { }
