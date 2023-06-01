//ARRAYS PARTE 2 - METODOS DE ARRAYS 

let arr1 = [30, 12, 45, 34, 29]
let arr2 = []

// Fatiamento ou Slice

console.log(arr1.slice(0, 1));
console.log(arr1.slice(2));

console.clear()

// Add elemntos: push | unshift

console.log("Antes de Add: ", arr2)

arr2.push(10, 20);
arr2.push(30); // o segundo 'push' add o elemento sempre no final do array

console.log("Antes de Add: ", arr2)

console.log("Antes de Add com Unshift: ", arr2)

arr2.unshift(0) // ele add no inicio do array 

console.log("Depois de Add com Unshift: ", arr2)

console.clear()

// Removendo elementos Pop

console.log("Antes de Remover com Pop: ", arr2)

const elementoRemovido = arr2.pop() // remove o ultimo elemento

console.log("Depois de Remover com Pop: ", arr2)
console.log('O elementos removido foi: ', elementoRemovido)



console.log("Antes de Remover com Shift: ", arr2)

arr2.shift() // remove o primeiro elemento

console.log("Depois de Remover com Shift: ", arr2)

console.clear()

// Concatenar os Arrays 

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

console.clear()

//Busca elementos no Array 

console.log(arr1)

let indiceDoElemntos = arr1.indexOf(34);
console.log(indiceDoElemntos)

let arr3 = [1,2,3,3,5,3]

console.log(arr3.lastIndexOf(3))

console.clear()

//Descobrindo existencia de um elemento

console.log(arr1)

console.log(arr1.includes(10))

console.clear()

//Inverter Array 

console.log('arr1 normal: ', arr1)

const arr1Invertido = arr1.reverse()

console.log('arr1 invertido: ', arr1Invertido)















