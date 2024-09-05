// Template Strings
let nombredeusuario = "Michael";
let estado = true
console.log(`Bienvenido: ${nombredeusuario.toUpperCase()}`)

console.log(`
    ${(estado)? 'Activo' : 'Inactivo'}
    `);

    // Arrays
    const frutas = [];
    const fruta = prompt('Ingresa una fruta');

    frutas.push(fruta);
    while(confirm("Deseas agregar otra fruta?")){
        frutas.push(prompt('Ingresa otra fruta'));
    }

    console.log("Compraste: ");
    for(const fruta of frutas){
        console.log(fruta);
    }