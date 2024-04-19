function encriptar() {
    let texto = document.getElementById("text-area").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");

    let textoCifrado = texto
        .replace(/a/gi, "ginkn")
        .replace(/e/gi, "feghr")
        .replace(/i/gi, "pqiec")
        .replace(/o/gi, "grigoreo")
        .replace(/u/gi, "приветик");

    if (texto.length != 0) {
        document.getElementById("text-area").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado exitosamente";
        parrafo.textContent = "";
    }
    else {
        tituloMensaje.textContent = "";
        parrafo.textContent = "Escribe lo que quieres encriptar o desencriptar";

        alert("Debes ingresar algún texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("text-area").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");

    let textoCifrado = texto
        .replace(/ginkn/gi, "a")
        .replace(/feghr/gi, "e")
        .replace(/pqiec/gi, "i")
        .replace(/grigoreo/gi, "o")
        .replace(/приветик/gi, "u");

    if (texto.length != 0) {
        document.getElementById("text-area").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado exitosamente";
        parrafo.textContent = "";
    }
    else {
        tituloMensaje.textContent = "";
        parrafo.textContent = "Escribe lo que quieres encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}


