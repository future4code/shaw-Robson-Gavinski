// Eexercicio 1

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //"Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1]) //"Virginia Cavendish"
console.log(filme.transmissoesHoje[2]) // "Globo""14h"


//EXERCICIO 02

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) //"Juca", 3,"SRD"
console.log(gato) //"Juba",3,"SRD"
console.log(tartaruga) // "Jubo",3 ,"SRD"
//a) O que vai ser impresso no console?

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//espalhamento dos objetos

//EXERCICIO 3

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
//a) O que vai ser impresso no console?

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?














































