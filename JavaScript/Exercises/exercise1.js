/* ### Transformar notas escolares 
  
Crie um algoritimo que transforme as notas do sistema númerico 
para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F
*/


let score = 60
let scoreAlpha

let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0


if (scoreA) {
    scoreAlpha = 'A'
} else if (scoreB) {
   scoreAlpha = 'B'
}else if (scoreC) {
    scoreAlpha = 'C'
}else if (scoreD) {
    scoreAlpha = 'D'
}else if (scoreF) {
    scoreAlpha = 'F'
 } else {
     scoreAlpha = 'Nota Inválida'
 }

 console.log(scoreAlpha)
   


