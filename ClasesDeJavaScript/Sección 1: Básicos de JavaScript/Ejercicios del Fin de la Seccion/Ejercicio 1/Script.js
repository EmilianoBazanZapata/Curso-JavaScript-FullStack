/*
    1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings
*/
let nombre = "";
let proximaedad = 0;
let edad = 0;
 
const mensaje = document.getElementById('mensaje');

do{
    nombre = prompt("Introduzca su nombre");
    edad = prompt("Introduzca su edad");
}
while(this.nombre == "" && this.edad == 0);

proximaedad = edad;
proximaedad++;

console.log(mensaje.textContent);

mensaje.textContent=(`hola ${nombre}, tienes ${edad} años y el año que viene tendras ${proximaedad}`);


