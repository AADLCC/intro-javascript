/**
 * Angel Aroldo de la Cruz Chancahavac 
 * 2021326
 * PEDM - IN5CM
 */

// Función que convierte una palabra en palíndromo
function convertirEnPalindromo(palabra) {
    // Si ya es palíndromo, la devolvemos igual
    let invertida = palabra.split("").reverse().join("");
    if (palabra === invertida) {
        return palabra;
    }

    // Recorremos desde la primera letra hasta encontrar
    // la parte más larga que ya forma palíndromo
    for (let i = 0; i < palabra.length; i++) {
        let sub = palabra.substring(i);
        let subInvertida = sub.split("").reverse().join("");
        if (sub === subInvertida) {
            // Agregar al final la parte que falta invertida
            return palabra + palabra.substring(0, i).split("").reverse().join("");
        }
    }

    // Si no se encontró nada (caso extremo), devolvemos palabra+invertida
    return palabra + invertida;
}

const texto = prompt("Ingresa una palabra para convertirla en palíndromo:");

if (!texto || texto.trim() === "") {
    alert("Por favor, ingresa una palabra válida.");
} else {
    const palindromo = convertirEnPalindromo(texto.toLowerCase());
    alert("La palabra convertida en palíndromo es: " + palindromo);
}
