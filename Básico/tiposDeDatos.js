//Existen 10 tipos de datos en JavaScript
//____________________ Primitivos ____________________
// 1. Number: Números enteros y decimales
let numero = 10; // Number
// 2. String: Cadenas de texto
let nombre = "Juan"; // String
// 3. Boolean: Verdadero o falso
let esVerdadero = true; // Boolean
let esFalso = false; // Boolean
// 4. Undefined: Variable sin valor
let variableSinValor; // Undefined
// 5. Null: Variable sin valor
let variableNula = null; // Null
// 6. Symbol: Valor único e inmutable
let simbolo = Symbol("descripcion"); // Symbol como un valor ÚNICO
// 7. BigInt: Números enteros grandes
let numeroGrande = 2n; // BigInt
//____________________ No Primitivos ____________________
// 8. Object: Objeto
let objeto = { nombre: "Juan", edad: 30 }; // Object
// 9. Array: Arreglo
let arreglo = [1, 2, 3, 4, 5]; // Array
// 10. Function: Función
function sumar(a, b) {
  return a + b;
} // Function