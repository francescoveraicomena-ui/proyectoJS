let nombreEmpleado = "pepe";
let horasTrabajadas = 40;
let tarifaHora = 50;

let salarioBruto = horasTrabajadas * tarifaHora;
const impuesto = 0.10 * salarioBruto;
let salarioNeto = salarioBruto - impuesto

console.log(":::::::::BOLETA DE PAGO:::::::::");
console.log("Nombre del Empleado: ", nombreEmpleado); 
console.log("Horas Trabajadas: ", horasTrabajadas);
console.log("Tarifa por Hora: S/", tarifaHora);
console.log("Salario Bruto: S/ ",salarioBruto);
console.log("Impuesto: S/" , impuesto);
console.log("Salario Neto:", salarioNeto);