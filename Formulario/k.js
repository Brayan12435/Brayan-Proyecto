document.addEventListener("DOMContentLoaded", function() {

    var botonBorrar = document.getElementById("borrar");

    var formulario = document.getElementById("registrationForm");
    
    botonBorrar.addEventListener("click", function() {
        
        formulario.reset();
    });
});

   