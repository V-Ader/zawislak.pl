import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-images-to-pdf',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './images-to-pdf.component.html',
  styleUrl: './images-to-pdf.component.css'
})
export class ImagesToPDFComponent {
  images: string[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      Array.from(event.dataTransfer.files).forEach((file) => this.processFile(file));
    }
  }

  processFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (ctx) {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const imageData = ctx.getImageData(0, 0, img.width, img.height);
          const data = imageData.data;
          for (let i = 0; i < data.length; i += 4) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = data[i + 1] = data[i + 2] = avg;
          }
          ctx.putImageData(imageData, 0, 0);
          this.images.push(canvas.toDataURL('image/png'));
        }
      };
    };
    reader.readAsDataURL(file);
  }

  generatePDF() {
    const pdf = new jsPDF();
    let y = 10;
    this.images.forEach((img, index) => {
      if (index > 0) pdf.addPage();
      pdf.addImage(img, 'PNG', 10, y, 180, 160);
    });
    pdf.save('images.pdf');
  }
}
