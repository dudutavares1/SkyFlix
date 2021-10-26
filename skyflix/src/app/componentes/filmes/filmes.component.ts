import { Component, OnInit } from '@angular/core';
import { Filmes } from 'src/app/objects/filmes';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss'],
})
export class FilmesComponent implements OnInit {
  filmes: Filmes[] = [];

  constructor(private FilmesService: FilmesService) {}

  ngOnInit() {
    this.FilmesService.getCategorias().subscribe((filmes) => {
      this.filmes = filmes;
      console.log(filmes);
    });
  }
}
