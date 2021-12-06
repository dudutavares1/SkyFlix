export class Jogo {
  imagem: string;
  titulo: string;
  lancamento: number;
  plataforma: string;
  genero: string;
  link: string;
  categoria: string;

  constructor(
    imagem: string,
    titulo: string,
    lancamento: number,
    plataforma: string,
    genero: string,
    link: string,
    categoria: string
  ) {
    this.imagem = imagem;
    this.titulo = titulo;
    this.lancamento = lancamento;
    this.plataforma = plataforma;
    this.genero = genero;
    this.link = link;
    this.categoria = categoria;
  }
}
