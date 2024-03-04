import { Biblioteca } from './entidades/biblioteca';
import { Usuario } from './entidades/usuario';
import { Livro } from './entidades/livro';
import { Autor } from './entidades/autor';


const bibliotecaDaPipi = new Biblioteca();
  
// Criar um autor
const novoAutor: Autor = {
  nome: "Stephen King",
  dataNascimento: "21/09/1947",
  nacionalidade: "norte-americano",
  livros: []
};

// Criar um livro
const novoLivro: Livro = {
  titulo: "O Iluminado",
  autor: novoAutor,
  anoPublicacao: 1977,
  genero: "Horror",
  emprestado: false
};

// Adicionar autor e livro à biblioteca
bibliotecaDaPipi.adicionarAutor(novoAutor);
bibliotecaDaPipi.adicionarLivro(novoLivro);

// Criar um usuário
const novoUsuario: Usuario = {
  nome: "Kalinka",
  email: "kalinka.exatas@email.com",
  livrosEmprestados: []
};

// Emprestar um livro para o usuário
bibliotecaDaPipi.emprestarLivro(novoLivro, novoUsuario);

// Devolver o livro à biblioteca
bibliotecaDaPipi.devolverLivro(novoLivro, novoUsuario);

// Listar livros emprestados
const livrosEmprestados = bibliotecaDaPipi.listarLivrosEmprestados();
console.log("Livros emprestados:", livrosEmprestados);
