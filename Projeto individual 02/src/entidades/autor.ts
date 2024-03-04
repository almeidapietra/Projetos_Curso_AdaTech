import { Livro } from './livro'; 

export interface Autor {
    nome: string;
    dataNascimento: string;
    nacionalidade: string;
    livros: Livro[];
  }