/*
    9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/

let palabra = prompt("ingrese una palabra");
let consonantes = palabra.length;
let vocales = 0;
let totaldeletras = 0;

console.log(`la longitud de ${palabra} es de ${palabra.length}`);
do
{
    switch(palabra )
    {
        case palabra:
        {
            if(palabra[totaldeletras].includes('a') == true)
            {
                vocales++;
                consonantes--;
            }
        }
        case palabra:
        {
            if(palabra[totaldeletras].includes('e') == true)
            {
                vocales++;
                consonantes--;
            }
        }
        case palabra:
        {
            if(palabra[totaldeletras].includes('i') == true)
            {
                vocales++;
                consonantes--;
            }
        }
        case palabra:
        {
            if(palabra[totaldeletras].includes('o') == true)
            {
                vocales++;
                consonantes--;
            }
        }
        case palabra:
        {
            if(palabra[totaldeletras].includes('u') == true)
            {
                vocales++;
                consonantes--;
            }
        }
        case palabra:
        {
            if(palabra[totaldeletras].includes('A') == true)
            {
                vocales++;
                consonantes--;
            }
        }
        case palabra:
        {
            if(palabra[totaldeletras].includes('E') == true)
            {
                vocales++;
                consonantes--;
            }
        }
        case palabra:
        {
            if(palabra[totaldeletras].includes('I') == true)
            {
                vocales++;
                consonantes--;
            }
        }
        case palabra:
        {
            if(palabra[totaldeletras].includes('O') == true)
            {
                vocales++;
                consonantes--;
            }
        }
        case palabra:
        {
            if(palabra[totaldeletras].includes('U') == true)
            {
                vocales++;
                consonantes--;
            }
        }
    }
    totaldeletras++;
}
while(totaldeletras < palabra.length)


console.log(`dicha palabra : ${palabra}, tiene : ${vocales} vocales`);
console.log(`dicha palabra : ${palabra}, tiene : ${consonantes} consonantes`);