let nombreUsuario = "jose";
let KilometrosRecorridos = 80;
let CombustibleConsumido = 8;

let RecorridoMotocicleta = KilometrosRecorridos * CombustibleConsumido;
const cantidad = 0.10 * RecorridoMotocicleta;
let CombustibleKilometro = RecorridoMotocicleta - cantidad;

console.log("::::::::KILOMETROS RECORRIDOS::::::::");
console.log("nombre del Usuario: ", nombreUsuario);
console.log("Kilometros Recorridos: ", KilometrosRecorridos);
console.log("Combustible Consumido: ", CombustibleConsumido);
console.log("Recorrido Motocicleta: ", RecorridoMotocicleta);
console.log("Cantidad: G",cantidad);
console.log("combustible por Kilometro: ", CombustibleKilometro);