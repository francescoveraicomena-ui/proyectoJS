let nota1 = 20
let nota2 = 19
let nota3 = 18

let promedio = (nota1 + nota2 + nota3) / 3

console.log("El promedio es: ", promedio)

if (promedio > 10.5) {
    console.log("Aprobado")

    if (promedio > 18) {
        console.log("Excelente")
    }

} else {
    console.log("Desaprobado")
}