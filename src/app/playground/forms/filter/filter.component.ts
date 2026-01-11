import { Component, input, output } from '@angular/core';
import { FilterDataModel } from '../model/data.model';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  disabled = input<boolean>(false);

  filterForm = input<FilterDataModel>(new FilterDataModel('', 0));

  filterChanged = output<FilterDataModel>();

  onFilterChange(field: string, event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const updated = { ...this.filterForm(), [field]: field === 'age' ? Number(value) : value };
    this.filterChanged.emit(updated);
  }
}
