import { Component, OnInit } from '@angular/core';
import { Programas } from 'src/app/objects/programas';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.scss'],
})
export class ProgramasComponent implements OnInit {
  programas: Programas[] = [];

  constructor() {}

  ngOnInit() {}
}
