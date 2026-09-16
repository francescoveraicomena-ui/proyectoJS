
//FASE DE ENTRADA: DECLARACION DE VARIABLES:
const varones = 225;
const mujeres = 184;

//FASE DE PROCESO: LA LOGICA U OPERACION 
const totalPersonas = varones + mujeres;
let porcentajeVarones = (varones /totalPersonas) * 100;
let porcentajeMujeres = (mujeres /totalPersonas) * 100;

//FASE DE SALIDA: SE HACEN LAS IMPRESIONES EN CONSOLA
console.log("Total de colaboradores: ", totalPersonas);
console.log("Porcentaje de varones: ", porcentajeVarones.toFixed(2), "%");
console.log("Porcentaje de mujeres: ", porcentajeMujeres.toFixed(2), "%");
