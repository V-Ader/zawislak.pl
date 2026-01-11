import { Component, input, output, signal, effect } from '@angular/core';
import { FilterDataModel } from '../model/data.model';

@Component({
  selector: 'app-filter-ack',
  standalone: true,
  imports: [],
  templateUrl: './filter-ack.component.html',
  styleUrl: './filter-ack.component.css'
})
export class FilterAckComponent {

  filterForm = input<FilterDataModel>(new FilterDataModel('empty', 10));

  localFilter = signal<FilterDataModel>(new FilterDataModel('', 0));

  filterChanged = output<FilterDataModel>();

  constructor() {
    effect(() => {
      this.localFilter.set(this.filterForm());
    }, { allowSignalWrites: true });
  }

  onFilterChange(field: string, event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.localFilter.set({ ...this.localFilter(), [field]: field === 'age' ? Number(value) : value });
  }

  acknowledgeFilter() {
    this.filterChanged.emit(this.localFilter());
  }
}
