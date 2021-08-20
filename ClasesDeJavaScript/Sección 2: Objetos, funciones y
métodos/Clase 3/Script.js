//prototipos
function MiObjeto(nombre,apellido)
{
    this.nombre = nombre;
    this.apellido = apellido;
    this.GetNombreCompleto = function()
    {
        return `${this.nombre}`+`${this.apellido}`
    }
}

console.log(MiObjeto);

let objeto1 = new MiObjeto('Emiliano','Bazan Zapata');

console.log(MiObjeto);

let objetoJson = {nombre:'Emiliano',apellido:'Bazan Zapata',GetNombreCompleto(){}}

console.log(objetoJson);


MiObjeto.prototype.nombre='vacio';
MiObjeto.prototype.apellido='Bazan';

let objeto2 = new MiObjeto('Bazan Zapata');
//no gurda los valores por defecto si estan en blanco
console.log(objeto2);


function MiObjeto2()
{
    this.GetNombreCompleto = function()
    {
        return `${this.nombre}`+`${this.apellido}`
    }
    this.setNombre=function(nombre)
    {
        this.nombre = nombre;
    }
    this.setApellido=function(apellido)
    {
        this.apellido = apellido;
    } 
}

console.log(MiObjeto2);

let objeto3 = new MiObjeto2();

MiObjeto2.prototype.nombre='vacio';
MiObjeto2.prototype.apellido='vacio';
//ahora si se guardara el dato gracias al prototipo
console.log(objeto3.nombre);

function MiObjeto3()
{

}
MiObjeto3.prototype.GetNombreCompleto= function()
{
    return `${this.nombre}`+`${this.apellido}`;
}
MiObjeto3.prototype.setNombre=function(nombre)
{
    this.nombre = nombre;
}
MiObjeto3.prototype.setApellido=function(apellido)
{
    this.apellido = apellido;
}


console.log(MiObjeto3);
//estara vacio ya que lo declare en prototipo
console.log(MiObjeto3.setNombre);
//ahora si podria ver la funcion ya que esta guardada en prototipo
console.log(MiObjeto3.prototype.setNombre);


//prototipos preconstruidos
//cohercion de tipos => conversion de un tipo a otro
let texto ="un texto";
texto instanceof String;
//false 
console.log(texto.length);


let texto2 = new String('texto 2');
console.log(texto2);


console.log(1+"1");
//javascritp convierte el int a string
console.log("1"+1..toString());

let uno = new Number (1);
console.log(uno);

console.log(texto2 + uno);

//se obtendra un booleano
console.log(!!texto2);

//java script interpreta que quiero sumar dos 1
console.log(!null + !null);
console.log(true + 3);