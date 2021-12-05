
import { Injectable } from '@angular/core';
import { Filmes } from './../objects/filmes';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  baseUrl = 'http://localhost:3001/filmes';

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<Filmes[]> {
   // const url = `${this.baseUrl}/${categoria}`;
    return this.http.get<Filmes[]>(this.baseUrl);
  }
}
