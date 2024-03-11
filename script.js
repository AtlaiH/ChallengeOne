//Creamos variable regex, que es una expresion regular
var regex = /[áéíóú]/;
document.getElementById('copiar').style.display = 'none';

//funcion validar texto
function validarTexto(){
    var entradaTexto = document.getElementById('textarea-encriptar').value.toLowerCase(); // Convierte a minúsculas

    // Verificamos texto no tiene tildes y no esté vacío
    if (regex.test(entradaTexto)) { // Validación texto tildes
        //Ocultamos el boton copiar
        document.getElementById('copiar').style.display = 'none';
        //mostramos los complementos de nuestra vista resultado 
        document.getElementById('txt-complementario').style.display = 'block';
        document.getElementById('muñeco-resultado').style.display = 'block';
        document.getElementById('txt-resultado').textContent = 'Ningún mensaje fue encontrado';
        alert("Por favor, ingresa un texto sin tildes antes de encriptar.");
    } else if (entradaTexto.trim() === "") { // Validación texto vacío
        //Ocultamos el boton copiar
        document.getElementById('copiar').style.display = 'none';
        //mostramos los complementos de nuestra vista resultado 
        document.getElementById('txt-complementario').style.display = 'block';
        document.getElementById('muñeco-resultado').style.display = 'block';
        document.getElementById('txt-resultado').textContent = 'Ningún mensaje fue encontrado';
        alert("El texto a encriptar no puede estar vacío.");
    } else {
        //ocultamos los complementos de nuestra vista resultado 
        document.getElementById('txt-complementario').style.display = 'none';
        document.getElementById('muñeco-resultado').style.display = 'none';
        encriptarTexto();
        //Mostramos el boton copiar
        document.getElementById('copiar').style.display = 'block';
    }
}

//funcion encriptar texto
function encriptarTexto() {
    /*La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"*/
    
    // Realizamos la encriptación 
    var txtResultado = document.getElementById('txt-resultado');
    var entradaTexto = document.getElementById('textarea-encriptar').value.toLowerCase();
    var resultado = entradaTexto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    // Muestra el resultado
    txtResultado.textContent = resultado; 
    ajustarTamañoTextarea(txtResultado);
}
function desencriptarTexto(){
    // Realiza la desencriptación
    var txtResultado = document.getElementById('txt-resultado');
    var entradaTextoEncriptado = document.getElementById('textarea-desencriptar').value.toLowerCase();
    var resultadoDesencriptado = entradaTextoEncriptado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    //Mostramos resultado
    txtResultado.textContent = resultadoDesencriptado; 
    ajustarTamañoTextarea(txtResultado);
}
//ajustar tamaño de texto resultado
function ajustarTamañoTextarea(textarea) {
    textarea.style.height = 'auto'; // Restaura la altura a 'auto' para obtener la altura deseada
    textarea.style.height = textarea.scrollHeight + 'px'; // Establece la altura según el contenido
  }
//funcion para copiar al portapapeles
function copy(){    
    var txtResultado = document.getElementById('txt-resultado');
    var entradaTextoEncriptado = document.getElementById('textarea-desencriptar');
    navigator.clipboard.writeText(txtResultado.value);
}


