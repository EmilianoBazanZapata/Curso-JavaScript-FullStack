//destructuracion
//por nombre
let miObjeto = 
{
    a:1,
    b:2, 
    c:"hola" , 
    d:function miFuncion()
    {
        onmouseleave.log("soy una funcion")
    },
    e:true
}
//me trae todo el objeto
console.log(miObjeto);

let {a,b} = miObjeto;
//desacoplo el objeto directamente
console.log(a);

//por posicion
let miArray=[1,2,'hola',()=>{console.log("hola man")},true]

console.log(miArray);

let[numeroUno,numeroDos,hola,unaFuncion,Booleano] = miArray;


console.log(hola);
console.log(unaFuncion);

//operador
let {d,...otros}=miObjeto;

console.log(d);
console.log(otros);

/* let [num1,...arreglo]= miArray;

console.log(num1);
console.log(arreglo);
 */
//el operador siempre debe ir al final
let [num1,num2,...arreglo2]= miArray;
console.log(num1);
console.log(num2);
console.log(arreglo2);

//asi podre omitir los primeros dos
let[uno,dos,...OtroArray]= miArray;
console.log(OtroArray);

let miObjeto2 = miObjeto;

miObjeto2.c ="otra cosa";
//el contenido mutara
console.log(miObjeto);

//para evitar que mute puedo hacer los siguiente
let miObjeto3 = {...otros}
miObjeto3.c  ="nuevostring";

//el cambio es superficial gracais a una copia superficial
console.log(miObjeto3);
console.log(miObjeto);


let miObjeto4 = 
{
    a:1,
    b:2, 
    c:"hola" , 
    d:function miFuncion()
    {
        onmouseleave.log("soy una funcion")
    },
    e:true,
    f:
    {
        f1:"soy f1",
        f2:"soy f2",
        f3:()=>{}
    }
}

console.log(miObjeto4);
//copia superficial
let miObjeto5 = {...miObjeto4};

console.log(miObjeto5.f.f1);

miObjeto5.f.f1 = "cambie pues";
console.log(miObjeto5.f.f1);
//el objeto interiro seguira haciendo una referencia al objeto original , solo los de afuera de dicho objeto no cambiaran
console.log(miObjeto4.f.f1);

//clonacion superficial 
//los valores cambiaran


let miObjeto6 = miObjeto4;

console.log(miObjeto4.f.f1);

console.log(miObjeto6.f.f1 ="cambio");

console.log(miObjeto6.f.f1);
console.log(miObjeto4.f.f1);

//clonacion con lodash
//los objetos internos no cambiaran

/* const lodash =  require('lodash');
let miObjeto7 = lodash.cloneDeep(miObjeto4);

console.log(miObjeto4.f.f1);

console.log(miObjeto7.f.f1 ="cambio");

console.log(miObjeto7.f.f1);
console.log(miObjeto4.f.f1); */

//otra forma de que un objeto pierda sus referencias es convirtiendolo a string y luego a objeto de nuevo

let miObjeto7 = JSON.parse(JSON.stringify(miObjeto4));

console.log(miObjeto7);
miObjeto7.f.f1="he cambiado";
//y asi el objeto interno no cambiara en el objeto original
console.log(miObjeto7.f.f1);
console.log(miObjeto4.f.f1);