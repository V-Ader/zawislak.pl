import { Component } from '@angular/core';
import { FancyTitleModule } from './fancy-title/fancy-title.module';
import { FancyGridModule } from './fancy-grid/fancy-grid.module';

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [FancyTitleModule, FancyGridModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
