const numero = 10;

console.log(numero > 20);
console.log(numero == 10); // Igualdade

console.log(numero == 10);
console.log(numero == "10");
console.log(10 == "10");
console.log(10 === "10");  // Igualdade de String e Inteiros

console.clear()

console.log(10 != 10);
console.log(10 != "10");
console.log(10 !== "10");

// Conjunções Lógicas 

// AND => && 

let idade = 26
let tenhoCNH = false

const possoDirigir = idade >= 18 && tenhoCNH === true;

console.log("Posso Dirigir?", possoDirigir);

// OR => ||

idade = 40;

const votoFacultativo = idade < 18 || idade > 70;

console.log("Meu voto é facultativo?", votoFacultativo)

// NOT => !

const cursoLegal = false;

console.log(!cursoLegal)







