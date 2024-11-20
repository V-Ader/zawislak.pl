import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fancy-title',
  standalone: false,
  templateUrl: './fancy-title.component.html',
  styleUrl: './fancy-title.component.css'
})
export class FancyTitleComponent {
  @Input()
  label: any = ""

  imageIndexes: number[]

  constructor() {
    this.imageIndexes = this.generateRandomSequence(0, 8)
  }

  generateRandomSequence(a: number, b: number): number[] {
    const sequence = Array.from({ length: b - a + 1 }, (_, i) => a + i);
      for (let i = sequence.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sequence[i], sequence[j]] = [sequence[j], sequence[i]];
    }
    return sequence;
  }
  
}
