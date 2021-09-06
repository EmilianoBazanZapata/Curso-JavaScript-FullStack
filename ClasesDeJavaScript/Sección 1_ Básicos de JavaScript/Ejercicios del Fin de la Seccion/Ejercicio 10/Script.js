/*
    10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/

let colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

do
{
    let colorbuscado = prompt("ingrese un color a buscar");
    if(colores.includes(colorbuscado))
    {
        console.log(`el color : ${colorbuscado} , si esta en el array , el la pocision : ${colores.indexOf(colorbuscado)}`);
    }
    else
    {
        console.log("este color no esta en el array");
    }
}
while(1==1)