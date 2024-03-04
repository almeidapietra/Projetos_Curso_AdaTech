"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const biblioteca_1 = require("./entidades/biblioteca");
const bibliotecaDaPipi = new biblioteca_1.Biblioteca();
// Criar um autor
const novoAutor = {
    nome: "Stephen King",
    dataNascimento: "21/09/1947",
    nacionalidade: "norte-americano",
    livros: []
};
// Criar um livro
const novoLivro = {
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
const novoUsuario = {
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
