const pinCorrecto = "1234";

const intentos = ["2345", "4566", "6789"];
let intentoRealizados = 0;
const maxIntentos = 3;
let accesoConcedido = false;

do {
    let pinIngresado = intentos[intentoRealizados];
    intentoRealizados++;

    console.log(`intento ${intentoRealizados}: Ingresando PIN...`)
    if (pinIngresado === pinCorrecto) {
        console.log("PIN ACEPTADO, BIENVENIDO AL SISTEMA");
        accesoConcedido = true;
    } else {
        console.log("PIN INCORRECTO.");
    }

} while (!accesoConcedido && intentoRealizados < maxIntentos);

if (!accesoConcedido) {
    console.log("¡¡¡¡TARJETA BLOQUEADA¡¡¡¡");
}