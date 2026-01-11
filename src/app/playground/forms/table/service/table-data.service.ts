import { Injectable } from "@angular/core";
import { TableDataModel } from "../model/table-data.model";
import { FilterDataModel } from "../../model/data.model";

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

    private rawData: TableDataModel[] = [
            { id: 1, name: 'John Doe', age: 28, email: 'john.doe@example.com' },
            { id: 2, name: 'Jane Smith', age: 34, email: 'jane.smith@example.com' },
            { id: 3, name: 'Sam Johnson', age: 45, email: 'sam.johnson@example.com' },
            { id: 4, name: 'Emily Davis', age: 31, email: 'emily.davis@example.com' },
            { id: 5, name: 'Michael Brown', age: 52, email: 'michael.brown@example.com' },
            { id: 6, name: 'Sarah Wilson', age: 29, email: 'sarah.wilson@example.com' },
            { id: 7, name: 'David Lee', age: 38, email: 'david.lee@example.com' },
            { id: 8, name: 'Jessica Martinez', age: 35, email: 'jessica.martinez@example.com' },
        ];

    get(filter: FilterDataModel): TableDataModel[] {
        return this.rawData.filter(item => {
            if (filter.name && !item.name.toLowerCase().includes(filter.name.toLowerCase())) {
                return false;
            }
            if (filter.age !== 0 && item.age < filter.age) {
                return false;
            }
            return true;
        });
    }
}