

//inicializamos o array de cachorros
const listaDeCachorros = ['Poodle', 'Bulldog', 'Pastor Alemão', 'Caramelo', "Pincher"]

//pega o número que o usuário digitou
const numeroDoUsuario = prompt("Digite um número de 1 a 5")
console.log(numeroDoUsuario)

//acessa a posição do array com o número que o usuário digitou
const resultado = listaDeCachorros[numeroDoUsuario -1]
console.log(resultado)