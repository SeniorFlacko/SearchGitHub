import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  private configUrl = `  https://api.github.com/search/issues`;


  constructor(private http: HttpClient) { }

  getConfig(keyword: string): Observable<any>{
    let query = `?q=${keyword}:repo:facebook/react&sort=created&order=asc`;

    const url = this.configUrl + query;
    

    return this.http.get<any>(url)
      .pipe(
        map(res => res.items)
      );
  }
}
