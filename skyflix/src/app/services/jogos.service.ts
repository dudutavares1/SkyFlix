import { Injectable } from '@angular/core';
import { Jogo } from '../objects/jogos';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JogoService {
  baseUrl = 'http://localhost:3001/jogos';

  constructor(private http: HttpClient) {}

  getCategorias(categoria: string): Observable<Jogo[]> {
    const url = `${this.baseUrl}/$categoria`;
    console.log(categoria);
    return this.http.get<Jogo[]>(url);
  }
}
