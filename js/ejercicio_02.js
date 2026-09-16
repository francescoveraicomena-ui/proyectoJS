let nombreProducto = "mause"
let precioProducto = "100"

const porcentajeDescuento = 0.08;
const porcentajeIgv = 0.18;

let descuento = precioProducto * porcentajeDescuento;
let subTotal = precioProducto - descuento;
let montoIgv = subTotal * porcentajeIgv;
let totalPagar = subTotal + montoIgv;

console.log("🛒producto: ", nombreProducto);
console.log("💵precio base s/ : ", precioProducto);
console.log("💵Descuento (8) s/ : ", descuento);
console.log("💵Subtotal s/ : ", subTotal);
console.log("💵IGV (18) s/ : ", montoIgv);
console.log("💵total a pagar s/ : ", totalPagar);