import { Livro } from './livro';
import { Autor } from './autor';
import { Usuario } from './usuario';

export class Biblioteca {
    livros: Livro[] = [];
    autores: Autor[] = [];
    usuarios: Usuario[] = [];
  
    // Método para adicionar livro à biblioteca
    adicionarLivro(livro: Livro) {
      this.livros.push(livro);
    }
  
    // Método para adicionar autor à biblioteca
    adicionarAutor(autor: Autor) {
      this.autores.push(autor);
    }
  
    // Método para adicionar usuário à biblioteca
    adicionarUsuario(usuario: Usuario) {
      this.usuarios.push(usuario);
    }
  
    // Método para emprestar livro a um usuário
    emprestarLivro(livro: Livro, usuario: Usuario) {
      if (!livro.emprestado) {
        livro.emprestado = true;
        usuario.livrosEmprestados.push(livro);
        console.log(`Livro "${livro.titulo}" emprestado para ${usuario.nome}`);
      } else {
        console.log(`O livro "${livro.titulo}" não está disponível no momento.`);
      }
    }
  
    // Método para devolver livro à biblioteca
    devolverLivro(livro: Livro, usuario: Usuario) {
      livro.emprestado = false;
      usuario.livrosEmprestados = usuario.livrosEmprestados.filter(
        (livroEmprestado) => livroEmprestado !== livro
      );
      console.log(`Livro "${livro.titulo}" devolvido por ${usuario.nome}`);
    }
  
    // Método para buscar livros por autor
    buscarLivrosPorAutor(autor: Autor): Livro[] {
      return this.livros.filter((livro) => livro.autor === autor);
    }
  
    // Método para listar livros emprestados
    listarLivrosEmprestados(): Livro[] {
      return this.livros.filter((livro) => livro.emprestado);
    }
  }