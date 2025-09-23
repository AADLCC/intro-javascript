

const string = '54'
const integer = parseInt(string)

//console.log(string)
//console.log(integer)

const flotante = parseFloat("3.14159")
console.log(typeof flotante)//number

const binario = "1010"
const decimal = parseInt(binary, 2)
console.log(decimal)

const hexa = "CAFE"
const decimalh = parseInt(hexa, 16)
console.log(decimalh)

//Implicit Type Casting
const resultado = '5' + 3
//console.log(resultado)
//console.log(typeof resultado)

const sumaBoolean = "3"+ true
//console.log(typeof sumaBoolean)

const sumaConNumero = true + 2
console.log(typeof sumaConNumero)

const valorString = '29'
const valorNumber = 11
const valorBoolean = true 
console.log(valorString + valorString) //concatenar
console.log(valorString + valorNumber) //concatenar
console.log(valorString + valorBoolean) //concatenar

console.log(valorString + valorNumber) //sumar
console.log(valorString + valorString) //concatenar
console.log(valorString + valorBoolean) //sumar

console.log(valorString + valorBoolean) //sumar
console.log(valorString + valorNumber) //sumar
console.log(valorString + valorString) //concatenar
