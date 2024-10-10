//datos
let correo = document.getElementById("correo")
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let genero = document.getElementsByName("genero");
let razonContacto = document.getElementById("razonContacto")
//botones 
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
//expreciones
const expreciones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    razonContacto: /^[\w\W\s]{10,300}$/
}
//evento
document.querySelector('form').addEventListener('submit', function(event) {
    if (!validar()) {
        event.preventDefault();  // Evita el envío del formulario si hay errores
    }else{
        alert('envio de formulario exitoso')
    }
});
button1.addEventListener("click",validar)
button2.addEventListener("click", function(){
    let esValido = validar(); 
    if (esValido) {
        let confirmar = confirm('¿Quieres cancelar el proceso?');
        if (confirmar) {
            alert('El proceso ha sido cancelado');
            correo.value=""
            nombre.value=""
            apellido.value=""
            razonContacto.value=""
            for (let i = 0; i < genero.length; i++) {
                genero[i].checked = false; 
            }
        } else {
            alert('El proceso continua');
        }
    } else {
        alert('No se han ingresado datos');
    }
});

// Función de validación
function validar(){
    let esValido = true; 

   // Validación del correo
   if (correo.value === "") {
    esValido = false;
    alert('El correo no puede estar vacío');
    correo.style.background = "red";
} else if (!expreciones.correo.test(correo.value)) {
    esValido = false;
    alert('El correo no es válido');
    correo.style.background = "red";
} else {
    correo.style.background = "";
}

// Validación del nombre
if (nombre.value === "") {
    esValido = false;
    alert('El nombre no puede estar vacío');
    nombre.style.background = "red";
} else if (!expreciones.nombre.test(nombre.value)) {
    esValido = false;
    alert('El nombre no es válido');
    nombre.style.background = "red";
} else {
    nombre.style.background = "";
}

// Validación del apellido
if (apellido.value === "") {
    esValido = false;
    alert('El apellido no puede estar vacío');
    apellido.style.background = "red";
} else if (!expreciones.apellido.test(apellido.value)) {
    esValido = false;
    alert('El apellido no es válido');
    apellido.style.background = "red";
} else {
    apellido.style.background = "";
}

// Validación de la razón de contacto
if (razonContacto.value === "") {
    esValido = false;
    alert('La razón de contacto no puede estar vacía');
    razonContacto.style.background = "red";
} else if (!expreciones.razonContacto.test(razonContacto.value)) {
    esValido = false;
    alert('La razón de contacto no es válida');
    razonContacto.style.background = "red";
} else {
    razonContacto.style.background = "";
}

return esValido;
}
