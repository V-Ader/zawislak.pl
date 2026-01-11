import {Component, input, output, signal} from '@angular/core';
import {RepositoryBuilder, RepositoryModel} from "../model/repository.model";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-repository-details',
  standalone: true,
	imports: [
		MatIcon
	],
  templateUrl: './repository-details.component.html',
  styleUrl: './repository-details.component.css'
})
export class RepositoryDetailsComponent {
  	repository = input<RepositoryModel>(RepositoryModel.empty());

  	closeEvent = output()

	close(){
		  this.closeEvent.emit()
	}
}
