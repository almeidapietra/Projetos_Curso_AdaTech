import { Livro } from './livro';

export  interface Usuario {
    nome: string;
    email: string;
    livrosEmprestados: Livro[];
  }