import { Component, Input } from '@angular/core';

@Component({
  selector: 'fancy-grid',
  standalone: false,
  templateUrl: './fancy-grid.component.html',
  styleUrl: './fancy-grid.component.css'
})
export class FancyGridComponent {
 protected backgrounds = [
"background: rgb(56,24,24);background: linear-gradient(351deg, rgba(56,24,24,1) 0%, rgba(145,43,43,1) 100%);",
"background: rgb(24,31,56);background: linear-gradient(351deg, rgba(24,31,56,1) 17%, rgba(60,85,171,1) 100%);",
"background: rgb(27,56,24);background: linear-gradient(351deg, rgba(27,56,24,1) 17%, rgba(74,190,97,1) 100%);",
"background: rgb(90,92,42);background: linear-gradient(351deg, rgba(90,92,42,1) 6%, rgba(199,196,88,1) 100%);",
"background: rgb(76,38,78);background: linear-gradient(351deg, rgba(76,38,78,1) 13%, rgba(170,88,199,1) 100%);",
"background: rgb(38,78,76);background: linear-gradient(351deg, rgba(38,78,76,1) 13%, rgba(88,199,190,1) 100%);"
]
}
