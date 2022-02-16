//pega o nome que o usuário digitou
const nome = prompt("nome do usuario")

//pega a cor que o usuário digitou
const corFavorita = prompt("Digite sua cor favorita")

//insere as variáveis dentro da string por meio da template string
const frase = `Meu nome é ${nome} e minha cor favorita é ${corFavorita}`
console.log(frase)

//concatena a frase por meio do operador +
const frase2 = 'Meu nome é' + nome + 'e minha cor favorita é' + corFavorita
console.log(frase2)