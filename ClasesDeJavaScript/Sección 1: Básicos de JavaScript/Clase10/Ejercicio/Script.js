//arreglos propiedad length
//devuelve la cantidad de pòsiciones que tiene una cadena de texto
let numeros=[1,2,3,4,5,6];

console.log(numeros.length);

//metodo isarray
//verifica si xx variable es un array
let numero = 5;
console.log(Array.isArray(numero));

//eliminar elemento
//.shift elimina el primer elemento y devuelve ese
console.log(numeros.shift());

//.pop elimina el ultimo elemento y devuelve el ese
console.log(numeros.pop());

//añadir elementos 
//.push añade un elemento al final del arreglo
numeros.push(6);
console.log(numeros);

//.unshift agregar un elemento al principio del arreglo
numeros.unshift(753);
console.log(numeros)

//.indexof() devuelve el primer indice del elemento a buscar y -1 si no no encuentra 
console.log(numeros.indexOf(2));

//.lastindexof() devuelve el ultimoindice del elemento a buscar y -1 si no no encuentra 
console.log(numeros.lastIndexOf(2));

//.reverse invierte el orden de los elementos
console.log(numeros.reverse());

//.join devuelve un string con un separador indicado

console.log(numeros.join());
console.log(numeros.join(" "));
console.log(numeros.join("-"));


//.splice
//elimina contenido de un array y agrega nuevos 
//.splice(a,b,items);
//a : desde donde comienza
//b : numero de elementos
//numeros.splice(3); elimina desde la posicion 3 en eadelante
console.log(numeros);
//numeros.splice(2,2);  elimina desde la pòsicion 2 hasta el valor que le indiquemos
console.log(numeros);
//numeros.splice(2,2,10,23,54); si b es un valor distinto de 0 elimina el numero de valores que indiquemos y añade los valores de items
console.log(numeros);
numeros.splice(1,0,12,45,78,45);
console.log(numeros);

//.slice extrae elementos desde donde le indiquemos

let newnumeros= numeros.slice(2,6); // la segunda variable nunca se contempla
console.log(newnumeros);
console.log(numeros);