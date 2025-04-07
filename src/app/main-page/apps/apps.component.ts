import { Component } from '@angular/core';
import { ImagesToPDFComponent } from '../../apps/images-to-pdf/images-to-pdf.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [ImagesToPDFComponent, CommonModule],
  templateUrl: './apps.component.html',
  styleUrl: './apps.component.css'
})
export class AppsComponent {
  hidePdfMakerApp: boolean = true;

  showSection(sectionName: string) {
    if (sectionName === 'pdf-maker') {
      this.hidePdfMakerApp = false;
    }
  }

  closeSection(sectionName: string) {
    if (sectionName === 'pdf-maker') {
      this.hidePdfMakerApp = true;
    }
  }
}
