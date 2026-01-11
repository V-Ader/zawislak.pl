import { Component, signal } from '@angular/core';
import { FilterDataModel } from './model/data.model';
import { FilterComponent } from './filter/filter.component';
import { FilterAckComponent } from './filter-ack/filter-ack.component';
import { TableComponent } from './table/table.component';
import { TableDataService } from './table/service/table-data.service';
import { TableDataModel } from './table/model/table-data.model';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FilterComponent, FilterAckComponent, TableComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  formData = signal<FilterDataModel>({ name: '', age: 0 });

  tableData = signal<TableDataModel[]>([]);

  constructor(private dataService: TableDataService) {
  }

  updateFilter(updatedData: FilterDataModel) {
    this.formData.set(updatedData);

    this.tableData.set(this.dataService.get(updatedData) || []);
  }
}
