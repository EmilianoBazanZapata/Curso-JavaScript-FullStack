//sintaxis simple
let nume  = 2;
switch(nume)
{
    case 1:
        console.log(`usten ingreso un numero que tiene el valor 1`);
        break;
    case 2:
        console.log(`usten ingreso un numero que tiene el valor 2`);
        break;
    default : 
        console.log(`usten ingreso un numero que no vale ni 1 ni 2`);
        break;
}

//sintaxis multiple
switch(nume)
{
    case 1:
    case 3:
    case 5:
        console.log(`usten ingreso un numero que es impar`);
        break;
    case 2:
    case 4:
        console.log(`usten ingreso un numero que es par`);
        break;
}

//sintaxis multiple encadenada
//por lo general casi nunca se usa