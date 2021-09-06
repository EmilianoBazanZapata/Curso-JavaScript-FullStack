/*
    3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar" si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar
*/
let array = [];
let numero = prompt("ingrese un numero");
let mensaje = document.getElementById('mensaje');
for(let i = 0; i<=numero; i++)
{
    if(i % 2 == 0)
    {
        array.push(`${i} es par `);
    }
    else
    {
        array.push(`${i} es impar `);
    }
}

mensaje.textContent =(`${array}`);