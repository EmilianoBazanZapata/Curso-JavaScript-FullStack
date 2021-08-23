//promesas

/* const MiPromesa = new Promise((resolve,reject)=>
{
    const tiempoRejected = Math.floor(Math.random() * 10000)+1000;
    const tiempoResolve = Math.floor(Math.random() * 10000)+1000;
    
    setTimeout(() =>
    {
        //resolve("El SetTimeout Finalizo");
        reject("la promesa fallo");
    },tiempoRejected);
    setTimeout(() =>
    {
        //resolve("El SetTimeout Finalizo");
        resolve("la promesa funciono");
    },tiempoResolve);

    //resolve('la promesa fue resuelta');
    //reject('la promesa fallo');
}); */

/* MiPromesa.then((respuesta)=>
{
    console.log(respuesta);
},(razon)=>
{
    console.log(razon)
}); */

const FabricaDePromesas = (indice)=> new Promise((resolve,reject)=>
{
    const tiempoRejected = Math.floor(Math.random() * 10000)+1000;
    const tiempoResolve = Math.floor(Math.random() * 10000)+1000;
    
    setTimeout(() =>
    {
        reject(`la promesa ${indice} fallo`);
    },tiempoRejected);
    setTimeout(() =>
    {
        resolve(`la promesa ${indice} funciono`);
    },tiempoResolve);

    //resolve('la promesa fue resuelta');
    //reject('la promesa fallo');
});

let MisPromesas=[];

for(let i = 0;i<10;i++)
{
    MisPromesas=[...MisPromesas,FabricaDePromesas(i)];
}

/* MisPromesas.forEach(
    (PromesaActual)=>
        PromesaActual.then((respuesta)=>
            console.log(respuesta)).catch((razon)=>
                console.log(razon)
    )
); */

//todas las promesas deben ser exitosas
Promise.all(MisPromesas).then(respuesta=>
    console.log(respuesta).catch(razon=>console.log(razon)));

//no importa el resultado de cada promesa
Promise.allSettled(MisPromesas)
    .then(respuesta=>console.log(respuesta))
    .catch(razon=>console.log(razon));

//espera a la primer respuesta exitosa o rechazada
Promise.race(MisPromesas)
    .then(respuesta=>console.log(respuesta))
    .catch(razon=>console.log(razon));