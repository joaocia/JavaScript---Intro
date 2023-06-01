//Laços Numéricos "FOR"

const input = require("readline-sync")

// O Problema
// const nota1 = Number(input.question("Informe a nota 1: "));
// const nota2 = Number(input.question("Informe a nota 2: "));
// const nota3 = Number(input.question("Informe a nota 3: "));

// let media = (nota1 + nota2 + nota3) / 3; 

//Acumulador

let acumulador = 0;

acumulador = acumulador + 10;

acumulador += 2;

acumulador++ 

console.log(acumulador)

// Estrutura FOR 

for (let i = 0; i <= 4; i++) {
    console.log("Repetição", i)
}

console.clear()

for (let i = 10; i <= 12; i++) {
    console.log("Repetição", i)
}

for (let i = 12; i > 8; i--) {
    console.log("Repetição", i)
}
console.clear ()

//Problema - Tres notas e calcular a média

let nota;
let soma = 0;

for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`Informe a nota ${i} da aluno: `));

    soma = soma + nota;
}
console.log(`A Média do Aluno é ${soma/3}. `);


