<?php
$producto = "monitores";

$precio = 200;
$descuento = 0.10;
$igv = 0.18;



$precioIGV = $precio * $igv;
$precioDescuento = $precio * $descuento;
$precioFinal = $precio + $precioIGV - $precioDescuento;


echo "El precio del producto: " . $precio . "<br>";
echo "El IGV es: " . $precioIGV . "<br>";
echo "El descuento es S/: " . $precioDescuento . "<br>";
echo "El precio final es S/: " . $precioFinal . "<br>;"
    ?>