const alunos = [
    { nome: "Carlos", idade: 15 },
    { nome: "Julia", idade: 18 },
    { nome: "Pedro", idade: 12 },
    { nome: "Aline", idade: 23 },
    { nome: "Joana", idade: 16 },
    { nome: "Maisa", idade: 13 },
  ];

  function verificaAlunosMenores (alunos){
    return alunos.idade < 18 ;
  };
  const alunosMenores = alunos.filter(verificaAlunosMenores);
  console.log(alunosMenores);
  //1. Utilize o método "filter" novamente para criar um novo array com os alunos que têm idade menor que 20 anos.

//2. Utilize o método "filter" mais uma vez para criar um novo array com os alunos cujo nome começa com a letra "J".