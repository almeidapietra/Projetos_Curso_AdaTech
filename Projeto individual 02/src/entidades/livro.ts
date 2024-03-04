import { Autor } from './autor';

export interface Livro {
    titulo: string;
    autor: Autor;
    anoPublicacao: number;
    genero: string;
    emprestado: boolean;
  }