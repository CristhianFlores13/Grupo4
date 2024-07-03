function validateForm() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
  
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
      alert('Por favor, completa todos los campos');
      return false;
    }
  
    // Simulación de envío del formulario (en un entorno real, deberías enviar los datos al servidor)
    var responseElement = document.getElementById('response');
    responseElement.innerHTML = '<p>Enviando mensaje...</p>';
    responseElement.style.display = 'block';
  
    setTimeout(function() {
      responseElement.innerHTML = '<p>Mensaje enviado correctamente.</p>';
      document.getElementById('contactForm').reset();
      setTimeout(function() {
        responseElement.style.display = 'none';
      }, 3000); // Ocultar mensaje de respuesta después de 3 segundos
    }, 2000); // Simular un tiempo de carga de 2 segundos antes de mostrar el mensaje de éxito
  
    return false; // Evitar que el formulario se envíe realmente
  }
  