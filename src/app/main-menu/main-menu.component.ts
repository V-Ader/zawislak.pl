import { Component } from '@angular/core';
import { FancyTitleModule } from './fancy-title/fancy-title.module';

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [FancyTitleModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

}
