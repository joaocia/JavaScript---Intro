// Laço Condicional

const input = require("readline-sync");

const numeroSorteado = 6;

let numero =  Number (input.question("Qual numero escolhe? "));

console.log(numero,typeof numero);

while (numero !== numeroSorteado){
    console.log("Voce errou o numero. Tente novamente... ")

    numero =  Number (input.question("Qual numero escolhe? "));
}

console.log("Voce Acertou!!!")



