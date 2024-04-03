"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express")); //importa a biblioteca do express
var routes_js_1 = require("./routes.js");
var app = (0, express_1.default)(); //criar uma app utilizando o express
app.use(express_1.default.json()); //express não converte em json automaticamente, necessário esse middleware
app.use(routes_js_1.routes);
app.listen(3000, function () {
    console.log('Servidor iniciado');
}); //atribuir este processo do servidor à porta 3000
/*MVC - Model, View & Controller
1. Controller - Controlador :P
2. Services - Lógicas de negócio
3. Repositories - Persitência de dados*/ 
