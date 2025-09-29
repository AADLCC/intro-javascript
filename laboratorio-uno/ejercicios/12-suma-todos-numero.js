/**
 * Angel Aroldo de la Cruz Chancahavac 
 * 2021326
 * PEDM - IN5CM
 */

// Función que recibe tres números y retorna su suma
function sumarTres(num1, num2, num3) {
    return num1 + num2 + num3;
}

const numero1 = parseFloat(prompt("Ingresa el primer número:"));
const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
const numero3 = parseFloat(prompt("Ingresa el tercer número:"));

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    alert("Por favor, ingresa números válidos.");
} else {
    const resultado = sumarTres(numero1, numero2, numero3);
    alert("La suma de los tres números es: " + resultado);
}
