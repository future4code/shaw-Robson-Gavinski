// EXERCICIO 1 

let array
console.log('a. ', array) // retorna undefined porque não tem = []

array = null
console.log('b. ', array) // retorna null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // indica o tamanho (numero de itens) do array

let i = 5
console.log('d. ', array[i]) // indica o índex do array

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

// EXERCICIO 2
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// "SUBI NUM ÔNIBUS EM MIRROCOS" 27
// EXERCICIO 3
const valor = prompt("valor da passagem para marrocos")