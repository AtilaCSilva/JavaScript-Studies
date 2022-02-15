

// Scope

/*

* Escopo determina a visibilidade de alguma variável no JS

# block statement

// vamos iniciar um bloco 
{
    aqui dentro e um bloco e posso colocar qualquer código
    
} *aqui fecha,os o bloco

 O bloco, tambem criará um novo escopo. Chamamos de 'block-scoped

*/

{
    let x = 0
    console.log(x)
}



/*
  Var
    * var e global e poderá funcionar  fora de um escopo de bloco
*/

// hosting
console.log('> existe x antes do bloco? ', x)  // var e global e também local

{
    var x = 0
}

console.log('> existe x depois do bloco? ', x)

