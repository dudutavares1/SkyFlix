import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.scss'],
})
export class ProgramasComponent implements OnInit {
  descricao: any = [
    {
      imagem:
        'https://img.utdstc.com/icon/b94/5f2/b945f238cde73bdaa66d821f2bc1c26c6bac99a880faf9657f447b4be9b2672d:100',
      titulo: 'UltraEdit',
      plataforma: 'PC',
      link: 'https://www.iobit.com/downloadcenter.php?product=pt-iobit-screen-recorder',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
