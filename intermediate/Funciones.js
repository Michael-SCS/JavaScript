//Funciones Avanzadas

//Arrow Functions
const funcion = (name) => {
    console.log('Hola ' + name)
}

// - Retorno implicito
const multiplicación = (a, b) => a * b
console.log(multiplicación(2, 4))

// - This léxico
const handler = {
    name: "Michael",
    greeting: function () {
        console.log(`Hola, ${this.name}`)
    },
    //Las arrows functions crean su propio contexto del this.
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}
handler.greeting()
handler.arrowGreeting()

    //IIFE (Expresión de función invocada inmediatamente)
    // - IIFE Clásico
    //Toma el contexto de absolutamente todo el código que hay arriba de este.
    (function () {
        console.log("IIFE Clásico")
    })()