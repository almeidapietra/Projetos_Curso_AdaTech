import { v4 as uuidv4 } from 'uuid';
import { Produto } from '../models/Produto';

class ProdutosRepository {
    private produtos: Produto[] = [
        {
            "id": "15e16148-9201-4e35-994e-cf2962c4a544",
            "nome": "água 500ml",
            "preco": 2.99
        },
        {
            "id": "ead15ca8-cec2-482b-8113-13736dc19069",
            "nome": "Refrigerante 300ml",
            "preco": 4.99
        }
    ];

    listar(): Produto[] {
        return this.produtos;
    };

    buscar(id: string){
        return this.produtos.find(item => item.id === id);
    }

    cadastrar (produto: Produto) {
        produto.id = uuidv4();
        this.produtos.push(produto);

        return produto;
    }

    editar (produto: Produto){
        const index = this.produtos.findIndex(item => item.id === produto.id);
        this.produtos[index] = produto;
    }

    excluir(id: string) {
        const index = this.produtos.findIndex(item => item.id === id);
        const produto = this.produtos[index];
        this.produtos.splice(index, 1);
        return produto;
    }
}

const produtosRepository = new ProdutosRepository();

export { produtosRepository };

//toda a logica de buscar no banco de dados