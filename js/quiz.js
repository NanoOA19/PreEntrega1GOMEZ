alert("HOLA PADELISTA")
let entrada = prompt("Ingrese su nombre");
let salida = entrada + " " + "es su nombre";
alert(salida);
let unColor =prompt("Escriba su color favorito");  
if (unColor =="rojo"){
    alert("Sos un capo man");
}else{
    alert("Aguante el rojo gil");

}
let unColor2 =prompt("Escriba su color favorito");  
if (unColor2 ==""){
    alert("no ingresaste color");
}else{
    alert("Color ingresado " + unColor2);

}
let nombre = prompt("Ingresar Nombre");
let apellido = prompt("Ingresar Apellido");

if((nombre !="") && (apellido !="")){
    alert("Nombre: "+ nombre + "\nApellido: "+ apellido);
}else{
    alert("ERROR: NOMBRE Y APELLIDO BOLUDO");
}
let tabla = parseInt(prompt("Ingresar numero para saber su tabla"));
for( let i = 1; i <= 10; i++){
    let resultado = tabla * i;
    alert(tabla +" X " + i + " = " + resultado);
}