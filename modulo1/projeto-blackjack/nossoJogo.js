
//1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".

     console.log ("Boas vindas ao jogo de Blackjack!")


  if(confirm("Quer iniar uma nova rodada?")){

    }else{    
     console.log("O jogo acabou")
  }
const primeiraCartaDoUsuario = comprarCarta()
const segundaCartaDoUsuario = comprarCarta()
const primeiraCartaDoComputador = comprarCarta()
const segundaCartaDoComputador = comprarCarta()
const somaUsuario = primeiraCartaDoUsuario.valor + segundaCartaDoUsuario.valor
const somaComputador = primeiraCartaDoComputador + segundaCartaDoComputador.valor

function cartUsuario(car1,car2,so1){
   console.log(`Usuario - cartas: ${car1} ${car2} - ${so1}`)
}
function carComputador(car1,car2,so1){ 
   console.log(`Computador - cartas: ${car1} ${car2} - ${so1}`)
}

// Invocações das funções
 
cartUsuario(primeiraCartaDoUsuario.texto,segundaCartaDoUsuario.texto,somaUsuario)
carComputador(primeiraCartaDoComputador.texto,segundaCartaDoComputador.texto,somaComputador)

function quemVenceu(somaUsuario,somaComputador){ 
   if(somaUsuario >  somaComputador && somaUsuario<= 21){ 
      console.log("O usuario ganhou!");
   }else if(somaComputador > somaUsuario && somaUsuario <= 21){ 
      console.log("O computador ganhou!")

 } else if(somaUsuario === somaComputador && somaUsuario,somaComputador<=21){ 
        console.log("Empate")
 }

} 



 console.log (somaUsuario,somaComputador)




