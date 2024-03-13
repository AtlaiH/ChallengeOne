//Creamos variable y marcamos como expresion regular los valores que no ocuparemos
var regex =  /^[a-z\s]+$/;
//El botón copiar no se habilitará hasta después
document.getElementById('copiar').style.display = 'none';

//funcion validar texto
function validarTexto(){
     //Creamos una variable entrada de texto y Convierte todo a minúsculas
    var entradaTexto = document.getElementById('textarea-encriptar').value; 

    // Verificamos texto no tiene tildes y no esté vacío
    if (regex.test(entradaTexto)) { // si tenemos texto entonces procedemos a encriptar
        //ocultamos los complementos de nuestra vista resultado 
        document.getElementById('txt-complementario').style.display = 'none';
        document.getElementById('muñeco-resultado').style.display = 'none';
        //Llamamos la funcion encriptarTexto
        encriptarTexto();
        //Mostramos el boton copiar
        document.getElementById('copiar').style.display = 'block';

    } else if (entradaTexto.trim() === "") { // Validación texto vacío
        //Ocultamos el boton copiar
        document.getElementById('copiar').style.display = 'none';
        //mostramos los complementos de nuestra vista resultado 
        document.getElementById('txt-complementario').style.display = 'block';
        document.getElementById('muñeco-resultado').style.display = 'block';
        document.getElementById('txt-resultado').textContent = 'Ningún mensaje fue encontrado';
        alert("El texto a encriptar no puede estar vacío.");
    } else {
        //Ocultamos el boton copiar
        document.getElementById('copiar').style.display = 'none';
        //mostramos los complementos de nuestra vista resultado 
        document.getElementById('txt-complementario').style.display = 'block';
        document.getElementById('muñeco-resultado').style.display = 'block';
        document.getElementById('txt-resultado').textContent = 'Ningún mensaje fue encontrado';
        alert("Por favor, ingresa un texto sin tildes o caracteres especiales antes de encriptar.");
        document.getElementById('textarea-encriptar').value ='';
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
    var entradaTexto = document.getElementById('textarea-encriptar').value;
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

//Funcion desencriptar-prueba

//ajustar tamaño de texto resultado 
function ajustarTamañoTextarea(textarea) {
    textarea.style.height = 'auto'; // Restaura la altura a 'auto' para obtener la altura deseada
    textarea.style.height = textarea.scrollHeight + 'px'; // Establece la altura según el contenido
}

function desencriptarTexto() {
    // Obtener el elemento de resultado por su ID
    var txtResultado = document.getElementById('txt-resultado');
    // Obtener el texto encriptado del textarea por su ID
    var entradaTextoEncriptado = document.getElementById('textarea-encriptar').value.toLowerCase();
    // Inicializar el resultado desencriptado con el texto encriptado
    var resultadoDesencriptado = entradaTextoEncriptado;
    // Definir las palabras clave y sus reemplazos
    var palabrasClave = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    // Iterar sobre las palabras clave y realizar los reemplazos
    for (var clave in palabrasClave) {
        var reemplazo = palabrasClave[clave];
        resultadoDesencriptado = resultadoDesencriptado.split(clave).join(reemplazo);
    }
    // Mostrar el resultado desencriptado en el elemento de resultado
    txtResultado.textContent = resultadoDesencriptado;
    ajustarTamañoTextarea(txtResultado);
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
