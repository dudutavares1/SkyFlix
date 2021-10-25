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
  programasService: any;

  constructor(private Service: ProgramasService) {}

  ngOnInit() {
    this.programasService.getCategorias().subscribe((programas: Programas[]) => {
      this.programas = programas;
      console.log(programas);
    });
  }
}
