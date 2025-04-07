import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'blinking-arrow',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './blinking-arrow.component.html',
  styleUrls: ['./blinking-arrow.component.css']
})
export class BlinkingArrowComponent {

  @Input()
  sectionName: string = '';

  scroll(): void {
    const fooSection = document.getElementById(this.sectionName);
    if (fooSection) {
      fooSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
