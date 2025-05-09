let cajaDeAndy = "Hola Andy";
let cajaDeJuan = "Hola Juan";

// LO NO PERMITIDO
let c = "Hola Andy"; // No se debe poner una variable con nombres qye no tengan sentido, siempre las variables deben tener un nombre que tenga sentido y se entienda de que se tratará, mejor largo, descriptivo y claro que corto, confuso y poco descriptivo

// LO PERMITIDO
let primerTrateoDeAndy = "Hola Andy"; // Se puede poner una variable con nombres que tengan sentido, siempre las variables deben tener un nombre que tenga sentido y se entienda de que se tratará, mejor largo, descriptivo y claro que corto, confuso y poco descriptivo
let urlDelUsuario = "https://www.google.com/";
let idDElUsuario = 123456789; 
//LO IDEAL E QUE LAS VARIABLES SIMEPRE VAYAN AL INICIO DE CADA CÓDIGO


//_______________________________________________________________
//Let se utiliza para crear variables que pueden cambiar su valor
//Const se utiliza para crear variables que no pueden cambiar su valor

let contador = 0; // Se puede cambiar el valor de la variable
contador += 1; // Se puede cambiar el valor de la variable
console.log(contador); // 1

const contadorConstante = 3.14; // Se puede cambiar el valor de la variable
//contadorConstante += 1; // No se puede cambiar el valor de la variable
console.log(contadorConstante); // 3.14
//_______________________________________________________________