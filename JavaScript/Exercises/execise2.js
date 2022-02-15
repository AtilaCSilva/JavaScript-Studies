/* ### Sistema de gastos famliar


crie um objeto que possuirá 2 propriedades, ambas do tipo array:
      * Receitas: []
      * Despesas: []
      
Agora, crie uma função que irá calcular o total de receitas  e 
irá mostrar uma menssagem se a família está com saldo positivo ou
negativo, seguido do valor do saldo.

*/


let Systen = { 
    recipe: [100, 350, 2000, 200.60, 13000],
    outlay: [400, 270, 200, 750]
}

function sum(array) {
   let total = 0;
   for(let value of array) {
       total += value
   }
    return total
}

function CalculateBalance() {
    const calculateRecipe = sum(Systen.recipe)
    const calculateOutlay = sum(Systen.outlay)

 const total = calculateRecipe - calculateOutlay
 
 const itsOk = total >= 0

let balanceTex = 'negativo'

 if (itsOk) {
   balanceTex = 'positivo'
 }

 console.log(`Seu saldo é ${balanceTex}: ${total.toFixed(2).replace("." , ",")}`)
}

CalculateBalance()