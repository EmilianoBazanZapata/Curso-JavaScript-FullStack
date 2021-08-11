 //propiedada strings.length
 let cadena = "hola mundo";
 console.log(cadena.length);//devuelve la cantidad de caracteres de la  cadena de texto

 //metodo uppercase
 console.log(cadena.toUpperCase());//devolvera una caden aen mayusculas
 let cadenamayus = cadena.toUpperCase();//asi gusrdariamos la cadena en mayuscula
 console.log(cadenamayus);

 //metodo lowercase
 console.log(cadena.toLowerCase());//devuelve la cadena en minusculas

 //metodo indexof
 console.log(cadena.indexOf("hola"));//devuelve la posicion en eonde se encuentra el string

 //metodo replace 
 console.log(cadena.replace("mundo","youtube"));//remplaza una cadena de texto por una que ingreso por parametro

 //metodo substring
 console.log(cadena.substring(3));//extrae el texto desde el indice que indicamos en el parametro
 console.log(cadena.substring(3,7));//extrae el texto desde el indice que indicamos en el parametro hasta el indice indicado en el segundo parametro que es opcional

 //metodo slice
 console.log(cadena.slice(-3));//de esta form ame devolvera los ultimos tres caracteres
 console.log(cadena.slice(0,-6));

 //metodo trim 
 let cadena2 = "            estamos trabajando con cadenas";
 console.log(cadena2);
 console.log(cadena2.trim());//eliminamos un espacio al principio y al final de la cadena

 //metodo starwith

 console.log(cadena.startsWith("h"));//verificar si una cadena empieza con algun caracter en especial
 console.log(cadena.startsWith("m",5));

 //metodo endsWith
 console.log(cadena.endsWith("o"));//verifica si una cadena termina con un caracter en especial
 console.log(cadena.endsWith("a",4));

 //metodo includes 
 console.log(cadena.includes("n"));//verifico si la cadena tiene un caracter en especial

 //metodo repeat
 let cadena3 = "hola";
 console.log(cadena3.repeat(3));//se repite el numero n de veces la variable que deseemos 
 console.log("r".repeat(3));

 //template string
 let nombre = "emiliano";
 let apellido = "bazan"; 
 console.log("hola " + nombre + ' ' + apellido);

 console.log(`hola ${nombre} ${apellido}`);//de esta forma no tengo que andar concatenando, y es mas simple de hacer
