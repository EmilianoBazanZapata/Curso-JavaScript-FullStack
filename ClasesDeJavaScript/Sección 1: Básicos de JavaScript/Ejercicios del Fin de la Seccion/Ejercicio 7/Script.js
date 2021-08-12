/*
    7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e impares
*/
let array1 =  [];
let pares =   [];
let impares = [];
let numeroaleatorio = 0;
numeroaleatorio = Math.floor((Math.random() * (1 -10 + 1)+10));
let mensaje = document.getElementById('mensaje');



for(let i = 0; i<=4;i++)
{
    let numero = prompt("ingrese un numero");

    array1.push(numero);
}

for(let i = 0; i<=4;i++)
{
    resultado = array1[i] * numeroaleatorio;
    console.log(resultado);
    if((resultado) % 2 == 0)
    {
        pares.push(resultado);
    }
    else
    {
        impares.push(resultado);
    }
}

mensaje.textContent =(`usten ingreso estos numeros : ${array1} y se multiplicaron por : ${numeroaleatorio} , los resultados pares fueron : ${pares} y los impares ${impares}`);
