import { Injectable } from '@angular/core';
import { Series } from '../objects/series';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  baseUrl = 'http://localhost:3001/series';

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<Series[]> {
   // const url = `${this.baseUrl}/${categoria}`;
    return this.http.get<Series[]>(this.baseUrl);
  }
}
