const enviarEmail = require("./envia_email");
const verificaDiaSemana = require("./verifica_dia");
const criarCorpoDeEmail = require("./corpo_email");

const emails =[
    {nome: "João", addressee: "joao@email.com", ativo: true},
    {nome: "Bart", addressee: "bart@email.com", ativo: false},
    {nome: "Kalinka", addressee: "kalinka@email.com", ativo: true},
    {nome: "Priscila", addressee: "priscila@email.com", ativo: false},
    {nome: "Lucas", addressee: "lucas@email.com", ativo: true},
];

function verificaEmailAtivo (email){
    return email.ativo == true;
};
const emails_ativos = emails.filter(verificaEmailAtivo);

for (let email of emails_ativos){
    if (verificaDiaSemana() === true){
        const subject = 'Novidades da CarStore'; 
        const body = criarCorpoDeEmail(email.nome);        
        enviarEmail(email.addressee, subject, body);
}
};