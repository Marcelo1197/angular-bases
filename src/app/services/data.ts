import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class Data {

  constructor(
    private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://dummyjson.com/posts')
      .pipe(
        tap((responseData: any) => console.log(responseData)),
        map((responseData: any) => responseData.posts)
      );
  }
}