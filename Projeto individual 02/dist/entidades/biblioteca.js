"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    livros = [];
    autores = [];
    usuarios = [];
    // Método para adicionar livro à biblioteca
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    // Método para adicionar autor à biblioteca
    adicionarAutor(autor) {
        this.autores.push(autor);
    }
    // Método para adicionar usuário à biblioteca
    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
    }
    // Método para emprestar livro a um usuário
    emprestarLivro(livro, usuario) {
        if (!livro.emprestado) {
            livro.emprestado = true;
            usuario.livrosEmprestados.push(livro);
            console.log(`Livro "${livro.titulo}" emprestado para ${usuario.nome}`);
        }
        else {
            console.log(`O livro "${livro.titulo}" não está disponível no momento.`);
        }
    }
    // Método para devolver livro à biblioteca
    devolverLivro(livro, usuario) {
        livro.emprestado = false;
        usuario.livrosEmprestados = usuario.livrosEmprestados.filter((livroEmprestado) => livroEmprestado !== livro);
        console.log(`Livro "${livro.titulo}" devolvido por ${usuario.nome}`);
    }
    // Método para buscar livros por autor
    buscarLivrosPorAutor(autor) {
        return this.livros.filter((livro) => livro.autor === autor);
    }
    // Método para listar livros emprestados
    listarLivrosEmprestados() {
        return this.livros.filter((livro) => livro.emprestado);
    }
}
exports.Biblioteca = Biblioteca;
