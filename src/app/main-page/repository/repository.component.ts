import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RepositoryModel} from './model/repository.model';
import {RepositoryLoaderService} from "./service/repository-loader.service";

@Component({
  selector: 'app-repository',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './repository.component.html',
  styleUrl: './repository.component.css'
})
export class RepositoryComponent {
  repositories: RepositoryModel[] = RepositoryLoaderService.getRepositories();
  selectedRepository: RepositoryModel | null = null;

  openRepository(repository: RepositoryModel) {
    this.selectedRepository = repository;
  }
}
