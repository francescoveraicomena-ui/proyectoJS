const sueldoColaboradores = [1000, 1100, 1200, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1900, 1950, 2000, 2050, 2100, 2150, 2200, 2250, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3500, 3700, 4000, 4200, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 9000, 10000, 12000, 15000
];
const porcentajeAguinaldo = 0.20;

for (let i = 0; i < sueldoColaboradores.length; i++) {

    let sueldoBase = sueldoColaboradores[i];

    let aguinaldo = sueldoBase * porcentajeAguinaldo;

    let totalPagar = sueldoBase + aguinaldo;

    console.log("sueldo Base:" , sueldoBase);
    console.log("aguinaldo:" , aguinaldo);
    console.log("total a Pagar:" , totalPagar);
}