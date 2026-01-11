import { Component, input } from '@angular/core';
import { FilterDataModel } from '../model/data.model';
import { TableDataService } from './service/table-data.service';
import { TableDataModel } from './model/table-data.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  tableData = input<TableDataModel[]>([]);

  constructor() {
  }
}
