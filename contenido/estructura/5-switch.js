/**
 *      ESTRUCTURA SWITCH
 */

//Costos de una fruta en la tienda

let comprar = "Manzana"

switch (key) {
    case "Naranjas":
        console.log("Las naeranjas cuentas Q16 la docena");
        break;
    case "Platanos":
        console.log("Los platanos se venden a Q18 la docena");
        break;
    case "Manzanas":
        console.log("El precio de las manzanas por unidad es de Q5");
        break;
    //casos compratidos
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas vale Q12 la libra");
        break;
    default:
        console.log(`No se encontraron con inventario pa ${comprar}`)
        break;
}