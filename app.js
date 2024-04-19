
function encriptar() {
    let texto = document.getElementById("texto").value;
    let textoEncriptado = "";

    if (texto === "") {
        document.getElementById("position").style.display = "block";
        document.getElementById("btn-copiar").style.display = "none";
        document.getElementById("msj").value = textoEncriptado;
        return;
    } else {

        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === texto[i].toUpperCase()) {
                alert("¡Por favor, evita ingresar letras mayúsculas!");
                return; // Detener la ejecución de la función si se encuentra una letra mayúscula
            }
        }
        for (let i = 0; i < texto.length; i++) {
            switch (texto[i]) {
                case "a":
                    textoEncriptado += "ai";
                    break;
                case "e":
                    textoEncriptado += "enter";
                    break;
                case "i":
                    textoEncriptado += "imes";
                    break;
                case "o":
                    textoEncriptado += "ober";
                    break;
                case "u":
                    textoEncriptado += "ufat";
                    break;
                default:
                    textoEncriptado += texto[i];
                    break;
            }
            document.getElementById("position").style.display = "none";
            document.getElementById("btn-copiar").style.display = "block";
            document.getElementById("msj").value = textoEncriptado;
            document.getElementById("texto").value = "";

            let historialItem = document.createElement("li");
            historialItem.textContent = "Texto encriptado: " + textoEncriptado;
            document.querySelector(".historial").appendChild(historialItem);
        }
    }
    return;
}

/*hola - hoberlai*/

function desencriptar() {
    let textoEncriptado = document.getElementById("texto").value;
    let textoDesencriptado = "";

    if (textoEncriptado === "") {
        document.getElementById("position").style.display = "block";
        document.getElementById("btn-copiar").style.display = "none";
        document.getElementById("msj").value = textoDesencriptado;
    } else {
        for (let i = 0; i < textoEncriptado.length; i++) {
            if (textoEncriptado[i] === "a" && textoEncriptado[i + 1] === "i") {
                textoDesencriptado += "a";
                i += 1; // Avanza el índice para evitar duplicados
            } else if (textoEncriptado[i] === "e" && textoEncriptado.substring(i, i + 5) === "enter") {
                textoDesencriptado += "e";
                i += 4;
            } else if (textoEncriptado[i] === "i" && textoEncriptado.substring(i, i + 4) === "imes") {
                textoDesencriptado += "i";
                i += 3;
            } else if (textoEncriptado[i] === "o" && textoEncriptado.substring(i, i + 4) === "ober") {
                textoDesencriptado += "o";
                i += 3;
            } else if (textoEncriptado[i] === "u" && textoEncriptado.substring(i, i + 4) === "ufat") {
                textoDesencriptado += "u";
                i += 3;
            } else {
                textoDesencriptado += textoEncriptado[i];
            }

            document.getElementById("msj").value = textoDesencriptado;
            document.getElementById("position").style.display = "none";
            document.getElementById("btn-copiar").style.display = "block";
            document.getElementById("texto").value = "";

            let historialItem = document.createElement("li");
            historialItem.textContent = "Texto Desencriptado: " + textoDesencriptado;
            document.querySelector(".historial").appendChild(historialItem);
        }

    }


    return;
}


function copiarTexto() {
    let texto = document.getElementById("msj");

    // Seleccionar el texto dentro del textarea
    texto.select();
    document.execCommand("copy");

}

function aparecerDesaparecer() {
    var circleXMark = document.getElementsByClassName("fa-circle-xmark")[0];
    var caretDown = document.getElementsByClassName("fa-caret-down")[0];

    if (document.getElementById("caja").style.display !== "block" && circleXMark.style.display !== "block") {
        document.getElementById("caja").style.display = "block";
        circleXMark.style.display = "block";
        caretDown.style.display = "none";
    } else {
        document.getElementById("caja").style.display = "none";
        circleXMark.style.display = "none";
        caretDown.style.display = "block";
    }

    return;
}