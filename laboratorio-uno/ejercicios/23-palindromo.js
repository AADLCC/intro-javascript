/**
 * Angel Aroldo de la Cruz Chancahavac 
 * 2021326
 * PEDM - IN5CM
 */


function convertirEnPalindromo(palabra) {

    let invertida = palabra.split("").reverse().join("");
    if (palabra === invertida) {
        return palabra;
    }

    for (let i = 0; i < palabra.length; i++) {
        let sub = palabra.substring(i);
        let subInvertida = sub.split("").reverse().join("");
        if (sub === subInvertida) {
            return palabra + palabra.substring(0, i).split("").reverse().join("");
        }
    }

    return palabra + invertida;
}

const texto = prompt("Ingresa una palabra para convertirla en palíndromo: ");

if (!texto || texto.trim() === "") {
    alert("Por favor, ingresa una palabra válida. ");
} else {
    const palindromo = convertirEnPalindromo(texto.toLowerCase());
    alert("La palabra convertida en palíndromo es:  " + palindromo);
}
