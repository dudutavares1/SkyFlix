import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jogo } from 'src/app/objects/jogos';
import { JogoService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.scss'],
})
export class JogosComponent implements OnInit {
  jogos: Jogo[] = [];


  constructor(
    private jogoService: JogoService,
    private router: Router
    ) {}

  ngOnInit() {
    this.jogoService.getCategorias(this.router.url).subscribe((jogos) => {
      this.jogos = jogos;
      console.log(jogos);
    });
  }
}
