import { Component } from '@angular/core';
import { AppsComponent } from '../apps/apps.component';

@Component({
  selector: 'page-panel',
  standalone: true,
  imports: [AppsComponent],
  templateUrl: './page-panel.component.html',
  styleUrl: './page-panel.component.css'
})
export class PagePanelComponent {

}
