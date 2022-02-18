

const numeros = [1,2,3,4,5,6]

//tamanho do array
// console.log(numeros.length)

const tamanhoArray = numeros.length
console.log('Tamanho original do array: ', tamanhoArray)

//aidiconar número 7 
numeros.push(7)
console.log("Adicionei 7", numeros)

//remover números 4 e 5
numeros.splice(3, 2)
console.log('Removi 4 e 5:', numeros)
console.log('Removi 4 e 5: ' + numeros)

//novo tamanho do array
const novoTamanho = numeros.length
console.log('Novo tamanho do array:', novoTamanho)

