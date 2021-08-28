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
let BotonesEliminar = null;
let BotonesEditar = null;
const indice = document.getElementById("indice");
//obtener datos de un servidor remoto
function Render () 
{
    //una vez obtenidos los datos , los mostramos en el html
    const UsuariosRender = ArrayUsuarios.map((usuario,indice) => 
                                                                `<tr>
                                                                    <td>${usuario.nombre ? usuario.nombre : 'vacio'}</td>
                                                                    <td>${usuario.apellido ? usuario.apellido : 'vacio'}</td>
                                                                    <td>${usuario.pais ? usuario.pais : 'vacio'}</td>
                                                                    <td>
                                                                        <button data-indice=${indice} class="btn btn-danger eliminar">eliminar</button>
                                                                        <button data-indice=${indice} class="btn btn-success editar">editar</button>
                                                                    </td>
                                                                </tr>`).join("");
    ListaUsuarios.innerHTML = UsuariosRender;
    //a cada boton le asigno el metodo eliminar 
    BotonesEliminar = document.getElementsByClassName('eliminar');
    Array.from(BotonesEliminar).forEach(botonEliminar => {
        botonEliminar.onclick = EliminarUsuario;
    });
    //a cada boton le asigno el metodo editar 
    BotonesEditar = document.getElementsByClassName('editar');
    Array.from(BotonesEditar).forEach(botonEditar => {
        botonEditar.onclick = ActualizarUsuario;
    });
}


//metodo POST
const boton = document.getElementById("boton");

function EnviarDatosUsuario(e)
{
    e.preventDefault(); 
    let accion = e.target.innerText;
    if(accion ==='Crear')
    {
        const datos = 
        {
            nombre:NombreUsuario.value,
            apellido:ApellidoUsuario.value,
            pais:PaisUsuario.value
        };


        fetch(url, 
            {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(datos), // data can be `string` or {object}!
                headers:
                {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then((response)=>response.json()
        .then(RespuestaJson =>
            {
                console.log("RespuestaJson",RespuestaJson);
                Refrescar();
            })
        )
    }
    else if(accion ==='Actualizar')
    {
        const datos = 
        {
            nombre:NombreUsuario.value,
            apellido:ApellidoUsuario.value,
            pais:PaisUsuario.value
        };


        fetch(url+`/${indice.value}`, 
            {
                method: 'PUT', // or 'PUT'
                body: JSON.stringify(datos), // data can be `string` or {object}!
                headers:
                {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then((response)=>response.json()
        .then(RespuestaJson =>
            {
                console.log("RespuestaJson",RespuestaJson);
                Refrescar();
            })
        )
        
    }
    else
    {
        return;
    }
    NombreUsuario.value="";
    ApellidoUsuario.value="";
    PaisUsuario.value="";
}

//metodo DELETE

function EliminarUsuario(e)
{
    e.preventDefault();

    fetch(url+`/${e.target.dataset.indice}`, {
        method: 'DELETE'
    }
    )
    .then((response)=>response.json()
    .then(RespuestaJson =>{
            console.log("RespuestaJson",RespuestaJson);
            Refrescar();
        })
    )
}
//metodo PUT

function ActualizarUsuario(e)
{
    e.preventDefault();

    if(e.target.dataset.indice)
    {
        const Usuario = ArrayUsuarios[e.target.dataset.indice];
        //pasamos los datos de la lista al formulario
        nombre.value = Usuario.nombre ? Usuario.nombre : 'vacio';
        apellido.value = Usuario.apellido ? Usuario.apellido : 'vacio';
        pais.value = Usuario.pais ? Usuario.pais : 'vacio';
        indice.value = e.target.dataset.indice;
        boton.innerText ="Actualizar";
        console.log('usuario',Usuario);
    }
    else
    {
        boton.innerText = "Crear";
    }  
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