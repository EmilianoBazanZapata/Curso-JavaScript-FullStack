//Call Stack
function ObtenerNombre()
{
    return "Emiliano";
}

function ObtenerApellido()
{
    return "Bazan";
}

function ObtenerNombreCompleto()
{
    const nombre = ObtenerNombre();
    const apellido = ObtenerApellido();

    return `tu nombre completo es : ${nombre} ${apellido}`;
}

const NombreCompleto = ObtenerNombreCompleto();

console.log(NombreCompleto);

