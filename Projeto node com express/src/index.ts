import express from 'express'; //importa a biblioteca do express
import { routes } from './routes';

const app = express(); //criar uma app utilizando o express
app.use(express.json()); //express não converte em json automaticamente, necessário esse middleware
app.use(routes);




app.listen(3000, ()=>{
    console.log('Servidor iniciado');
}); //atribuir este processo do servidor à porta 3000


/*MVC - Model, View & Controller 
1. Controller - Controlador :P 
2. Services - Lógicas de negócio
3. Repositories - Persitência de dados*/