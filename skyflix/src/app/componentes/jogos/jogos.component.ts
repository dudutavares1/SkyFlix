import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/objects/jogos';
import { JogoService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.scss'],
})
export class JogosComponent implements OnInit {
  jogos: Jogo[] = [];

  constructor( private jogoService: JogoService) {}

  ngOnInit() {
    this.jogoService.getCategorias().subscribe((jogos) => {
      this.jogos = jogos;
      console.log(jogos);
    });
  }
}
