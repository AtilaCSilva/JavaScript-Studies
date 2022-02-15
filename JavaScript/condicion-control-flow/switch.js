function calculate(number1, operator, number2) {
    let result

switch (operator) {
    case '+':
     return result = number1 + number2
         break
    case '-':
     return result = number1 - number2     
         break

    case '*':
     return result = number1 * number2
         break
    
    case '/':
     return result = number1 / number2
         break
    
    default:
        return console.log('não implementado')
         break;
}


}

console.log(calculate(5 * 8))