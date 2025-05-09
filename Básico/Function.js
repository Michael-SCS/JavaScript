//Función tradicional
const suma = function(a,b){
    return a + b;
}
//Arrow function explicita
const suma2 = (a,b) => {
    return a + b;
}
//Arrow function implícita
//Se puede omitir el return y las llaves
const suma3 = (a,b) => a + b;

//Ejemplo de función con parámetros
const almuerzo = (proteina,verdura) => {
    return `El almuerzo es ${proteina} con ${verdura}`;
}
almuerzo('pollo','ensalada');


const functionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function(message) {
        console.log(`${this.name} says: ${message}`);
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`);
    }
}
functionalCharacter.messageWithTraditionalFunction('With great power comes great responsability');  

functionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus');
