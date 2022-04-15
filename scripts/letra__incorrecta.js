function dLetraIncorrecta(letra) {
    var letraNo = document.createElement("span");
    letraNo.classList.add("letra__error");
    letraNo.textContent = letra;
    document.querySelector(".letras__error").appendChild(letraNo);
}