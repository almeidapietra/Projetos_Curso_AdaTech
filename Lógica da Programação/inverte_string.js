/* 
    Escreva uma função recursiva que inverte uma string.
*/
let a = "issoaquieumastring";
function inverterString(string) {
    
    return string.split('').reverse().join('');
  }
  
  const stringInvertida = inverterString(a)
  console.log(stringInvertida); 