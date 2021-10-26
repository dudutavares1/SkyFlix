import { Component, OnInit } from '@angular/core';
import { Programas } from 'src/app/objects/programas';
import { ProgramasService } from 'src/app/services/programas.service';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.scss'],
})
export class ProgramasComponent implements OnInit {
  programas: Programas[] = [];

  constructor(private ProgramasService: ProgramasService) {}

  ngOnInit() {
    this.ProgramasService.getCategorias().subscribe((programas) => {
      this.programas = programas;
      console.log(programas);
    });
  }
}
