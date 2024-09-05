// Funciones declarativas RECOMENDADA SIEMPRE USAR ESTA
function numeroAleatorio(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(numeroAleatorio(1, 10));

// Funciones Expresivas
const numAzar = function(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
};
console.log(numAzar(100, 201));


// Arrow Functions
const numAzar2 = (min,max) => Math.floor(Math.random() * (max - min)) + min;

console.log(numAzar2(100, 201));


const numAzar3 = (min = 1,max = 100) => {
  math.floor(Math.random() * (max - min)) + min;
}
console.log(numAzar3());
// Si quiero omitir el primer valor por defecto
console.log(numAzar3(undefined, 50));
// el segundo valor
console.log(numAzar3(10));