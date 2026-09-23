<?php
//FASE DE ENTRADA//

$producto = "zapatillas adidas";
//const curso = "logica y programacion";
$precio = 350;
$descuento = 0.08;
$igv = 0.18;

//FASE DE PROCESO//
$precioIGV = $precio * $igv;
$precioDescuento = $precio * $descuento;
$precioFinal = $precio + $precioIGV - $precioDescuento;

//FASE DE SALIDA//
echo "El precio del producto es: " . $precio . "<br>";
echo "El igv es: " . $precioIGV;
echo "El descuento es S/ " . $precioDescuento . "<br>";
echo "El precio final es: S/ " . $precioFinal . "<br>";


?>