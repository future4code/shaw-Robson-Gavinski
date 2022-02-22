//Exercícios de interpretação de código
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//a) Explique o que o código faz. Qual o teste que ele realiza?
// o codigo pede pro usuario digitar qualquer numero que vc quer testar 
//se o numero e par  ele passou se for impar nao passou

//b) Para que tipos de números ele imprime no console "Passou no teste"?
//todos pares 

//c) Para que tipos de números a mensagem é "Não passou no teste"?
// todos impares

//Exercicio 2 

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o codigo acima?
// para saber o valor das frutas preço

//b)b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// repete a palavra maça 
// 

//c) c) Considere que um usuário queira comprar uma Pêra,
// qual seria a mensagem impressa no console se 
// retirássemos o break que está logo acima
 //do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// se retirar break voltaria para preço anterior e teve reajuste
//
//EXERCICIO 3

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//a) O que a primeira linha está fazendo? pedindo para imprimir um numero

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? 
// E se fosse o número -10?
// 10 > 0 passou no teste 
// -10 > 0 nao é maior que zero

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.





