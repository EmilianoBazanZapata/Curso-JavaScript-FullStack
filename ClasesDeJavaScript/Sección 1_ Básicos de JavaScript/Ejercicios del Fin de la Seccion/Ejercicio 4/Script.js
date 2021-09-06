/*
    4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número es primo o no. Un número primo es aquel que solo es divisible por sí mismo y la unidad;
*/

let numero = prompt("ingrese un numero superior a 1");
let mensaje = document.getElementById('mensaje');

for(let i = 2; i<=numero/2; i++)
{
    if((numero % i) == 0)
    {
        mensaje.textContent=(`el numero : ${numero} no es primo`);
        break;
    }
    else
    {
        mensaje.textContent=(`el numero : ${numero} es primo`);
        break;
    }
}
