import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-fancy-title',
  standalone: false,
  templateUrl: './fancy-title.component.html',
  styleUrl: './fancy-title.component.css'
})
export class FancyTitleComponent implements OnChanges {
  @Input()
  label: any = ""

  imageIndexes: number[]
  letterDelays: number[];

  constructor() {
    this.imageIndexes = this.generateRandomSequence(0, 8);
    this.letterDelays = this.generateRandomDelays(this.label.length, 1000, 2000);
  }

  ngOnChanges() {
    this.letterDelays = this.generateRandomDelays(this.label.length, 1000, 2000);
  }

  generateRandomSequence(a: number, b: number): number[] {
    const sequence = Array.from({ length: b - a + 1 }, (_, i) => a + i);
      for (let i = sequence.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sequence[i], sequence[j]] = [sequence[j], sequence[i]];
    }
    return sequence;
  }

  generateRandomDelays(count: number, min: number, max: number): number[] {
    return Array.from({ length: count }, () => Math.random() * (max - min) + min);
  }
  
}
