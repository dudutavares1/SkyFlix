export class Filmes {
  imagem: string;
  titulo: string;
  lancamento: number;
  plataforma: string;
  genero: string;
  link: string;

  constructor(
    imagem: string,
    titulo: string,
    lancamento: number,
    plataforma: string,
    genero: string,
    link: string
  ) {
    this.imagem = imagem;
    this.titulo = titulo;
    this.lancamento = lancamento;
    this.plataforma = plataforma;
    this.genero = genero;
    this.link = link;
  }
}
