import { Component, signal } from '@angular/core';
import { DataModel } from './model/data.model';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  formData = signal<DataModel>({ name: '', age: 0 });

  updateFilter(updatedData: DataModel) {
    this.formData.set(updatedData);
  }
}
