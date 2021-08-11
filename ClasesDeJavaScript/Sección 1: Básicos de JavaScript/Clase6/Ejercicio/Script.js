let num = 5;
let num2 = 4;
//simple
if(num >=0)
{
    console.log(`${num} es mayor que 0`);
    console.log(`${num} es mayor que 0`);
}
//compuesto
if(num <= 0)
{
    console.log(`${num} es mayor que 0`);
}
else
{
    console.log(`${num} no es menor que 0`);
}
//multiple
if(num <= 0)
{
    console.log(`${num} es mayor que 0`);
}
else
{
    if(num == 5)
    {
        console.log(`${num} es igual que 5`);
    }
    else
    {
        console.log(`${num} no es menor que 0`);
    }
}

//operadores logicos
//and
if(num > 0 && num2 > 0)
{
    console.log(`${num} y ${num2} es mayor que 0`);
}
//or
if(num > 0 || num2 == 7)
{
    console.log(`${num} y ${num2} es mayor que 0 , pero ${num2} es menor que 7`);
}

if(num > 0)
{
    if(num2 > 0)
    {
        console.log(`${num} y ${num2} es mayor que 0`);
    }
}

/*ordenar 3 numeros de mayor a menor*/
const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = prompt("Introduzca el primer numero");
let b = prompt("Introduzca el segundo numero");
let c = prompt("Introduzca el tercer numero");

numbers.textContent = `los numeros ingresados son : ${a},${b},${c}`;

if(a >= b && a >= c)
{
    if(b >= c)
    {
        result.textContent = (`el orden es: ${a},${b},${c}`);
    }
    else
    {
        result.textContent = (`el orden es: ${a},${c},${b}`);
    }
}
else if(b >= a && b >= c)
{
    if(a >= c)
    {
        result.textContent = (`el orden es: ${b},${a},${c}`);
    }
    else
    {
        result.textContent = (`el orden es: ${b},${c},${a}`);
    }
}
else if(c >= a && c >= c)
{
    if(a >= b)
    {
        result.textContent = (`el orden es: ${c},${a},${b}`);
    }
    else
    {
        result.textContent = (`el orden es: ${c},${b},${a}`);
    }
}