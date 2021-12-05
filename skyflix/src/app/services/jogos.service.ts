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

  getCategorias(): Observable<Jogo[]> {
    // const url = `${this.baseUrl}/${categoria}`;
    return this.http.get<Jogo[]>(this.baseUrl);
  }
}


