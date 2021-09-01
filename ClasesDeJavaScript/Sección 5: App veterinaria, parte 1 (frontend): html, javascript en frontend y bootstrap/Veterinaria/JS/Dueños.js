const Pais = document.getElementById('pais');
const NombreDueño = document.getElementById('nombre');
const IdentificacionDueño = document.getElementById('identificacion');
const ApellidoDueño = document.getElementById('apellido');
const Formulario = document.getElementById('formulario');
const BotonGuardar = document.getElementById('guardar');
const Indice = document.getElementById('indice');
const BotonAgregar = document.getElementById('Agregar');



const ListaDueños = document.getElementById('Lista-Dueño');
let Dueños = [{
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

function ListarDueños() {
    const HtmlDueños = Dueños.map((Dueño, indice) => `
        <tr>
            <td>${indice}</td>
            <td>${Dueño.identificacion}</td>
            <td>${Dueño.nombre}</td>
            <td>${Dueño.apellido}</td>
            <td>${Dueño.pais}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary editar" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i class="fas fa-pencil-alt"></i></button>
                    <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
                </div>
            </td>
        </tr>
    `).join("");
    ListaDueños.innerHTML = HtmlDueños;
    Array.from(document.getElementsByClassName('editar')).forEach((BotonEditar, index) => BotonEditar.onclick = Editar(index));
    Array.from(document.getElementsByClassName('eliminar')).forEach((BotonEliminar, index) => BotonEliminar.onclick = Eliminar(index));

}
//agregar veterinario
 function EnviarDatos(e) {
    e.preventDefault();
    const Accion = BotonGuardar.innerHTML;
    const datos = {
        identificacion:IdentificacionDueño.value,
        nombre: NombreDueño.value,
        apellido: ApellidoDueño.value,
        pais: Pais.value
    }
    switch (Accion) {
        case "Editar":
            //editar
            Dueños[Indice.value] = datos;
            break
        default:
            //crear
            //console.log(datos);
            Dueños.push(datos);
            break;
    }
    ListarDueños();
    ResetModal();
}

//editar veterinario
function Editar(e) {
    //console.dir("elemento", e);
    //console.log(e);

    return function CuandoHagoClick() {
        //console.log(e);
        //console.log(Mascotas[e]);

        const Dueño = Dueños[e];
        IdentificacionVeterinario.value = Dueño.identificacion;
        NombreVeterinario.value = Dueño.nombre;
        ApellidoVeterinario.value = Dueño.apellido;
        Pais.value = Dueño.pais;
        Indice.value = e;
        BotonGuardar.innerHTML = 'Editar';
    }
}
//eliminarVeterinario
function Eliminar(e) {
    return function ClickEliminar() {
        //console.log('index', e);
        //delete Mascotas[e];
        Dueños = Dueños.filter((veterinario, indiceveterinario) => indiceveterinario !== e);
        ListarDueños();
    }
}

function ResetModal() {
    Pais.value = "Pais";
    IdentificacionDueño.value = "";
    NombreDueño.value = "";
    ApellidoDueño.value = "";
    BotonGuardar.innerHTML = 'Agregar';
}




formulario.onsubmit = EnviarDatos;
BotonGuardar.onclick = EnviarDatos;
BotonAgregar.onclick = ResetModal; 


ListarDueños();