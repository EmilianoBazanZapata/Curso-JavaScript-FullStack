/*
    5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
*/

let numero = prompt('ingrese un numero superior a 0');
let resultado = 1;
const mensaje = document.getElementById('mensaje');
for(let i = numero;i>0;i--)
{
    resultado *= i;
}
mensaje.textContent =(`el factorial de :${numero} es ${resultado}`);
