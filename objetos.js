//OBJETOS 

// Como criar um objeto em JavaScript?

let pessoa = { 
    nome: 'Joao',
    idade: 32, 
    
}

console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa['nome']) // Forma alternativa 

// Como add um valor 

pessoa.altura = 1.82

console.log(pessoa)

// Remover um valor 

delete pessoa.altura

console.log(pessoa)

console.clear()

// Como percorrer?

for(let chave in pessoa){
    console.log(chave)
}

