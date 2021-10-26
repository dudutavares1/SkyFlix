import { Injectable } from '@angular/core';
import { Programas } from '../objects/programas';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgramasService {
  baseUrl = 'http://localhost:3001/programas';

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<Programas[]> {
    // const url = `${this.baseUrl}/${categoria}`;
    return this.http.get<Programas[]>(this.baseUrl);
  }
}
