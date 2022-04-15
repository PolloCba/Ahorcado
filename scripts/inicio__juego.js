var palabra;

function iniciarJuego(){
    document.querySelector(".boton__inicio").style.display = "none";
    document.querySelector(".agregar__palabra").style.display = "none"; 
    document.querySelector(".ahorcado").style.display = "flex";

    document.querySelector("canvas").style.display = "";
    document.querySelector(".entrada__juego").style.display = "";
    document.querySelector(".mensaje").style.display = "none";

    palabra = escogerPalabra();
    errores = 0;
    lUsadas = [];
    finJuego = false;
    ganaste = 0;
    mensaje = "";
    letrasErrores = [];

    limpiar();

    mostrarGuiones(palabra);

    console.log(palabra);
}