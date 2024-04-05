export  interface Compra {
    id?: string;
    nomeComprador: string;
    itens: ItemCompra[];
    data: Date;
    valorTotal: number;
}

interface ItemCompra {
    idProduto : string;
    quantidade: number;
} //poderia colocar essas info diretamente dentro do [] de 'itens'.