//CallBacks
setTimeout(() => {
    console.log("hola pues");
}, 3000);//cantidad de segundos que esperare para que se ejecute el codigo

const EjecutarMAsTarde = () => {
    console.log("otra forma del hola pues ");
};
setTimeout(EjecutarMAsTarde, 3000);


const EjecutarMAsTarde2 = ()=> setTimeout(() => {
    console.log("forma 3 de mostrar un hola pues");
}, 3000);

console.log(EjecutarMAsTarde2);

function SumarNumeros(num1 ,num2)
{
    return num1 + num2;
}

function RestarNumeros(num1 ,num2)
{
    return num1 - num2;
}

function MultiplicarNumeros(num1 ,num2)
{
    return num1 * num2;
}

console.log(SumarNumeros(2,5));
console.log(RestarNumeros(2,5));
console.log(MultiplicarNumeros(2,5));

function MultiFuncion(num1,num2,operacion)
{
    const resultado = operacion(num1,num2);
    console.log(resultado);
}

MultiFuncion(4,5,MultiplicarNumeros);
MultiFuncion(4,5,SumarNumeros);
MultiFuncion(4,5,RestarNumeros);

const miboton = document.getElementById("miboton");

miboton.addEventListener("click",(evento)=>
{
    console.log(evento);
    alert("diste click en el boton");
});

const EjecutarCuandoHagoClick = evento=>
{
    console.log(evento);
    alert("diste click en el boton");
};

miboton.addEventListener("click",EjecutarCuandoHagoClick);
//anidamiento de callbacks
setTimeout(() => {
    console.log("funcion1");
    setTimeout(() => {
        console.log("funcion2");
        setTimeout(() => {
            console.log("funcion3");
            setTimeout(() => {
                console.log("funcion4");
            }, 6000);
        }, 5000);
    }, 4000);
}, 3000);

//una manera de hacerlo mas entendible 

const funcion4 = () =>
{
    console.log("funcion4");
}

const funcion3 = () =>
{
    console.log("funcion3");
    setTimeout(funcion4, 6000);
}

const funcion2 = () =>
{
    console.log("funcion2");
    setTimeout(funcion3, 5000);
}

const funcion1 = () =>
{
    console.log("funcion1");
    setTimeout(funcion2, 4000);
}

setTimeout(funcion1, 3000);