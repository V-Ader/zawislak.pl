import { Component } from '@angular/core';
import { FormsComponent } from './forms/forms.component';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [FormsComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css'
})
export class PlaygroundComponent {

}
