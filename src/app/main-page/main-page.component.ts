import { Component } from '@angular/core';
import { FancyTitleModule } from './fancy-title/fancy-title.module';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { PagePanelComponent } from './panel/page-panel.component';
import { BlinkingArrowComponent } from './blinking-arrow/blinking-arrow.component';
import { RepositoryComponent } from './repository/repository.component';

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [FancyTitleModule, NavigationBarComponent, PagePanelComponent, BlinkingArrowComponent, RepositoryComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
