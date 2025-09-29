/**
 * Angel Aroldo de la Cruz Chancahavac 
 * 2021326
 * PEDM - IN5CM
 */

// Función que determina si un número es par o impar
function esPar(numero) {
    return numero % 2 === 0;
}

const numero = parseInt(prompt("Ingresa un número:"));

if (isNaN(numero)) {
    alert("Por favor, ingresa un número válido.");
} else {
    if (esPar(numero)) {
        alert("El número " + numero + " es PAR.");
    } else {
        alert("El número " + numero + " es IMPAR.");
    }
}
