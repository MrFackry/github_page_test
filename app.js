// Obtener los elementos del formulario
let nombre = document.getElementById("primer_nombre");
let segundoNombre = document.getElementById("segundo_nombre");
let apellido = document.getElementById("primer_apellido");
let segundoApellido = document.getElementById("segundo_apellido");
let correo = document.getElementById("correo");
let numero = document.getElementById("numero"); 
let programa = document.getElementById("programa");

// Expresiones regulares
const expreciones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    segundoNombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    segundoApellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    numero: /^\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/ 
};

// Evento de envío del formulario
document.querySelector('form').addEventListener('submit', function(event) {
    if (!validar()) {
        event.preventDefault();  // Evita el envio del formulario si hay errores
    } else {
        alert('Formulario enviado exitosamente');
    }
});

// Funcion de validación
function validar() {
    let esValido = true; 
    let mensajesError = ""; // Para acumular los mensajes de error

    // Validacion del nombre
    if (nombre.value === "") {
        esValido = false;
        mensajesError += "El nombre no puede estar vacio.\n";
        nombre.style.border = "1px solid red";
    } else if (!expreciones.nombre.test(nombre.value)) {
        esValido = false;
        mensajesError += "El nombre no es valido.\n";
        nombre.style.border = "1px solid red";
    } else {
        nombre.style.border = "";
    }

    // Validacion del segundo nombre
    if (segundoNombre.value === "") {
        esValido = false;
        mensajesError += "El segundo nombre no puede estar vacio.\n";
        segundoNombre.style.border = "1px solid red";
    } else if (!expreciones.segundoNombre.test(segundoNombre.value)) {
        esValido = false;
        mensajesError += "El segundo nombre no es valido.\n";
        segundoNombre.style.border = "1px solid red";
    } else {
        segundoNombre.style.border = "";
    }

    // Validacion del apellido
    if (apellido.value === "") {
        esValido = false;
        mensajesError += "El apellido no puede estar vacio.\n";
        apellido.style.border = "1px solid red";
    } else if (!expreciones.apellido.test(apellido.value)) {
        esValido = false;
        mensajesError += "El apellido no es valido.\n";
        apellido.style.border = "1px solid red";
    } else {
        apellido.style.border = "";
    }

    // Validacion del segundo apellido
    if (segundoApellido.value === "") {
        esValido = false;
        mensajesError += "El segundo apellido no puede estar vacio.\n";
        segundoApellido.style.border = "1px solid red";
    } else if (!expreciones.segundoApellido.test(segundoApellido.value)) {
        esValido = false;
        mensajesError += "El segundo apellido no es valido.\n";
        segundoApellido.style.border = "1px solid red";
    } else {
        segundoApellido.style.border = "";
    }

    // Validacion del correo
    if (correo.value === "") {
        esValido = false;
        mensajesError += "El correo no puede estar vacio.\n";
        correo.style.border = "1px solid red";
    } else if (!expreciones.correo.test(correo.value)) {
        esValido = false;
        mensajesError += "El correo no es valido.\n";
        correo.style.border = "1px solid red";
    } else {
        correo.style.border = "";
    }

    // Validacion del numero de contacto
    if (numero.value === "") {
        esValido = false;
        mensajesError += "El numero de contacto no puede estar vacio.\n";
        numero.style.border = "1px solid red";
    } else if (!expreciones.numero.test(numero.value)) {
        esValido = false;
        mensajesError += "El numero de contacto no es valido.\n";
        numero.style.border = "1px solid red";
    } else {
        numero.style.border = "";
    }

    // Validacion del programa
    if (programa.value === "none") {
        esValido = false;
        mensajesError += "Por favor seleccione su programa.\n";
        programa.style.border = "1px solid red";
    } else {
        programa.style.border = "";
    }

    // Mostrar todas las alertas de error juntas
    if (!esValido) {
        alert(mensajesError);
    }

    return esValido;
}