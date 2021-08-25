//Ajax
var Peticion = new XMLHttpRequest();
Peticion.addEventListener("load", reqListener);
/* Peticion.open("GET", "https://bootcamp-dia-3.camilomontoyau.vercel.app/usuarios");
Peticion.send(); */
//metodo GET
//gusrdar el listado de usuarios en una lista en html
const ListaUsuarios = document.getElementById("lista-usuarios");

//obtener datos de un servidor remoto
function reqListener () {
    const Usuarios = JSON.parse(this.responseText);
    //cargo una lista html con lo que obtengo del servidor
    const  UsuariosRender = Usuarios.map(usuario =>
      `<li>${usuario.nombre}</li>`).join('');
      //console.log(UsuariosRender); 
      ListaUsuarios.innerHTML = UsuariosRender;
    }

function Refrescar()
{
  Peticion.open("GET", "https://bootcamp-dia-3.camilomontoyau.vercel.app/usuarios");
  Peticion.send();
}
//metodo POST
const boton = document.getElementById("boton");

function EnviarDatosUsuario()
{
  Peticion.open("POST", "https://bootcamp-dia-3.camilomontoyau.vercel.app/usuarios", true);
  Peticion.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  Peticion.send("nombre=Domingo23");
  setTimeout(Refrescar,3000); 
}
boton.onclick = EnviarDatosUsuario;