/* ### Celsius em fahrenheit

Crie uma função que receba uma string em 
celsius ou fahreiheit e faça a transformação de uma unidade
para outra.

C = (F - 32) * 5/9
F = C * 9/5 + 32

*/

function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')
  

  // fluxo de erro
  if (!celsiusExists && !fahrenheitExists) {
      throw new Error('Grau não identificado')
  }

  // fluxo ideal, F -> C
  let UpdateDgree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahreiheit) => (fahreiheit - 32) * 5 / 9
  let degreeSign = 'C'

  // fluxo alternativo C -> F
  if (celsiusExists) {
      UpdateDgree = Number(degree.toUpperCase().replace("F", ""));
      formula = celsius => celsius * 9 / 5 + 32
      degreeSign = 'F'
  }




  return formula(UpdateDgree) + degreeSign

}


try {
  console.log(transformDegree('50F'))
  console.log(transformDegree('10C'))
  transformDegree('50Z')
} catch (error) {
  console.log(error.message)
}