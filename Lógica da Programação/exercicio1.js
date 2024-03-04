let par;
let impar;
array_par = [];
array_impar = [];

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let numero of numeros){
    if ((numero % 2) === 0) {
        array_par.push(numero);
    } else{
        array_impar.push(numero);
    }
}
console.log(array_par);
console.log(array_impar);

/*
    Crie um algoritmo usando o for que leia uma lista. Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
    Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

    Lista -> [1,2,3,4,5,6,7,8,9]
    [2, 4, 6, 8] -> pares
    [1, 3, 5, 7, 9] -> impares
*/