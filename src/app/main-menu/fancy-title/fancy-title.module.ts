import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyTitleComponent } from './fancy-title.component';
import { IterablePipe } from './pipe/iterable-pipe';



@NgModule({
  declarations: [FancyTitleComponent],
  imports: [
    CommonModule,
    IterablePipe
  ],
  exports: [FancyTitleComponent]
})
export class FancyTitleModule { }
