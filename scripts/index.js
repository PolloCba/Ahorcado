var btnAgregar = document.querySelector(".boton__agregar");
btnAgregar.addEventListener("click", agregarPalabra);

var botonIniciar = document.querySelector(".boton__iniciar");
botonIniciar.addEventListener("click", iniciarJuego);

var botonNuevoJuego = document.querySelector(".boton__nuevo--juego");
botonNuevoJuego.addEventListener("click", iniciarJuego);

var botonDesistir = document.querySelector(".boton__rendirse");
botonDesistir.addEventListener("click", function() {
    document.querySelector(".boton__inicio").style.display = "flex";
    document.querySelector(".agregar__palabra").style.display = "none"; 
    document.querySelector(".ahorcado").style.display = "none";
})