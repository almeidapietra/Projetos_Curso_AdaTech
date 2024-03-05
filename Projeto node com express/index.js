const express = require ('express'); //importa a biblioteca do express
const app = express(); //criar uma app utilizando o express
app.use(express.json()); //express não converte em json automaticamente, necessário esse middleware
const { v4: uuidv4 } = require('uuid');

const produtos = [
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
]

app.get('/', (req,res) =>{
    res.send('Teste');
}); //1° parametro é a porta, e o 2° é uma função ensinando ao exress o que ele irá fazer quando acessar esta rota. (semre tem que ter um res - mesmo que sem nada)

//listar produtos:
app.get('/produtos', (req,res)=>{
    res.send(produtos);
});

//cadastrar produto:
app.post('/produtos', (req, res) => {
    const produto = req.body;
    
    produto.id = uuidv4(); 
    produtos.push(produto);

    res.send(produto);
});

//buscar produto:
app.get('/produtos/:id', (req, res) => {
    const {id} = req.params; //req.params traria todos os atributos, por isso a necessidade de desestruturar para puxar só o id.
    const produto = produtos.find(item => item.id === id);

    if (!produto) {
        res.status(404).send('{"mensagem": "Produto não encontrado"}');
        return;
    }

    res.send(produto);
});

//editar produto:
app.put('/produtos/:id', (req, res) => {
    const {id} = req.params;
    const produtoAtualizado = req.body;
    const index = produtos.findIndex(item => item.id === id);

    if (index === -1) {
        res.status(404).send('{"mensagem": "Produto não encontrado"}');
    } else {
        produtos[index] = {id, ...produtoAtualizado}; //sprad - espalha os atributos do objeto.
        res.send(produtos[index]);
    }
});

//exluir produto:
app.delete('/produtos/:id', (req, res) => {
    const {id} = req.params;
    const index = produtos.findIndex(item => item.id === id);

    if (index !== -1){
        const produto = produtos[index];
        produtos.splice(index, 1);
        res.send(produto);
    } else {
        res.status(404).send('{"mensagem": "Produto não encontrado"}');
    }
})






app.listen(3000, ()=>{
    console.log('Servidor iniciado');
}); //atribuir este processo do servidor à porta 3000