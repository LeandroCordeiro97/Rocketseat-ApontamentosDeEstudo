//function Expression   
//function anonymous
let total = 0;

//Parâmetros - Parameters

const sum = function(number1, number2){
    //console.log(number1+number2)
    total = number1+number2
    return total

}

//Sum Significa Soma
//sum(2,3) Argumentos - Arguments

let number1 = 35
let number2 = 25

console.log(`O numero 1 é ${number1}`)
console.log(`O numero 2 é ${number2}`)

console.log(`A Soma é (${sum(number1, number2)}`)
console.log(total)
