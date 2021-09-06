/*
    2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado)
*/
const mensaje = document.getElementById('mensaje');
let continuar = true;

while(continuar){
    let figuraingresada = prompt("ingrese una se las siguientes figuras para calcular su area : triangulo ,rectangulo ,circulo");
    switch(figuraingresada)
    {
        case "triangulo":
            if(figuraingresada == "triangulo"){
                let base = prompt("ingrese la base del trinagulo");
                let altura = prompt("ingrese la altura del triangulo");
                let resultado = base * (altura/2);
                mensaje.textContent=(`el area del triangulo es : ${resultado}`);
            }
            continuar= false;
            break;
        case "rectangulo":
            if(figuraingresada == "rectangulo"){
                let base = prompt("ingrese la base del rectangulo");
                let altura = prompt("ingrese la altura del rectangulo");
                let resultado = base * altura;
                mensaje.textContent=(`el area del rectangulo es : ${resultado}`);
            }
            continuar= false;
            break;
        case "circulo":
            if(figuraingresada == "circulo"){
                let radio = prompt("ingrese el radio del circulo");
                let resultado = 3.14 * (radio * 2);
                mensaje.textContent=(`el area del circulo es : ${resultado}`);
            }
            continuar= false;
            break;
        default:
            console.log("adios");
            break;
    }
}