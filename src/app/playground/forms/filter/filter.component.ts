import { Component, input, output } from '@angular/core';
import { DataModel } from '../model/data.model';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  filterForm = input<DataModel>(new DataModel('', 0));

  filterChanged = output<DataModel>();

  onFilterChange() {
    this.filterChanged.emit(this.filterForm());
  }
}
