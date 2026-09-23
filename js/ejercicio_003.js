//VALIDACION DE LOGIN//
let usuario = prompt("Usuario: ");
let password = prompt("Contraseña: ");

if (usuario == "admin" && password == "123"){
    console.log("Acceso consedido. !BIENVENIDO¡");
}else{
    console.log("Usuario y/o password incorrecto.");
}