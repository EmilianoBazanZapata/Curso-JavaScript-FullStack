//node index.js  llamara este script
//console.log("hola mundo");

//crear un servidor
//codigo extraido desde la documentacion de node.js

//usare de los paquetes nativos el modulo http
const http = require('http');
//agregaremos el paquete url
const url = require('url');
//dependencia para obtener el payload
const StringDcoder = require('string_decoder').StringDecoder;

let recursos = 
{
    mascotas :
    [
        {tipo:"Perro",nombre:"Firulais",propietario:"Bazan"},
        {tipo:"gato" ,nombre:"michi",propietario:"Beto"},
    ],
};

//utilizaremos el metodo create server, que recibira dos parametros  : options(objeto) , requestlistener(funcion)
const server = http.createServer((req, res) => {
    //console.log(req.url);

    //1.obtener url desde request
    const urlActual = req.url;
    const urlParseada = url.parse(urlActual, true);
    console.log(urlActual);
    console.log(urlParseada);

    //2.obtener la ruta
    const ruta = urlParseada.pathname;

    //3.quitar slash
    //esta expresion regular limpiara el : / de todas las rutas
    const rutaLimpia = ruta.replace(/^\/+|\/+$/g, '');

    //3.1 obtener el metodo http
    const metodo = req.method.toLowerCase();

    //3.2 obtener variables del query url 
    //console.log(urlParseada);
    const { query = {} } = urlParseada;
    //console.log("query",{query})
    //const query = urlActual.query;

    //3.3 obtener los headers
    const { headers = {} } = req;
    //console.log("header",headers);

    //3.4 obtener payload en caso de haber uno
    //obtener un stream y convertir dicho mensaje para que lo podamos entender 
    const decoder = new StringDcoder('utf-8');
    let buffer = '';

    //3.4.1 ir acumulando la data cuando el request reciba un payload
    req.on('data', (data) => {
        //decodifico el stream y lo convierto en string 
        buffer += decoder.write(data);
    });

    //3.4.2 terminar de acumular datos y decirle al decoder que finalice
    req.on('end', (data) => {
        //decodifico el stream y lo convierto en string 
        buffer += decoder.end();

        if(headers['content-type'] === 'application/json')
        {
            //convierto los datos que llegan del buffer en .json
            buffer = JSON.parse(buffer);
        }

        //3.5 ordenar la data del request
        const datos = 
        {
            ruta:rutaLimpia,
            query,
            metodo,
            headers,
            payload:buffer
        };

        console.log({data});


        //3.6 elegir el manjeador dependiendo de la ruta y asignarle la funcion que el enrutador tiene
        let handler;
        if(rutaLimpia  && enrutador[rutaLimpia] && enrutador[rutaLimpia][metodo])
        {
            handler = enrutador[rutaLimpia][metodo];
        }
        else
        {
            handler = enrutador.noEncontrado;
        }

        //4.enviar una respuesta dependiendo de la ruta
        /*if(rutaLimpia ==="ruta")
        {
            res.end("hola estas en : /ruta");
        }
        else
        {
            res.end("esta ruta no existe");
        }*/
        /*switch (rutaLimpia) {
            case 'ruta':
                res.end("hola estas en : /ruta");
                break;
            case 'hola':
                res.end("hola estas en : /hola");
                break;
            default:
                res.end("ruta no encontrada 404");
                break;
        }*/
        //4 ejecutar handler {manejador} para enviar la respuesta
        if(typeof handler ==='function')
        {
            //data ordenada
            handler(datos,(statusCode = 200  , mensaje)=>
            {
                const respuesta = JSON.stringify(mensaje);
                //convertimos los daatos en json
                res.setHeader('Content-Type',"application/json");
                res.writeHead(statusCode);
                // linea en donde realmente ya .
                // estamos respondiendo a la aplicacion del cliente
                res.end(respuesta);
            });
        }

    });
    //res.end("el servidor funciona CORRECTAMENTE");
});
//handler , manejador de rutas
const enrutador = 
{
    ruta:(data,callback)=>
    {
        callback(200,{mensaje:'esta es /ruta'})
    },
    usuarios:(data,callback)=>
    {
        callback(200,[{nombre:'usuario1'},{nombre:'usuario2'},{nombre:'usuario3'}])
    },
    mascotas:{
        get:(data,callback)=>
        {
            callback(200,recursos.mascotas)
        },
        post:(data,callback)=>
        {
            //agregaremos en la ultima posicion el elemento que ingresa por .payload
            recursos.mascotas.push(data.payload);
            //console.log('handler',data);
            callback(201,data.payload)
        }
    },
    noEncontrado:(data,callback)=>
    {
        callback(404,'no encontrado');
    }
}
server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
//puesrto en donde se ejecutara el servidor
server.listen(8000, () => {
    //mensaje que me servira para saber si el servidos funciopna o no
    console.log("el servidor esta escuchando peticiones en el puerto 8000");
});