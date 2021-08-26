//fetch

const ListaUsuarios = document.getElementById("lista-usuarios");
var url = 'https://bootcamp-dia-3.camilomontoyau.vercel.app/usuarios';
let ArrayUsuarios = [];
//tomo el nombre del formulario para agregarlo a la BD
const NombreUsuario = document.getElementById("nombre");

//obtener datos de un servidor remoto
function Render () 
{
    //una vez obtenidos los datos , los mostramos en el html
    const UsuariosRender = ArrayUsuarios.map(usuario => `<tr><td>${usuario.nombre}</td></tr>`).join("");
    ListaUsuarios.innerHTML = UsuariosRender;
}


//metodo POST
const boton = document.getElementById("boton");

function EnviarDatosUsuario()
{
    const datos = {nombre:NombreUsuario.value};
    

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(datos), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
    }
    )
    .then((response)=>response.json()
    .then(RespuestaJson =>{
            console.log("RespuestaJson",RespuestaJson);
            Refrescar();
        })
    )
}
function Refrescar()
{
    fetch(url)
    .then(response=>response.json())
    .then(RespuestaUsuarios=>
        {
            console.log('RespuestaUsuarios',RespuestaUsuarios)
            ArrayUsuarios = RespuestaUsuarios;
            Render();
        })
}
Refrescar();
boton.onclick = EnviarDatosUsuario;