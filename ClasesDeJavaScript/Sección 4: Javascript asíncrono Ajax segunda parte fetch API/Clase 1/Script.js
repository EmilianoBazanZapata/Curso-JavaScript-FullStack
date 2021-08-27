//fetch

const ListaUsuarios = document.getElementById("lista-usuarios");
var url = 'https://bootcamp-dia-3.camilomontoyau.vercel.app/usuarios';
let ArrayUsuarios = [];
//tomo el nombre del formulario para agregarlo a la BD
const NombreUsuario = document.getElementById("nombre");
//tomo el apellido del formulario para agregarlo a la BD
const ApellidoUsuario = document.getElementById("apellido");
//tomo el pais del formulario para agregarlo a la BD
const PaisUsuario = document.getElementById("pais");
//obtener datos de un servidor remoto
function Render () 
{
    //una vez obtenidos los datos , los mostramos en el html
    const UsuariosRender = ArrayUsuarios.map(usuario => `<tr>
                                                             <td>${usuario.nombre ? usuario.nombre : 'vacio'}</td>
                                                             <td>${usuario.apellido ? usuario.apellido : 'vacio'}</td>
                                                             <td>${usuario.pais ? usuario.pais : 'vacio'}</td>
                                                         </tr>`).join("");
    ListaUsuarios.innerHTML = UsuariosRender;
}


//metodo POST
const boton = document.getElementById("boton");

function EnviarDatosUsuario()
{
    const datos = {
                        nombre:NombreUsuario.value,
                        apellido:ApellidoUsuario.value,
                        pais:PaisUsuario.value
                  };
    

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
//obtengo los usuarios
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