function guardarDatos() {
    // Obtener los valores del formulario
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;
    var genero = document.getElementById('genero').value;

    // Crear un objeto con los datos del usuario
    var usuario = {
        nombres: nombres,
        apellidos: apellidos,
        correo: correo,
        contrasena: contrasena,
        genero: genero
    };

    // Convertir el objeto a una cadena JSON y almacenar en localStorage
    localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));

    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = 'pagina-de-inicio-sesion.html';

    // Evitar el envío del formulario por defecto
    return false;
}
