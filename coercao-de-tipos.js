// Coerção Explícita

const numero = 10;

console.log(numero, typeof numero);

const numeroFormatoString = String(numero)
console.log(numeroFormatoString, typeof numeroFormatoString)

console.log(Number("1212"));
console.log(parseFloat("23.23")); // forma alternativa
console.log(parseInt("23.23"));
console.log(Boolean(1));
console.log(Boolean(0));

console.clear()

//Coerção Implícita

console.log(10 + "1"); //entede que os dois são textos
console.log(10 - "1"); //converte pra num e faz a operação
console.log(10 * "3");

console.clear()
//Outros Exemplos

let n = 1 + "1";
n = n -1;
console.log(n);

console.log(2 + 3 + 4 + "5");

console.log("5" + 2 + 3 + 4); //entende que são textos 



