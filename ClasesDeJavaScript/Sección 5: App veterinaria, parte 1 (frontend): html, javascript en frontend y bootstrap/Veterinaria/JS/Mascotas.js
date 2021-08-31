const TipoMascota = document.getElementById('tipo');
const NombreMascota = document.getElementById('nombre');
const PropietarioMascota = document.getElementById('propietario');
const Formulario = document.getElementById('formulario');
const BotonGuardar = document.getElementById('guardar');
const Indice = document.getElementById('Indice');



const ListaMascotas = document.getElementById('Lista-Mascota');
let Mascotas = [{
        tipo: "Gato",
        nombre: "Simona",
        propietario: "Esteban"
    },
    {
        tipo: "Perro",
        nombre: "Manchas",
        propietario: "Julian"
    }
];

function ListarMascotas() {
    const HtmlMascotas = Mascotas.map((mascota, indice) => `
        <tr>
            <td>${indice}</td>
            <td>${mascota.nombre}</td>
            <td>${mascota.propietario}</td>
            <td>${mascota.tipo}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary editar" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i class="fas fa-pencil-alt"></i></button>
                    <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
                </div>
            </td>
        </tr>
    `).join("");
    ListaMascotas.innerHTML = HtmlMascotas;
    Array.from(document.getElementsByClassName('editar')).forEach((BotonEditar, index) => BotonEditar.onclick = Editar(index));
}

function EnviarDatos(e) {
    e.preventDefault();
    const datos = {
            tipo: TipoMascota.value,
            nombre: NombreMascota.value,
            propietario: PropietarioMascota.value
        }
        //console.log(datos);
    Mascotas.push(datos);
    ListarMascotas();
}
//editar mascota
function Editar(e) {
    //console.dir("elemento", e);
    //console.log(e);

    return function CuandoHagoClick() {
        //console.log(e);
        //console.log(Mascotas[e]);

        const Mascota = Mascotas[e];
        TipoMascota.value = Mascota.tipo;
        NombreMascota.value = Mascota.nombre;
        PropietarioMascota.value = Mascota.propietario;
        Indice.value = e;
    }
}






ListarMascotas();
formulario.onsubmit = EnviarDatos;
BotonGuardar.onclick = EnviarDatos;