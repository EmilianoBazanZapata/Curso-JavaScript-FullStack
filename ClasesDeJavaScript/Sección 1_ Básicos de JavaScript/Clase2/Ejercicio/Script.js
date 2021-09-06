/*operadores matematicos*/
let a = 5;
let b = 2;
let nombre = "emiliano";

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);//este siempre me devuelve el resto de la division
//concatenacion
console.log("hola : " + nombre);

/*operadores de incremento y decremento*/

let c = 5;
let d = 2;

console.log(++c);//6
console.log(++c);//7
console.log(--c);//6
console.log(--c);//5
console.log(++d);//3
console.log(++d);//4
console.log(--d);//3
console.log(--d);//2

/*operadores de asignacion*/
let e = 10;
e = e + 3;
console.log(e);//13
e -= 3;
console.log(e);//10
e *= 3;
console.log(e);//30
e %= 3;
console.log(e);//0