const Pais = document.getElementById('pais');
const NombreVeterinario = document.getElementById('nombre');
const IdentificacionVeterinario = document.getElementById('identificacion');
const ApellidoVeterinario = document.getElementById('apellido');
const Formulario = document.getElementById('formulario');
const BotonGuardar = document.getElementById('guardar');
const Indice = document.getElementById('indice');
const BotonAgregar = document.getElementById('Agregar');



const ListaVeterinarios = document.getElementById('Lista-Veterinario');
let Veterinarios = [{
        identificacion:"ID-456",
        nombre: "Julian",
        apellido: "Perez",
        pais: "Brasil"
    },
    {
        identificacion:"ID-987",
        nombre: "Jorge",
        apellido: "Zapata",
        pais: "Argentina"
    }
];

function ListarVeterinarios() {
    const HtmlVeterinarios = Veterinarios.map((veterinario, indice) => `
        <tr>
            <td>${indice}</td>
            <td>${veterinario.identificacion}</td>
            <td>${veterinario.nombre}</td>
            <td>${veterinario.apellido}</td>
            <td>${veterinario.pais}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary editar" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i class="fas fa-pencil-alt"></i></button>
                    <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
                </div>
            </td>
        </tr>
    `).join("");
    ListaVeterinarios.innerHTML = HtmlVeterinarios;
    Array.from(document.getElementsByClassName('editar')).forEach((BotonEditar, index) => BotonEditar.onclick = Editar(index));
    Array.from(document.getElementsByClassName('eliminar')).forEach((BotonEliminar, index) => BotonEliminar.onclick = Eliminar(index));

}
//agregar veterinario
 function EnviarDatos(e) {
    e.preventDefault();
    const Accion = BotonGuardar.innerHTML;
    const datos = {
        identificacion:IdentificacionVeterinario.value,
        nombre: NombreVeterinario.value,
        apellido: ApellidoVeterinario.value,
        pais: Pais.value
    }
    switch (Accion) {
        case "Editar":
            //editar
            Veterinarios[Indice.value] = datos;
            break
        default:
            //crear
            //console.log(datos);
            Veterinarios.push(datos);
            break;
    }
    ListarVeterinarios();
    ResetModal();
}

//editar veterinario
function Editar(e) {
    //console.dir("elemento", e);
    //console.log(e);

    return function CuandoHagoClick() {
        //console.log(e);
        //console.log(Mascotas[e]);

        const Veterinario = Veterinarios[e];
        IdentificacionVeterinario.value = Veterinario.identificacion;
        NombreVeterinario.value = Veterinario.nombre;
        ApellidoVeterinario.value = Veterinario.apellido;
        Pais.value = Veterinario.pais;
        Indice.value = e;
        BotonGuardar.innerHTML = 'Editar';
    }
}
//eliminarVeterinario
function Eliminar(e) {
    return function ClickEliminar() {
        //console.log('index', e);
        //delete Mascotas[e];
        Veterinarios = Veterinarios.filter((veterinario, indiceveterinario) => indiceveterinario !== e);
        ListarVeterinarios();
    }
}

function ResetModal() {
    Pais.value = "Pais";
    IdentificacionVeterinario.value = "";
    NombreVeterinario.value = "";
    ApellidoVeterinario.value = "";
    BotonGuardar.innerHTML = 'Agregar';
}




formulario.onsubmit = EnviarDatos;
BotonGuardar.onclick = EnviarDatos;
BotonAgregar.onclick = ResetModal; 


ListarVeterinarios();