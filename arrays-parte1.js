// ARRAYS

// Como criar um Array

let arr = ["Joao", 32, 1.89, true];

// Como acessar o Array

console.log("primeiro elemento", arr[0]);
console.log("segundo elemento", arr[1]);
console.log("terceiro elemento", arr[2]);
console.log("quarto elemento", arr[3]);

// Tamanho do Array

console.log("Tamanho Array", arr.length);

console.clear()

// Percorrer o Array

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.clear()

for(let elemento of arr) {
    console.log(elemento)
}

console.clear()

for(let indice in arr) {
    console.log(indice, arr[indice])
}
    




