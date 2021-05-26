import { Component } from '@angular/core';
import { GithubSearchService } from './services/github-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  searchTerm = '';

  items: any[] = [];

  constructor(private gitHubService: GithubSearchService) {}


  onSearch(value:any): void {
    this.gitHubService.getConfig(value).subscribe(response => {
      this.items = response;
    }, (err) => {
        console.error(err);
    })
  }



}
