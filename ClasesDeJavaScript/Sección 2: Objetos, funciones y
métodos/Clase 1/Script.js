//diferencias entre funciones normale s y arrowfuncion
function miFuncion()
{
    this.miFuncion = () => miFuncion()
    {
        return this
    }
}

const d = new miFuncion();
console.log(d);



function miFuncion3()
{
    this.miFuncion4 = ()=>
    {
        return this;
    }
}
//variable de tipo de mifuncion3()
const c = new miFuncion3();

console.log(c.miFuncion4());

//arrow function
const miFuncion5 = () => 
{
    this.miFuncion6 = () =>
    {
        return this;
    }
}

const objeto = 
{
    metodo()
    {
        return this;
    }
}

console.log(objeto.metodo());

const objeto2 = 
{
    metodo: ()=>
    {
        return this;
    }
}
//devuelve el metodo
console.log(objeto2.metodo);
//devuelve window
console.log(objeto2.metodo());

//funcion normal
const objeto3 =
{
    metodo()
    {
        return this;
    }
}

objeto3.metodo
console.log(objeto3.metodo);

//devuelve la funcion
console.log(objeto3.metodo);
//devuelve un objeto
console.log(objeto3.metodo());

/* const mifuncion7 = ()=>
{
    function miFuncion()
    {
        return this;
    }
}
console.log(mifuncion7);
console.log(mifuncion7.miFuncion);
console.log(mifuncion7.miFuncion()); */

const mifuncion7 = ()=>
{

        return function mifuncion()
        {
            return this;
        };
    
}
//anidamiento
console.log(mifuncion7());
console.log(mifuncion7()());


function mifuncion8()
{
    this.miFuncion3 =function mifuncion3()
    {
        this.mifuncion4 = function mifuncion4()
        {
            this.miFuncion5 = function miFuncion5()
            {
                return this;
            }
            this.miFuncion6 = () =>
            {
                return this;
            }
        }
    }
}
//devuelve toda la declaracion
console.log(mifuncion8);

const a = new mifuncion8();
console.log(a);
//console.log(a.mifuncion3());
const b = new a.mifuncion3();
//console.log(b);
const f = new b.mifuncion4();
//console.log(f);

