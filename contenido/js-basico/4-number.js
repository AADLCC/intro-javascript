/**
* Tipos de dato number
*/
 
//1. entero y decimal
const entero = 42
const decimal = 3.14
const negativo = -7
 
//2. notación científica
const notacionCientifica = 5e3
 
//3. Infinitos y Nan (Not a Number)
const infinito = Infinity
const noEsNumero = NaN
 
//4. operaciones aritmeticas
//4.1 suma, resta, multiplicacion y division
const suma = 2 + 7
const resta = 5 - 4
const multiplicacion = 8 * 2
const division = 2 / 2
 
//4.2 modulo y exponenciacion
const modulo = 5 % 2
const exponenciacion = 2 ** 3
 
//4.3 presicion, javascript tiene problemas de calculo
const precision = 0.1 + 0.2
console.log(precision)
console.log(precision.toFixed(1))
console.log(precision === 0.3)
 
//operaciones avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-5)
const aleatorio = Math.random()
let numero = aleatorio * 20 + 10
 
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(Math.trunc(numero))
 
//ejemplo
const numeroEjemplo = 5;
const booleanoEjemplo = true;
console.log(numeroEjemplo+booleanoEjemplo)