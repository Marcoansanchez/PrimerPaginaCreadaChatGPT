// script.js
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada
  
      // Validar los campos del formulario
      var nombre = document.querySelector('input[type="text"]').value;
      var email = document.querySelector('input[type="email"]').value;
      var mensaje = document.querySelector('textarea').value;
  
      if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, complete todos los campos del formulario.');
      } else {
        // Aquí puedes enviar el formulario o realizar otras acciones
        alert('¡Formulario enviado correctamente!');
        form.reset(); // Restablece los valores del formulario
      }
    });
  });
  