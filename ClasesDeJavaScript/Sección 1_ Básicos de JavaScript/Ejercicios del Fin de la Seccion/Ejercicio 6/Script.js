/*
    6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido
*/

let acumulador = 0;
let cantidad = 0;
let mensaje = document.getElementById('mensaje');

do
{
    let numero = prompt("ingrese un numero menor a 50");
    acumulador = acumulador + parseInt(numero);
    cantidad ++;
}
while(acumulador <= 50)

mensaje.textContent=(`usted ingreso un total de : ${cantidad} numeros , ademas , como resultado sumando estos numeros da : ${acumulador}`);

