const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 11000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

Toast.fire({
    icon: 'success',
    title: 'Recuerda usar el botón de menú para navegar por la págin web, o en la parte inferior aparecerá las páginas enumeradas'
})
/* var saludo = prompt ("Hola, buen día, dime tu nombre");

alert("Hola " + saludo + " Bienvenido a mi página Web") */

/* const profe = "Jorge Esneider"
var nombreprofe = prompt ("¿Hola, cual es tu nombre?")

if ( nombreprofe == profe){
    alert("Hola Profe, bienvenido, espero te parezca agradable mi página")
}

else if ( nombreprofe == "Jorge"){
    alert("Hola Profe, bienvenido, espero te parezca agradable mi página")
}

else if ( nombreprofe == "jorge"){
    alert("Hola Profe, bienvenido, espero te parezca agradable mi página")
}

else if ( nombreprofe == "JORGE"){
    alert("Hola Profe, bienvenido, espero te parezca agradable mi página")
}

else if ( nombreprofe == "JORGE ESNEIDER"){
    alert("Hola Profe, bienvenido, espero te parezca agradable mi página")
}

else if ( nombreprofe == "jorge esneider"){
    alert("Hola Profe, bienvenido, espero te parezca agradable mi página")
}
else if ( nombreprofe == "Jorge Esneider"){
    alert("Hola Profe, bienvenido, espero te parezca agradable mi página")
}
else if ( nombreprofe == "Jorge esneider"){
    alert("Hola Profe, bienvenido, espero te parezca agradable mi página")
}
else if ( nombreprofe == "jorge Esneider"){
    alert("Hola Profe, bienvenido, espero te parezca agradable mi página")
}

else if ( nombreprofe == "Esneider"){
    alert("Hola Profe bienvenido, espero te parezca agradable mi página")
}
else if ( nombreprofe == "esneider"){
    alert("Hola Profe bienvenido, espero te parezca agradable mi página")
}
else if ( nombreprofe == "ESNEIDER"){
    alert("Hola Profe bienvenido, espero te parezca agradable mi página")
}


else {
    alert("Hola compañer@ " + nombreprofe + " bienvenid@, espero te encuentres bien y te parezca agradable mi página")
}

 */










