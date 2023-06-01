// FUNÇÕES

//Definiçao da funçao

function saudacao() {
    console.log('Ola Seja Bem Vindo a Curso de JacaScript')
}
saudacao()

console.clear()

// Como enviar parâmetros para a funçao

function saudacao(nome, curso = 'JavaScript') {
    
    console.log(`Ola, ${nome} Seja Bem Vindo a Curso de ${curso}`)
}
saudacao('João')

console.clear()

// Retorno da Funçao

function soma(numero1, numero2) {
    return numero1 + numero2 // retorno precisa de um variavel para recerber o valor do retorno
}
let resultado = soma(10,20)
console.log('O Resultado é: ', resultado / 2)

console.clear()

function maiorDoQue50(nuemro){
    if (numero > 50) {
        return true
    }
    return false

    

}



