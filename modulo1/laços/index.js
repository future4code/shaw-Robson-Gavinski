//Exercícios de interpretação de código

//1) O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) { // indice 0 + valor 0 vai repetir ate o valor 5 loup + indice
  valor += i
}
console.log(valor) //10

//Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

//a) O que vai ser impresso no console? todos numeros maior que 18

//)b) Se eu quisesse acessar o **índice** de 
//cada elemento dessa lista, o `for...of...` é
// suficiente? Se sim, o que poderia ser usado para fazer isso?
//sim mudaria o numero por indice algo assim

//3)Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
 // adicionaria * para uma linha ** para duas linhas *** para 3 linhas **** 4 linhas

//exercicio de escrita


const bichinhos = Number(prompt("Quantos bichinhos você tem: "))

    













