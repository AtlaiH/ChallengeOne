//Creamos variable y marcamos como expresion regular los valores que no ocuparemos
var regex =  /^[a-z\s]+$/;
//El botón copiar no se habilitará hasta después
document.getElementById('copiar').style.display = 'none';

//funcion validar texto
function validarTexto(entradaTexto) {
    // Verificamos texto no tiene tildes y no esté vacío
    if (regex.test(entradaTexto)) {
        return true;
    } else if (entradaTexto.trim() === "") { // Validación texto vacío
        alert("El texto a encriptar no puede estar vacío.");
    } else {
        alert("Por favor, ingresa un texto sin tildes, mayúsculas o caracteres especiales antes de encriptar o desencriptar");
    }
    location.reload();
    return false;
}

//funcion encriptar texto
function encriptarTexto() {
    var entradaTexto = document.getElementById('textarea-encriptar').value;
    if (validarTexto(entradaTexto)) {
        /*La letra "e" es convertida para "enter"
        La letra "i" es convertida para "imes"
        La letra "a" es convertida para "ai"
        La letra "o" es convertida para "ober"
        La letra "u" es convertida para "ufat"*/
        var txtResultado = document.getElementById('txt-resultado');
        var resultado = entradaTexto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

        txtResultado.textContent = resultado; 
        document.getElementById('copiar').style.display = 'block';
        document.getElementById('txt-complementario').style.display = 'none'
        document.getElementById('muñeco-resultado').style.display = 'none';
        ajustarTamañoTextarea(txtResultado);
    }
}

//Funcion desencriptar
function desencriptarTexto() {
    var entradaTextoEncriptado = document.getElementById('textarea-encriptar').value;
    if (validarTexto(entradaTextoEncriptado)) {
        var txtResultado = document.getElementById('txt-resultado');
        var resultadoDesencriptado = entradaTextoEncriptado;
        var palabrasClave = {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
        };

        for (var clave in palabrasClave) {
            var reemplazo = palabrasClave[clave];
            resultadoDesencriptado = resultadoDesencriptado.split(clave).join(reemplazo);
        }

        txtResultado.textContent = resultadoDesencriptado;
        document.getElementById('copiar').style.display = 'block';
        document.getElementById('txt-complementario').style.display = 'none'
        document.getElementById('muñeco-resultado').style.display = 'none';
        ajustarTamañoTextarea(txtResultado);
    }
}

//funcion para copiar al portapapeles
function copy(){    
    var txtResultado = document.getElementById('txt-resultado');
    var entradaTextoEncriptado = document.getElementById('textarea-encriptar');
    navigator.clipboard.writeText(txtResultado.value);
    entradaTextoEncriptado.value = '';
}

//funcion recargar, para tener la página de inicio tal y como cuando entramos a esta
function recargar(){
    location.reload();
}
