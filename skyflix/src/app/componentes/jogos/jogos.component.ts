import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jogo } from 'src/app/objects/jogos';
import { JogoService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.scss'],
})
export class JogosComponent implements OnInit {
  jogos: Jogo[] = [];
  category: any;

  constructor(
    private jogoService: JogoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      this.category = paramMap.get('category');

    });
    this.jogoService.getCategorias(this.category).subscribe((jogos) => {
      this.jogos = jogos;
      console.log(jogos);
    });
  }
}
