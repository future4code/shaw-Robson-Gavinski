//pega a frase que o usuário digitou
const frase = prompt("Digite uma frase:")

//deixa a frase toda em letra maiúscula
const letraMaiuscula = frase.toUpperCase()
console.log(letraMaiuscula)

//substitui a letra O por I na frase
const substituir = frase.replaceAll("o", "i")
console.log(substituir)

//imprime o tamanho da frase
console.log('Tamanho da frase:', frase.length)