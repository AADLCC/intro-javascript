/**
* Tipos de datos: (1) primitivos y 2 complejos [10 tipos]
*/
 
//(1) Primitivos
//String
let nombre = 'Juan'
 
//number
let edad = 30
 
//boolean
let esEstudiante = true
 
//null
let direccion = null
 
//undefined
let telefono = undefined
 
//symbol
let simbolo = Symbol('descripcion');
 
//bigint
let granNumero = 2n
//console.log(granNumero);
 
//complejos
 
//object
let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    duenio: 'Juan',
    año: 2020
};
 
console.log(carro)
 
//array
let frutas = ['manzana', 'banana', 'naranja'];
 
console.log(frutas);
 
//function
function mostrarFrutas() {
    console.log(frutas);
}