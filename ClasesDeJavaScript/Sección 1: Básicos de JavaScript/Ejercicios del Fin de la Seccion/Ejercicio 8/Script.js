/*
    8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23

    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
*/
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let dni = 0;
let array=[];
let mensaje = document.getElementById('mensaje');

do
{
    dni = prompt("ingrese su dni");
    if(dni<=0)
    {
        alert("no debe ingresar numeros menores a 0");
    }
    if(dni.length > 8)
    {
        alert("dni invalido");
        dni = 0;
    }
    else
    {
        for(let i = 0; i < 10; i++)
        {
            if(dni.indexOf(i) != (-1))
            {
                numero = `  al numero ${i} le corresponde la letra ${letras[i]}  `
                array.push(numero);
            }
        }
    }
}
while(dni <= 0)

mensaje.textContent=(array);