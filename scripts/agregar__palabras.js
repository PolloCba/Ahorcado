function agregarPalabra() {
    document.querySelector(".boton__inicio").style.display = "none";
    document.querySelector(".agregar__palabra").style.display = "flex"; 
    document.querySelector(".ahorcado").style.display = "none"; 
    
    var btnGuardarEmpezar = document.querySelector(".boton__guardar--empezar");
    btnGuardarEmpezar.addEventListener("click", function(event) {
        var entrada = document.querySelector(".input__palabra--nueva");
        var valor = verificarPalabra(entrada.value);
        if(valor) {
            palabras.push(entrada.value);
            console.log(palabras);
            iniciarJuego();
        }
    });

    var btnCancelar = document.querySelector(".boton__cancelar");
    btnCancelar.addEventListener("click", function(event) {
        document.querySelector(".boton__inicio").style.display = "flex";
        document.querySelector(".agregar__palabra").style.display = "none"; 
        document.querySelector(".entrada__juego").style.display = "none";
    })
}