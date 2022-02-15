// Manipuando Arrays

let techs = ["html",
 "css",
 "js",
 "md", 
 "python", "git", "github"]

// adcionar um item no fim
techs.push("nodejs")

// adcionar um item no começo
techs.unshift("nodejs")

// remover um item do fim
techs.pop()

// remover do começo 
techs.shift()

//pegar somentes alguns elementos do array
//console.log(techs.slice(1,3))

// remover um ou mais items em qualquer posição do array
 techs.splice(1,3)

 // encontrar a posição do elemento do array
let index = techs.indexOf('github, git')
techs.splice(index, 1)

console.log(techs)
