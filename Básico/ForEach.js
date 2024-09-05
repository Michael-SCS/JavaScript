const frutas = [];
const fruta = prompt('Ingresa una fruta');

frutas.push(fruta);
while(confirm("Deseas agregar otra fruta?")){
    frutas.push(prompt('Ingresa otra fruta'));
}

console.log("Compraste: ");
frutas.forEach((fruta) => console.log(fruta));