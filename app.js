
function encriptar() {
    let texto = document.getElementById("texto").value;
    let textoEncriptado = "";

    if(texto === ""){
        document.getElementById("position").style.display = "block";
        document.getElementById("btn-copiar").style.display = "none";
    }else{
    for (let i = 0; i < texto.length; i++) {
        if (texto === texto.toUpperCase() || texto[0] === texto[0].toUpperCase()) {
            if (texto[0] === texto[0].toUpperCase()) {
                alert("¡Por favor, evita ingresar la palabra completa en mayúsculas!");
            } else {
                alert("¡Por favor, evita ingresar letras mayúsculas al inicio de la palabra!");
            }
            return; // Detener la ejecución de la función
        }  
        switch(texto[i]) {
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
    }
    document.getElementById("position").style.display = "none";
    document.getElementById("btn-copiar").style.display = "block";
    document.getElementById("msj").value = textoEncriptado;
    }
    console.log(textoEncriptado);
}

/*hola - hoberlai*/

function desencriptar() {
    let textoEncriptado = document.getElementById("texto").value;
    let textoDesencriptado = "";

    if(textoEncriptado === ""){
        document.getElementById("position").style.display = "block";
        document.getElementById("btn-copiar").style.display = "none";
    }else{
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
    }
    document.getElementById("msj").value = textoDesencriptado;
    document.getElementById("position").style.display = "none";
    document.getElementById("btn-copiar").style.display = "block";
    }
    console.log(textoDesencriptado);
}

function copiarTexto() {
    let texto = document.getElementById("msj");
    
    // Seleccionar el texto dentro del textarea
    texto.select();
}


