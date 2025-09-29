/**
 * Angel Aroldo de la Cruz Chancahavac 
 * 2021326
 * PEDM - IN5CM
 */

// Función que recibe dos números y retorna el mayor
function encontrarMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  
  const numero1 = parseFloat(prompt("Ingresa el primer número:"));
  
  const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
  
  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, ingresa dos números válidos.");
  } else {
    
    const numeroMayor = encontrarMayor(numero1, numero2);
    
    alert("El número mayor es: " + numeroMayor);
  }